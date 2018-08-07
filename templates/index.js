// var right_image = document.querySelector('.right img');

// setInterval(function() {
//     right_image.hidden = !right_image.hidden;
// }, 5000);

var lebronimages=document.querySelectorAll(".chart.lebron");
var jordanimages=document.querySelectorAll(".chart.jordan");
var currentimage=0;
var trigger=document.querySelector('.trigger');
var charts=document.querySelectorAll(".chart");
var background=document.querySelector(".fullscreen__bg");

trigger.addEventListener("click",function(){
    lebronimages[currentimage].classList.remove("active");
    jordanimages[currentimage].classList.remove("active");
    currentimage=(currentimage+1)%lebronimages.length;
    lebronimages[currentimage].classList.add("active");
    jordanimages[currentimage].classList.add("active");
});

charts.forEach(function(chart){
    chart.addEventListener("click", function(){
        this.classList.toggle("fullscreen");
        background.classList.toggle("active");
    });
});