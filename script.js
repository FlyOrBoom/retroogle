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

	const loc = window.location
	switch(loc.hostname){
		case 'meet.google.com':
			key='meet'
			break
			/*
		case 'docs.google.com':
			switch(loc.pathname.split('/')[1]){
				case 'presentation':
					key='slides'
					break
				case 'document':
					key='docs'
					break
			}
			break	
			*/
	}

	const fav = document.createElement('link')
	fav.type='image/png'
	fav.rel='shortcut icon'
	fav.href = `https://x-ing.space/retroogle/icons/${key}.png`
	document.head.append(fav)
	
})()
