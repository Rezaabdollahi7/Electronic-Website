var countDownDate = new Date("Jan 5, 2027 15:37:25").getTime();
var turboCountDownDate = new Date("Jan 15, 2028 8:36:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days.toLocaleString('fa-IR');
    document.getElementById("hour").innerHTML = hours.toLocaleString('fa-IR');
    document.getElementById("min").innerHTML = minutes.toLocaleString('fa-IR');
    document.getElementById("second").innerHTML = seconds.toLocaleString('fa-IR')



}, 1000);

var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var turbodistance = turboCountDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(turbodistance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((turbodistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((turbodistance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((turbodistance % (1000 * 60)) / 1000);

    document.getElementById("turbo-day").innerHTML = days.toLocaleString('fa-IR');
    document.getElementById("turbo-hour").innerHTML = hours.toLocaleString('fa-IR');
    document.getElementById("turbo-min").innerHTML = minutes.toLocaleString('fa-IR');
    document.getElementById("turbo-second").innerHTML = seconds.toLocaleString('fa-IR')



}, 1000);