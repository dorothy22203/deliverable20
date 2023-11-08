var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1"); 
    video.autoplay = false; 
    video.loop = false; 
    document.getElementById("volume").innerHTML = video.volume * 100 + "%";

	// Play video button  
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		document.getElementById("volume").innerHTML = video.volume * 100 + "%";
	 });
  
	 // Pause video button  
	 document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	 });
  
	 // Slow down video speed button  
	 document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9; 
		console.log("New speed is " + video.playbackRate);
	 });
  
	 // Speed up video speed button  
	 document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9; 
		console.log("New speed is " + video.playbackRate);
	 });
  
	 // Skip ahead button  
	 document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 > video.duration) {
		   video.currentTime = 0; 
		} 
		else {
		   video.currentTime += 10; 
		}
		console.log("Current location is " + video.currentTime);
	 });
  
	 // Mute button  
	 document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
		   video.muted = false;
		   this.innerHTML = "Mute";
		} 
		else {
		   video.muted = true;
		   this.innerHTML = "Unmute";
		}
	 });
  
	 // Volume slider  
	 document.querySelector("#slider").addEventListener("change", function() {
		video.volume = this.value / 100;
		document.getElementById("volume").innerHTML = video.volume * 100 + "%";
		console.log("Volume is: " + video.volume * 100 + "%");
	 });
  
	 // Apply old school style to the video
	 document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	 });
  
	 // Remove old school style from the video
	 document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	 });
});

