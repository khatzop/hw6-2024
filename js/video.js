var video;
var volumeDisplay = document.querySelector("#volume");


// Page Load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	volumeDisplay.innerHTML = (video.volume * 100).toFixed(0) + '%';
	console.log("Auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.addEventListener('playing', function() {
		volumeDisplay.innerHTML = (video.volume * 100).toFixed(0) + '%';
		console.log("Volume:", video.volume);
	}, { once: true });
});


// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New Speed is", video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New Speed is", video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("Current location is", video.currentTime);
});


// Mute
document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	this.innerHTML = video.muted ? "Unmute" : "Mute";
});



// Volume Slider
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	volumeDisplay.innerHTML = this.value + '%';
});


// Styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});




