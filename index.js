function weather(){
    let input_city = document.getElementById('input_city').value; 
    let output_temp = document.getElementById('temp');
    let city = document.getElementById('city');
    var API_key = '39a9a737b07b4b703e3d1cd1e231eedc';
    if(input_city!=""){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input_city}&appid=${API_key}`)
    .then((response)=>{
        return response.json();
    }).then((val)=>{
        let temp_in_celcius = val.main.temp - 273.15;
        output_temp.innerHTML = temp_in_celcius.toFixed(2)+"&#176; C";
        city.innerHTML = val.name;
    }).catch((err)=>{
        output_temp.innerHTML = `City <i style="color:red"> "${input_city}" </i> not found`;
        city.innerHTML = "";
    })
   }
}
