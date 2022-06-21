var push = require('web-push');
let vapidkeys = push.generateVAPIDKeys();
let vapiGeneratedKeys = {
    publicKey: 'BKHO2zU_EjJiVvUtSgn0mV8y66aUPtlhH1acC4flBdvjMmYsL6oBga1KBM8Ccw4YCM7fmt1gJ84t02OKdH_Z1io',
    privateKey: 'WJV8ZOgpnmZz-lfXwaarHzC-MrBQsaOVkVCB4NDssgc'
  }
console.log(vapidkeys);

push.setVapidDetails("mailto:poomzscript@gmail.com", vapiGeneratedKeys.publicKey, vapiGeneratedKeys.privateKey);