// forecast.js 현재 날씨 정보 가져오기
export const _getForecastNowInfo = async (lat, lon) => {
  const weatherNow = await _getWeatherNow(lat, lon);
  // 주소의 경우 한국이면 다음 지도 사용
  // 아닌 경우 날씨 API 에서 제공하는 이름 그대로 사용
  let address = null;
  if (lat >= 33 && lat <= 43 && lon >= 124 && lon <= 132) {
    address = await _getAddr(lat, lon);
  } else {
    address = weatherNow.name;
  }
  return {
    address: address,
    weatherType: _changeWCode(weatherNow.weather[0].id),
    temp: Math.floor(weatherNow.main.temp),
    humidity: weatherNow.main.humidity,
    windSpeed: weatherNow.wind.speed,
    windDeg: weatherNow.wind.deg,
    // 일출, 일몰 데이터의 경우 초 단위 데이터가 들어옴
    // Date.now() 는 단위가 밀리초여서 비교가 불가능
    // *1000 을 통해 밀리초로 변경
    sunrise: weatherNow.sys.sunrise * 1000,
    sunset: weatherNow.sys.sunset * 1000,
    rain: weatherNow.rain
  };
};

export const _getDateString = date => {
  const dateText = date.toLocaleString('ko-KR');
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let hoursText;
  if (hours === 0) {
    hoursText = `오전 12:`;
  } else if (hours < 10) {
    hoursText = `오전 0${hours}:`;
  } else if (hours < 12) {
    hoursText = `오전 ${hours}:`;
  } else if (hours === 12) {
    hoursText = `오후 12:`;
  } else if (hours < 22) {
    hoursText = `오후 0${hours - 12}:`;
  } else {
    hoursText = `오후 0${hours - 12}:`;
  }

  if (minutes < 10) {
    return `${dateText.substr(0, 11)} ${hoursText}0${minutes}`;
  } else {
    return `${dateText.substr(0, 11)} ${hoursText}${minutes}`;
  }
};

// forecast.js 미래 날씨 예측 정보 가저오기
export const _getForecastNext5Info = async (lat, lon) => {
  const weatherNext5 = await _getWeatherNext5(lat, lon);
  const list = weatherNext5.list.map(obj => {
    const date = new Date(obj.dt * 1000);
    return {
      dt: obj.dt * 1000,
      dt_month: date.getMonth() + 1,
      dt_day: date.getDate(),
      dt_hours: date.getHours(),
      weatherType: _changeWCode(obj.weather[0].id),
      temp: Math.floor(obj.main.temp),
      rain: obj.rain === undefined ? 0 : obj.rain['3h']
    };
  });
  return list;
};

// 메인 페이지 현재 날씨 정보 가져오기
export const _getCardLocaInfo = async (lat, lon) => {
  const weatherNow = await _getWeatherNow(lat, lon);
  let address = null;
  if (lat >= 33 && lat <= 43 && lon >= 124 && lon <= 132) {
    address = await _getAddr(lat, lon);
  } else {
    address = weatherNow.name;
  }
  return {
    address: address,
    temp: Math.floor(weatherNow.main.temp),
    weatherType: _changeWCode(weatherNow.weather[0].id),
    sunrise: weatherNow.sys.sunrise * 1000,
    sunset: weatherNow.sys.sunset * 1000
  };
};

// weather type code 를 text 로 변경
const _changeWCode = id => {
  if (id >= 200 && id < 300) {
    return 'Thunderstorm';
  } else if (id >= 300 && id < 400) {
    return 'Drizzle';
  } else if (id >= 500 && id < 600) {
    return 'Rain';
  } else if (id >= 600 && id < 700) {
    return 'Snow';
  } else if (id >= 700 && id < 800) {
    return 'Atmosphere';
  } else if (id === 800) {
    return 'Clear';
  } else if (id > 800 && id < 900) {
    return 'Clouds';
  } else {
    throw new Error('날씨 코드가 이상해!');
  }
};
// 좌표 위치
const _getAddr = async (lat, lon) => {
  const address = await fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`,
    {
      headers: {
        Authorization: `KakaoAK 87fbfced5e60485e49838e6f25b99861`
      }
    }
  )
    .then(response => response.json())
    .then(json => json.documents[0].address_name);
  return address;
};
// 현재 날씨
const _getWeatherNow = async (lat, lon) => {
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=59c393b03e080c261debf8f17784f0c4&units=metric`
  ).then(response => response.json());
  return weather;
};

// 미래 5일 날씨 예보
const _getWeatherNext5 = async (lat, lon) => {
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=59c393b03e080c261debf8f17784f0c4&units=metric`
  ).then(response => response.json());
  return weather;
};
