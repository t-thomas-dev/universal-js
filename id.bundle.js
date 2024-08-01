//    Version created: 2024/7   2.0.0

var sessionId = self.crypto.randomUUID();
  console.log(`sessionId:${sessionId}`);
var botDetection;
var isBot;
var fpId;
var clId;
var rawUserData;
var userData;

//botd.js
// Initialize an agent at application startup.
botdPromise = import('https://cdn.jsdelivr.net/gh/t-thomas-dev/universal-js/botd.js').then((Botd) =>
  Botd.load()
);
// Get the bot detection result when you need it.
botdPromise
  .then((botd) => botd.detect())
  .then((result) => {
    botDetection = result;
    console.log(botDetection)})
  .catch((error) => console.error(error));
let checkBotRegex = /^true$/i;
isBot = checkBotRegex.test(botDetection);

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
    //finish botd.js
    console.log("Bot:" + isBot);
    //fp.js
    const fpjsScriptWrapper = document.createElement('script');
      fpjsScriptWrapper.innerHTML = 'var fpId; fpPromise = import(`https://cdn.jsdelivr.net/gh/t-thomas-dev/universal-js/fp.js`) .then(FingerprintJS => FingerprintJS.load()); fpPromise.then(fp => fp.get()) .then(result => {fpId = result.visitorId; console.log("fpId:" + fpId)})';
    document.body.appendChild(fpjsScriptWrapper)
    
    //cl.js
    const ClientJS = window.ClientJS;
    const client = new ClientJS();
    clId = client.getFingerprint();
    console.log("clId:" + clId);
  }
});
