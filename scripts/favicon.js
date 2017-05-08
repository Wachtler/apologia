"use strict";

function addFavicon() {
	let fav = document.createElement('link');
	fav.rel = 'shortcut icon';
	fav.type = "image/x-icon";
	fav.href="favicon.ico";
	document.head.appendChild(fav);
}

window.addEventListener("load", addFavicon);
