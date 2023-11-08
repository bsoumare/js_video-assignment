const video = document.querySelector("#player1");



window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("#player1");
	video.autoplay = false;
	video.pause();
	video.loop = false
	video.volume = document.querySelector("#slider").value = false
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = Math.round(video.volume *100) +  "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed of the Video is" + video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed of the Video is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime +10 . video.duration) {
		video.currentTime = 0;
		console.log("Going Back to the Start")
	} else {
		video.currentTime += 10; 
	}
	console.log("Current Location is" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "UnMute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value = "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});




//let video = document.getElementById("myVideo"); 

//function play() { 
//  vid.play(); 
//} 

//function pause() { 
//  vid.pause(); 
//} 

