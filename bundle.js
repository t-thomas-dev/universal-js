//    Version created: 2024/7   2.0.0

function headScript(url) {
    let script = document.createElement('script');
    script.src = url;
    document.head.insertBefore(script, document.head.firstElementChild);
}

headScript('https://cdn.jsdelivr.net/gh/t-thomas-dev/universal-js/nr.js')
headScript('https://cdn.jsdelivr.net/gh/t-thomas-dev/universal-js/cl.js')

//cookie functions
function hasCookie(name) {
  // Get all cookies
  const cookies = document.cookie.split(';');

  // Loop through each cookie
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    // Check if cookie name starts with "auth="
    if (cookie.indexOf(`${name}=`) === 0) {
        return true;
    }
  }
  // No cookies enabled or auth cookie not found
  return false;
}

function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "";
}
function deleteCookie(cookieName) {
  document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=codehs.me';
}

function createTempCookie(name, value) {
  document.cookie = name + "=" + value + ";domain=codehs.me";
}

function isChromeOS() {
  return /CrOS/.test(navigator.userAgent);
}

var authState = `hasAuth:${hasCookie('auth')}--hasBlock:${hasCookie('accessBlock')}`;

//telemetry
let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
let userAgent = encodeURIComponent(window.navigator.userAgent);
let languages = encodeURIComponent(navigator.languages);
let webURL = "https://www.t-dev.pages.dev/analytics";
try {
  webURL= encodeURIComponent(window?.top?.location);
} catch (e) {console.error(e)}
let frameURL = encodeURIComponent(window.location.href);
let referrer = document.referrer;

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
    setTimeout(function(){
      createTempCookie("sessionId", sessionId)
      createCookie("bot", `${isBot}`, 720)
      createCookie("fpId", fpId, 720)
      createCookie("clId", clId, 720)
      //userData nr data loggging
      rawUserData = `sessionId-${sessionId}--bot-${isBot}--fpId-` + `${String(fpId)}` + `--clId-` + `${String(clId)}` + `--userAgent-${encodeURIComponent(userAgent)}--languages-${languages}--authState:${authState}`;
      userData = `sessionId:${sessionId}--bot:${isBot}--fpId:` + `${String(fpId)}` + `--clId:` + `${String(clId)}` + `--userAgent:${decodeURIComponent(userAgent)}--languages:${decodeURIComponent(languages)}--authState:${authState}`;
      console.log(userData);
      //newrelic.setUserId(`fpId-${fpId}--clId-${clId}`);
      newrelic.log(`${userData} ----TELEMETRY---- screen-width:${screenWidth}--screen-height:${screenHeight}--current-url:${decodeURIComponent(frameURL)}--web-url:${decodeURIComponent(webURL)}--referrer:${decodeURIComponent(referrer)}`);
      if (!isChromeOS()) {
        newrelic.log(`session is not CrOS--${sessionId}`, {level: 'warn'})
      }
      if (!hasCookie('auth')) {
        newrelic.log(`session has no auth--${sessionId}`, {level: 'warn'})
        window.location.replace(`/401.html`);
      }
      if (hasCookie('accessBlock')) {
        newrelic.log(`session has access block--${sessionId}`, {level: 'warn'})
        window.location.replace(`/403.html`);
      }
    }, 500);
  }
});

//delete sessionId on unload
const beforeUnloadHandler = (event) => {
  deleteCookie('sessionId');
};
window.addEventListener("beforeunload", beforeUnloadHandler);

function loadJS(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  scriptEle.addEventListener("error", () => {
    console.error(FILE_URL + " script load error!");
  });
}

loadJS(`/id.bundle.js`)

loadJS(`https://cdn.jsdelivr.net/gh/t-thomas-dev/universal-js/clarity.bundle.min.js`, false)

function inFrame () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

console.log("inFrame", inFrame());

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
    gtag('config', id, {
      'user_id': userData
    });
}

window.addEventListener("load", function() {
    if (isBot===true) {
      console.warn('Bot:true');
      loadGoogleAnalytics("G-RHWBFLH8NS");
    } else {
      loadGoogleAnalytics("G-H1TT3X7X51");
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
