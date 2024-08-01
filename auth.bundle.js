//    Version: 2024/7   2.0.0

//setup
function createCookie(name, value, days) {
var expires = "";
if (days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  expires = "; expires=" + date.toUTCString();
}
document.cookie = name + "=" + (value || "") + expires + ";domain=codehs.me";
}

function isChromeOS() {
return /CrOS/.test(navigator.userAgent);
}
const isChromeOSUser = isChromeOS();

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

//code that is ran
//check if cookies are allowed
if (!navigator.cookieEnabled) {
  window.location.replace(`/enable-cookies.html`);
}
//check for cookie
if (hasCookie("auth")) {
  window.location.replace(`/has-cookie.html`);
} else {
  //check for chrome os
  if (isChromeOSUser === true) {
    createCookie("auth", `1`, 180);
    alert(" ✅ Success! You will be logged in for 180 days")
    location.replace(`/success.html`);
  } else {
    //check pin
    // const PINinput = prompt("Enter your PIN")
    // if (PINinput === '365158') {
    //   createCookie("auth", `1`, 180);
    //   alert(" ✅ Success! You will be logged in for 180 days")
    //   window.location.replace(`/landing.html`);
    // } else {
    //   //if user enters incorrect pin
      createCookie("accessBlock", `1`, 720);
      newrelic.log(`session has access block--${sessionId}`, {level: 'warn'})
      window.location.replace(`/403.html`);
    // }
  }
}
