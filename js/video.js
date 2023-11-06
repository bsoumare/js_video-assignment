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


//let video = document.getElementById("myVideo"); 

//function play() { 
//  vid.play(); 
//} 

//function pause() { 
//  vid.pause(); 
//} 

