var Prom_msg_array = ["<b>Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!</b>"
, "<b>Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!</b>"
, "<b>Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!</b>"]


var textvideo2 =  document.querySelector('.textvideo2');




var textvideo1 = document.querySelector('.textvideo1');


var text_insert = 0;
window.onload = function() {
    text_insert = Math.floor(Math.random()*2);
    textvideo1.innerHTML = Prom_msg_array[text_insert];
}
function display_check(current){
    if (text_insert===2){
        text_insert= 0;
        textvideo1.innerHTML = Prom_msg_array[text_insert];
    }
    else {
        text_insert++;
        textvideo1.innerHTML = Prom_msg_array[text_insert];
    }
}
setInterval(function(){display_check(text_insert);}, 3000);
// Get the video element

var video = document.querySelector("video");
var video_div = document.querySelector(".video");

function addEndedListener(video) {
    video.addEventListener("ended", function() {
        if (video.getAttribute("class")=="vid1"){
            video_div.innerHTML = `       
            <video height="800" width=1000 autoplay class="vid2">
            <source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4" >
            <source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mkv">
            </video>
            `;
        }
        else {
            video_div.innerHTML = `       
            <video height="800" width=1000 autoplay class="vid1">
            <source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4" >
            <source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mkv">
            </video>
            `;
        }
        video = document.querySelector("video");
        addEndedListener(video);
    });
}

addEndedListener(video);
