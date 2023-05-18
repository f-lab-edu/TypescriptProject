var time_h1 = document.querySelector(".current-time");
var getTime = function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    time_h1.innerHTML = hours + ":" + minutes + ":" + seconds;
};
var timeInterv = setInterval(function () { return getTime(); }, 1000);
timeInterv;
