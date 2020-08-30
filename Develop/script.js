// adds momentjs time to HTML elements with same corresponding times. ex: 1pm is saved as 13 to compare if it is greater than or less than the current time
$('#row-9am').attr('data-time', moment('9:00 am', 'h:mm a').format('HH'));
$('#row-10am').attr('data-time', moment('10:00 am', 'h:mm a').format('HH'));
$('#row-11am').attr('data-time', moment('11:00 am', 'h:mm a').format('HH'));
$('#row-12ap').attr('data-time', moment('12:00 am', 'h:mm a').format('HH'));
$('#row-1pm').attr('data-time', moment('1:00 pm', 'h:mm a').format('HH'));
$('#row-2pm').attr('data-time', moment('2:00 pm', 'h:mm a').format('HH'));
$('#row-3pm').attr('data-time', moment('3:00 pm', 'h:mm a').format('HH'));
$('#row-4pm').attr('data-time', moment('4:00 pm', 'h:mm a').format('HH'));
$('#row-5pm').attr('data-time', moment('5:00 pm', 'h:mm a').format('HH'));

$(document).ready(function(){

    // Loads from local storage

    // Gets current time and updates the #currentDay element
    var timeContent = function(){
        rightNow = moment().format('ddd MMMM DD -- hh:mm:ss a');
        $('#currentDay').text(rightNow);
    }
    
    // 


    setInterval(timeContent, 1000);
})


