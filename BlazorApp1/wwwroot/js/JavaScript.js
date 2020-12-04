
// convert time to milisecond
const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
//add 30 minutes to date to countdown
//function initTimeCountDown() {

//}
var minutesToAdd = 30;
var currentDate = new Date();
var countDown = new Date(currentDate.getTime() + minutesToAdd * 60000);
// My COuntDown
var mySetCountDown = null;
function start() {
    mySetCountDown = setInterval(MyCountDown, 0);
    return 1;
}
function stop() {
    clearInterval(mySetCountDown);
    return 1;
}
function restart() {
    clearInterval(mySetCountDown);

    mySetCountDown = setInterval(MyCountDown, 0);
    return 1;
}
function MyCountDown() {
        let now = new Date().getTime(),
        distance = countDown - now;
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        //do something later when date is reached
        if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
            headline.innerText = "Timeout!";
            countdown.style.display = "none";
            content.style.display = "block";
            clearInterval(mySetCountDown);
        }
        //seconds
}

