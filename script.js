document.getElementById("videoButton").onclick = function () {
	let video = `<iframe width="100%" height="550px" src="https://www.youtube.com/embed/DOisAG9yoNk"
	 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
	document.getElementById("third").style.background = "none";
	document.getElementById("third").innerHTML = video;
	document.getElementById("videoSlide3").autoplay = 1;
}