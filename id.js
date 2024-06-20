//    Version created: 2024/6   1.0.0

//botd.js
var botDetection;
// Initialize an agent at application startup.
const botdPromise = import('https://openfpcdn.io/botd/v1').then((Botd) =>
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
var isBot = checkBotRegex.test(botDetection);
console.log("Bot:"isBot);

//fp.js
const fpPromise = import('//cdn.jsdelivr.net/gh/t-thomas-dev/universal-js/fp.js')
  .then(FingerprintJS => FingerprintJS.load())

// Get the visitor identifier when you need it.
fpPromise
  .then(fp => fp.get())
  .then(result => {
    // This is the visitor identifier:
    var fpId = result.fpId
    console.log("fpId:"fpId)
})

//cl.js
const ClientJS = window.ClientJS;
const client = new ClientJS();
var clID = client.getFingerprint();
console.log("clId:"clId);
