function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Usage example:
createCookie("myCookie", "cookieValue", 7);

//pt2
function hasCookie(name) {
  return (document.cookie.split('; ').indexOf(name + '=') !== -1);
}

// Usage example:
const cookieName = 'myCookie';
const hasCookie = hasCookie(cookieName);
console.log(hasCookie); // true if the cookie exists, false otherwise
