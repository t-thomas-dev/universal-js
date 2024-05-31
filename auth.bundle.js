//    Version created: 5/31/24@13:42

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

function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// check  forChrome OS
function isChromeOS() {
  return /CrOS/.test(navigator.userAgent);
}

// Usage example:
const isChromeOSUser = isChromeOS();

// Check for session cookie
function hasCookie(name) {
  return (document.cookie.split('; ').indexOf(name + '=') !== -1);
}

const hasCookie = hasCookie(session);
if (hasCookie === true) {
  location.replace(`https://example.com`);
} else {
  if (isChromeOSUser === true) {
    createCookie("session", "Session created: " + dateTime + " userAgent: '"+ navigator.userAgent + " Languages: " + navigator.languages, 120);
    location.replace(`https://example.com`);
  } else {
    const PINinput = prompt("Enter your PIN")
    if (PINinput === 36158) {
      createCookie("session", "Session created: " + dateTime + " userAgent: '"+ navigator.userAgent + " Languages: " + navigator.languages, 120);
    } else {
      location.replace(`https://example.com`);
    }
  }
}
