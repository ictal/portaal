var currentSlider = 1;

function slide (slide) {
    slide = (slide+4) % 5 + 1;
    var offset = (slide - 1) * -document.getElementById("slider").offsetWidth;
    $("#slide1").animate({"margin-left": offset+"px"}, 1000);
    currentSlider = slide;
}

$(document).ready(function(){
    setInterval("slide(currentSlider+1);", 5000);
});