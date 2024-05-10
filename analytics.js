let screenWidth= window.screen.width;
let screenHeight= window.screen.height;
let userAgent= encodeURIComponent(window.navigator.userAgent);
let webURL= "https://www.t-dev.pages.dev/analytics";
try {
  webURL= encodeURIComponent(window?.top?.location);
} catch (e) {}
let frameURL= encodeURIComponent(window.location.href);
loadJS(`https://www.t-dev.pages.dev/logs/?w=${screenWidth}&h=${screenHeight}&ua=${userAgent}&l=${frameURL}&p=${webURL}`, false);


console.log("inFrame", inFrame());
console.log("botBrowser", botBrowser());

//pt 2

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
      loadGoogleAnalytics("G-insert-tag");

    } else {
      console.log('Human Browser');
      loadGoogleAnalytics("G-insert-tag");
    }
});
