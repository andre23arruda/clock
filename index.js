var clockTextHour = document.getElementById("clock-text-hour")
var clockTextMinute = document.getElementById("clock-text-minute")
var clockTextSecond = document.getElementById("clock-text-second")

function time() {
    var dateobj = new Date();
    var y = dateobj.getFullYear();
    var m = dateobj.getMonth() + 1;
    var d = dateobj.getDate();
    var h = dateobj.getHours();
    var mm = dateobj.getMinutes();
    var ss = dateobj.getSeconds();

    clockTextHour.innerHTML = `${('0' + h).slice(-2)}`
    clockTextMinute.innerHTML = `${('0' + mm).slice(-2)}`
    clockTextSecond.innerHTML = `${('0' + ss).slice(-2)}`

    var datetext = document.getElementById("date-text")
    datetext.innerHTML =`${('0' + d).slice(-2)}/${('0' + m).slice(-2)}/${y}`
    setTimeout("time()",1000)
}

time()
