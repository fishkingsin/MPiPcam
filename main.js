// function updateSite(event) {
	// 	window.applicationCache.swapCache();
	// }
	// window.applicationCache.addEventListener('updateready',
	// 	updateSite, false);
window.onresize = function() {
	var img = document.getElementById('img');
	var width = window.innerWidth;
	var height = window.innerHeight;
	if(width<height)
	{
		img.width = window.innerWidth;
		img.height = (120/160)*window.innerWidth;
	}
	else
	{
		img.height = window.innerHeight;
		img.width = (160/120)*window.innerHeight;
	}
}

window.onload = function() {
	var div = document.getElementById('mjpg');
	var img = document.createElement("img");
	img.src = "http://fishkingsin.no-ip.info/?action=stream";

	img.id = "image_scr";
	var width = window.innerWidth;
	var height = window.innerHeight;
	if(width<height)
	{
		img.width = window.innerWidth;
		img.height = (120/160)*window.innerWidth;
	}
	else
	{
		img.height = window.innerHeight;
		img.width = (160/120)*window.innerHeight;
	}
	//but feel free to raise it up to 8. Your client will appreciate
	//that the program makes full use of his machine.
	div.appendChild(img);
	var button = document.createElement("button");
	// button.id = "overlay";
	button.innerHTML = "Reload"
	button.onclick = function (){
		location.reload();
		console.log("button click");
	};
	div.appendChild(button);
}