// ==UserScript==
// @name	Retroogle
// @version	1.0
// @description	Revert Google product icons to their pre-2020 style.
// @author	Xing <dev@x-ing.space> (https://x-ing.space)
// @license	MIT License
// @namespace	https://x-ing.space
// @match	https://*.google.com/*
// @grant	none
// ==/UserScript==

(function(){

	const fav_urls = {
		meet:	'https://x-ing.space/retroogle/icons/meet.png'
	}

	let key

	switch(window.location.hostname){
	case 'meet.google.com':
		key='meet'
		break
	}

	const fav = document.createElement('link')
	fav.type='image/png'
	fav.rel='shortcut icon'
	fav.href = fav_urls[key]
	document.head.append(fav)
	
})()
