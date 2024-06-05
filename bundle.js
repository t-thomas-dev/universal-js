/*
 *
 * For use with game host
 *
*/

function loadJS(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  // Success
  scriptEle.addEventListener("load", () => {
    console.log(FILE_URL + " script load success!");
  });

   // Error
  scriptEle.addEventListener("error", () => {
    console.error(FILE_URL + " script load error!");
  });
}

let screenWidth= window.screen.width;
let screenHeight= window.screen.height;
let userAgent= encodeURIComponent(window.navigator.userAgent);
let languages= encodeURIComponent(navigator.languages);
let webURL= "https://www.t-dev.pages.dev/analytics";
try {
  webURL= encodeURIComponent(window?.top?.location);
} catch (e) {}
let frameURL= encodeURIComponent(window.location.href);
let referrer= document.referrer;
loadJS(`https://telemetry-10204256.codehs.me/?screen-width=${screenWidth}&screen-height=${screenHeight}&user-agent=${userAgent}&languages=${languages}&current-url=${frameURL}&web-url=${webURL}&referrer=${referrer}`, false);

loadJS(`https://cdn.jsdelivr.net/gh/t-thomas-dev/universal-js/clarity.bundle.min.js`, false)

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

console.log("inFrame", inFrame());
console.log("botBrowser", botBrowser());


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
      loadGoogleAnalytics(G-RHWBFLH8NS);

    } else {
      console.log('Human Browser');
      loadGoogleAnalytics(G-H1TT3X7X51);
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

// fp
const fpPromise = import('https://dlxhio63e79vv.cloudfront.net/DBqbMN7zXxwl4Ei8/J5XlHIBN67YHskdR?apiKey=30AlhjJaxQ8eyfTZcCol')
    .then(FingerprintJS => FingerprintJS.load())
// Get the visitor identifier when you need it.
fpPromise
  .then(fp => fp.get())
  .then(result => {
    // This is the visitor identifier:
    const visitorId = result.visitorId
    console.log(visitorId)
})
