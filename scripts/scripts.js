console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');

  addMyEventListeners();
  



 
});


var data;




function addMyEventListeners(){


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
    
    $('#mcrData1').load('https://mycourseresource.com/mcr76/calc.php', {"op": "sub", "a": "5", "b": "7", "apikey": "1234"});
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

  /* how many stars*/
  var ratingNumber = $('.fas').length;  //this is our rating
  console.log('rating number is ' + ratingNumber);

  /* use name */
  var user = $('#name').val();  // this is our user

  /* users comment */
  var comment = $('#rating').val();  //this is our users comment


 $('.far').on('click', function(){
   $(this).toggleClass('fas');
  });


 $('#ratingBtn').on('click', function(){
  console.log('Submit rating has been clicked');
  $.post('https://mycourseresource.com/mcr76/stefan.php', 
    {'key':'2020',
     'user': $('#name').val(),
     'rating': $('.fas').length, 
     'comment': $('#rating').val(), 
     'format':'json'},
     function(data, status){
     console.log(data);
     console.log(status);
    })
 });


 /*
 $.post('https://mycourseresource.com/mcr76/stefan.php', 
    {'key':'2020', 'user':'Artur', 'rating':4, 'comment':'It is superb!!', 'format':'json'},
    function(data, status){
      console.log(data);
      console.log(status);
      var jsObject = JSON.parse(data);
      console.log(jsObject);
      console.log(jsObject["ratings"]);
      console.log(jsObject["ratings"][1]);
      console.log(jsObject["ratings"][1]["unixTime"]);

      var dateAndTime = new Date((jsObject["ratings"][1]["unixTime"] * 1000));
      console.log(dateAndTime);
      var todaysDate = new Date();
      var dayOfMonth = todaysDate.getDate();
      var month = todaysDate.getMonth()+1;
      var year = todaysDate.getFullYear();
      var hour = todaysDate.getHours();
      var minutes = todaysDate.getMinutes();
      console.log('Today is ' + dayOfMonth + '.' + month + '.' + year + ' ' + hour + ':' + minutes);

      

  });

 */

 



 //*****************************************weather*****************************************

  $('#getWeather').on('click', function(){
      console.log('Weather button has been clicked');
          //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
                //api.openweathermap.org/data/2.5/weather?lat=53&lon=6&appid=c4bea8c65dab79ca646282e78ce283f2
          //http://api.openweathermap.org/data/2.5/weather?lat=53&lon=6&appid=c4bea8c65dab79ca646282e78ce283f2&units=metric
      $.get('http://api.openweathermap.org/data/2.5/weather',
      {"lat": "53", "lon": "6","appid": "c4bea8c65dab79ca646282e78ce283f2", "units":"metric"},
      function(data, status){
        console.log(data);
        
        $('#weatherApi').html(data);
        console.log(status);

        var weatherObject = data;
        console.log(weatherObject);

        var weather = JSON.stringify(weatherObject);
        console.log(weather);
        $('#weatherApi').html(weather);

        var temperature = data['main']['temp'];
        $('#temperature').html(temperature);
        var wind = data['wind']['speed'];
        $('#wind').html(wind);
        var humidity = data['main']['humidity'];
        $('#humidity').html(humidity);
        var sky = data['clouds']['all'];
        $('#sky').html(sky);
      

      }); 
 

      

  });


};

function displayInConsole(){
  console.log(data);
}





