console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');

  addMyEventListeners();
  

  $('#button1').on('click', function(){
    console.log('Button has been clicked');
    $('#dataContainer1').load("https://raw.githubusercontent.com/ArturMro/MCR76-artur_00/master/data.json?token=AN333T5F6MKHYZZEPY4UV4K6VM4EW");//this link is different every time when we click raw on github, and stop work after few mins
    
  });

  $('#button2').on('click', function(){
    $.getJSON("https://raw.githubusercontent.com/ArturMro/MCR76-artur_00/master/data.json?token=AN333T5F6MKHYZZEPY4UV4K6VM4EW", function(result){
      data = result;
      displayInConsole();
      $.each(result, function(i, field){
        $('#dataContainer2').append(field + ", ");
      });
    });
  });


  $('#mcrButton').on('click', function(){
    
    $.get('https://mycourseresource.com/mcr76/calc.php', 
      {"op" : "sub", "a":"5", "b":"7", "apikey":"1234"},
      function(data, status){
        console.log(data);
        console.log(status);
      });
    
    $('#mcrData').load('https://mycourseresource.com/mcr76/calc.php', {"op" : "sub", "a":"5", "b":"7", "apikey":"1234"});
  });



























  $('#getWeather').on('click', function(){
    console.log('Weather button has been clicked');
    //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
    //api.openweathermap.org/data/2.5/weather?lat={53}&lon={6}&appid={c4bea8c65dab79ca646282e78ce283f2}
    $('#weatherApi').load("api.openweathermap.org/data/2.5/weather?lat={53}&lon={6}&appid={c4bea8c65dab79ca646282e78ce283f2}");
    var weatherData = $('#weatherApi');
  });











  
 
});


function addMyEventListeners(){


};

function displayInConsole(){
  console.log(data);
}





