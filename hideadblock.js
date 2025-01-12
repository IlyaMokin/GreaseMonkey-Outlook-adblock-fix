// ==UserScript==
// Created by Bryan Pakulski
// @name        Hotmail-hideAdBlock
// @namespace   default
// @description Hides the "Adblocker detected" in outlook.com
// @exclude     https://outlook.office365*
// @include     https://outlook.live*
// @version     1.9.1
// @grant       none
// ==/UserScript==

var premium_bar = 'Ogqyq'; // On bottom left
var adblocking = 'GssDD'; // On right hand side
var topLineAd = 'w8ZqB';

// On page load run the function
window.addEventListener(
  'DOMNodeInserted',
  function (e)
  {

    // Get the div that holds the adblocking content
    var div_hide = document.getElementsByClassName(adblocking);

    // Bottom left "Get premium bar"
    var div_hide2 = document.getElementsByClassName(premium_bar);
	
	var div_hide3 = document.getElementsByClassName(topLineAd);

    // Iterate through our elements and hide them
    for (var i = 0; i < div_hide.length; i++)
    {
      div_hide[i].style.visibility = "hidden";
      div_hide[i].style.width = "0px";
    }

    // Dirty delete, would be nicer with jquery
    div_hide2 && div_hide2[0] && div_hide2[0].parentNode.removeChild(div_hide2[0]);
	
	    // Dirty delete, would be nicer with jquery
    div_hide3 && div_hide3[0] && div_hide3[0].parentNode.removeChild(div_hide3[0]);

}, false);
