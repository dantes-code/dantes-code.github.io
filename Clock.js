setInterval(time , 1000);
function time(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var showTime;
    if(hour>12){
        hour = hour - 12;
        showTime = hour + ":" + minute + ":" + second + " PM";
    }
    else if(hour == 0){
        hour = 12;
        showTime = hour + ":" + minute + ":" + second + " AM";
    }
    else{
        showTime = hour + ":" + minute + ":" + second + " AM"
    }

    document.getElementById("showTime").innerHTML = showTime;
}