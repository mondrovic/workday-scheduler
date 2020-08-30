// adds momentjs time to HTML elements with same corresponding times. ex: 1pm is saved as 13 to compare if it is greater than or less than the current time
$('#row-1').attr('data-time', moment('9:00 am', 'h:mm a').format('HH'));
$('#row-2').attr('data-time', moment('10:00 am', 'h:mm a').format('HH'));
$('#row-3').attr('data-time', moment('11:00 am', 'h:mm a').format('HH'));
$('#row-4').attr('data-time', moment('12:00 pm', 'h:mm a').format('HH'));
$('#row-5').attr('data-time', moment('1:00 pm', 'h:mm a').format('HH'));
$('#row-6').attr('data-time', moment('2:00 pm', 'h:mm a').format('HH'));
$('#row-7').attr('data-time', moment('3:00 pm', 'h:mm a').format('HH'));
$('#row-8').attr('data-time', moment('4:00 pm', 'h:mm a').format('HH'));
$('#row-9').attr('data-time', moment('5:00 pm', 'h:mm a').format('HH'));


$(document).ready(function(){

    // Loads from local storage

    // Gets current time and updates the #currentDay element
    var timeContent = function(){
        rightNow = moment().format('ddd MMMM DD -- hh:mm:ss a');
        $('#currentDay').text(rightNow);
    }
    
    
    // takes all values from each row and parses them as ints to compare times
    for (var i = 0; i < 10; i++){
        var x = $('#row-' + i).attr("data-time");
        var y = parseInt(x);

        if(moment().format('HH') === y){
            $('#row-' + i).addClass('present');
        }else if(moment().format('HH') < y){
            $('#row-' + i).addClass('future');
        }else if(moment().format('HH') > y){
            $('#row-' + i).addClass('past');
        };

    // save button functions

    // handler for click
    

    }


    setInterval(timeContent, 1000);
})


