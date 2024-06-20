//    Version created: 2024/6   1.0.0

//setup
const dateTime = currentDate.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
});

const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(userTimezone);

function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function isChromeOS() {
  return /CrOS/.test(navigator.userAgent);
}
const isChromeOSUser = isChromeOS();

function hasCookie(name) {
  return (document.cookie.split('; ').indexOf(name + '=') !== -1);
}

const hasSessionCookie = hasCookie(session);

//code that is ran
//check if cookies are allowed
if (hasCookie(name)) {
  location.replace(`https://example.com`);
}
if (!navigator.cookieEnabled) {
    window.location.replace("//www.example.com/enable-cookies");
}
//check for cookie
if (hasSessionCookie === true) {
  location.replace(`https://example.com/has-cookie`);
} else {
  //check for chrome os
  if (isChromeOSUser === true) {
    createCookie("session", "Created-" + dateTime + "_userAgent-"+ navigator.userAgent + "_Languages-" + navigator.languages, 180);
    location.replace(`https://example.com`);
  } else {
    //check pin
    const PINinput = prompt("Enter your PIN")
    if (PINinput === 36158) {
      createCookie("session", "Created-" + dateTime + "_userAgent-"+ navigator.userAgent + "_Languages-" + navigator.languages, 180);
    } else {
      //if user enters incorrect pin
      const failCount += 1;
      createCookie("challengeFail, "Created-" + dateTime + "_userAgent-"+ navigator.userAgent + "_Languages-" + navigator.languages, 360);
      location.replace(`https://example.com/landing`);
    }
  }
}
