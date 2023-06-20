const cityList = document.getElementById("weather");
console.log(cityList);
console.log(cityList.value);

function showWeather() {
    let weatherInfo='';

  fetch("https://goweather.herokuapp.com/weather/"+cityList.value, { method: "get" })
    .then((response) => {
      return response.json();
    })
    .then((value) => {
        weatherInfo=value;
        console.log(weatherInfo)
        if(weatherInfo.temperature=== ""){
            document.getElementById('table').innerHTML=`<p>404 city not found ...</p>`;
        }
        else{
            document.getElementById('table').innerHTML=`
            <table border="1">
            <tr class="heading">
                <th colspan="4"><h2>weather of ${cityList.value}</h2></th>
            </tr>
            <tr>
                <th>temperature</th>
                <th>wind</th>
                <th>description</th>
            </tr>
            <tr>
                <td>${weatherInfo.temperature}</td>
                <td>${weatherInfo.wind}</td>
                <td>${weatherInfo.description}</td>
        
            </tr>
            <tr class="heading">
                <th colspan="4"><h2>forecast</h2></th>
            </tr>
            <tr>
                <th>day 1</th>
                <td>temperature ${weatherInfo.forecast[0].temperature}</td>
                <td>wind ${weatherInfo.forecast[0].wind}</td>
            </tr>
            <tr>
                <th>day 2</th>
                <td>temperature ${weatherInfo.forecast[1].temperature}</td>
                <td>wind ${weatherInfo.forecast[1].wind}</td>
            </tr>
            <tr>
                <th>day 3</th>
                <td>temperature ${weatherInfo.forecast[2].temperature}</td>
                <td>wind ${weatherInfo.forecast[2].wind}</td>
            </tr>
        
        </table>
            `
        }

    });

}
