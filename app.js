const api_key = `e5a9bd879c43d7f71321a4eb51070211`;
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
  const inputBtn = document.getElementById('input-btn').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputBtn}&appid=${api_key}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const cityName = data.name;
      const temp = data.main.temp;
      // const tempToCel = temp - 273.15;
      const description = data.weather[0].description;
      // const weatherIcon = data.weather[0].icon;

      document.getElementById('city').innerText = cityName;
      document.getElementById('temp').innerText = temp;
      document.getElementById('des').innerText = description;
      document.getElementById('w-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(res => alert("Please type right city name"))
})