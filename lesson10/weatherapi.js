const apiURL 'api.openweathermap.org/data/2.5/weather?id={5604473}&appid={c6390f0b9c4148fb92fed04f0fae2502}'

const apiURL = "...";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.querySelector('#current-temp')
            .textContent = jsObject.main.temp;

        let image =
            'https://openweathermap.org/img/w/' +
            jsObject.weather[0].icon +
            'png';

        document.querySelector('#weather-icon')
            .getAttribute

    });