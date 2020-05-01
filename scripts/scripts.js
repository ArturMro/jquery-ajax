console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');

  addMyEventListeners();
  

  $('#button1').on('click', function(){
    console.log('Button has been clicked');
    $('#dataContainer1').load("https://raw.githubusercontent.com/ArturMro/JSON/master/data.json");
  });

  $('#button2').on('click', function(){
    $.getJSON("https://raw.githubusercontent.com/ArturMro/JSON/master/data.json", function(result){
      data = result;
      displayInConsole();
      $.each(result, function(i, field){
        $('#dataContainer2').append(field + ", ");
      });
    });
  });

 // ***************************************get method*******************************************
  $('#mcrButton1').on('click', function(){
    
    $.get('https://mycourseresource.com/mcr76/calc.php', 
      {"op" : "sub", "a":"5", "b":"7", "apikey":"1234"},
      function(data, status){
        console.log(data);
        console.log(status);
      });
    
    $('#mcrData1').load('https://mycourseresource.com/mcr76/calc.php', {"op" : "sub", "a":"5", "b":"7", "apikey":"1234"});
  });


 //*************************************post method**********************************************
 $('#mcrButton2').on('click', function(){
    
  $.post('https://mycourseresource.com/mcr76/contact.php', 
    {"op" : "mul", "a":"6", "b":"7", "apikey":"1234"},
    function(data, status){
      console.log(data);
      $('#mcrData2').html(data);
      console.log(status);

    });
  
  
 });

 //*******************************************rating********************************************
  //so we have 5 stars
  //we need on users click to cound how many stars have been clicked
  //and change icon or add background for rating
 var starCount = 0;
 $('.fa-star').on('click', function(){
   //this part meant to click how many stars have been clicked and than sent this info to server as rating(0-5) but need sort how to click star only once
    starCount = starCount + 1;
    console.log(starCount);
 });

 //*****************************************weather*****************************************

  $('#getWeather').on('click', function(){
      console.log('Weather button has been clicked');
          //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
          //api.openweathermap.org/data/2.5/weather?lat=53&lon=6&appid=c4bea8c65dab79ca646282e78ce283f2
      $.get('api.openweathermap.org/data/2.5/weather',
      {"lat": "53", "lon": "6","appid": "c4bea8c65dab79ca646282e78ce283f2"},
      function(data, status){
        console.log(data);
        $('#weatherApi').html(data);
        console.log(status);
      }); 
 

      

  });

    





   




  
 
});


var data;




function addMyEventListeners(){


};

function displayInConsole(){
  console.log(data);
}





