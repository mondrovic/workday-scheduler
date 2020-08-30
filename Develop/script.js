var tasks = {};


// Gets current time and updates the #currentDay element
function timeContent(){
    rightNow = moment();
    $('#currentDay').text(rightNow);
}

setInterval(timeContent(), 1000);