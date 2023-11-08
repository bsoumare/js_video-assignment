var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("#player1");
	video.autoplay = false;
	video.pause();
	video.loop = false
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
});

let video = document.getElementById("slower");
video.playbackRate = 0.1;

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Speed of the Video is   ");
});

let video = document.getElementById("faster");
video.playbackRate = 1.1;

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed of the Video is   ");
});

function skip(value) {
	var video = 10;
	var video = document.getElementById("skip");
	video.currentTime += value;
	if (video.currentTime){
        console.log("Time exceeds so video restarts")

    }
    else{
		console.log("Add ten seconds")
    }
}  

function restart() {
	var video = document.getElementById("video");
	video.currentTime = 0;
}

let vid = document.getElementById("mute");
video.muted = true;

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Video is now muted");
});

$("vintage").click(function(){
	$("p").addClass("vintage");
  });

  
$("orig").click(function(){
	$("p").removeClass("vintage");
  });


//let video = document.getElementById("myVideo"); 

//function play() { 
//  vid.play(); 
//} 

//function pause() { 
//  vid.pause(); 
//} 

