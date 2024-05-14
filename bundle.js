/*
 *
 *    Use var g-url = https://*.url.url;
 *
*/

const currentURL = window.location

// URL guide
let monkeyMart = ^https://ubswbf-640231\.codehs\.me$.*;


if (monkeyMart.test(currentURL) === true) {
  
} else if () {
  
}





let screenWidth= window.screen.width;
let screenHeight= window.screen.height;
let userAgent= encodeURIComponent(window.navigator.userAgent);
let languages= navigator.languages;
let webURL= "https://www.t-dev.pages.dev/analytics";
try {
  webURL= encodeURIComponent(window?.top?.location);
} catch (e) {}
let frameURL= encodeURIComponent(window.location.href);
let referrer= document.referrer;
loadJS(`https://www.t-dev.pages.dev/logs/?screen-width=${screenWidth}&screen-height=${screenHeight}&user-agent=${userAgent}&languages=${languages}&current-url=${frameURL}&web-url=${webURL}&referrer=${referrer}`, false);


console.log("inFrame", inFrame());
console.log("botBrowser", botBrowser());

//pt 2

function inFrame () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}


function botBrowser() {
  try {
    return navigator.webdriver
  } catch (e) {
      return true;
  }
}

function loadGoogleAnalytics(id) {
    // Google tag (gtag.js)
    var firstScript= document.getElementsByTagName("script")[0];
    newScript= document.createElement("script");
    newScript.async= "";
    newScript.src= "https://www.googletagmanager.com/gtag/js?id="+ id;
    firstScript.parentNode.insertBefore(newScript, firstScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', id);
}

window.addEventListener("load", function() {
    if (navigator.webdriver) {
      console.log('Bot Browser');
      loadGoogleAnalytics(bot-id);

    } else {
      console.log('Human Browser');
      loadGoogleAnalytics(id);
    }
});



//stop inspect and right click


document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }
}
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});
