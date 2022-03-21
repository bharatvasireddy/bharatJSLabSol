function weatherDetails(){
    const city = document.getElementById("city").value;
    console.log(city);

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`;


    fetch(url).then(response => response.json()).then(function setDetails(data){
        
        document.getElementById("cityName").innerText=data.name;
        document.getElementById("temp").innerText=data.main.temp+"°C";
        document.getElementById("weather").innerHTML = data.weather[0].main;
        console.log(data);
     }
    );
    
}