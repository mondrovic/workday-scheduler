var tasks = {};

$(document).ready(function(){

    // Loads from local storage

    // Gets current time and updates the #currentDay element
    var timeContent = function(){
        rightNow = moment();
        $('#currentDay').text(rightNow);
    }
    
    


    setInterval(timeContent, 1000);
})


