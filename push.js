var push = require('web-push');
let vapidkeys = push.generateVAPIDKeys();
let vapiGeneratedKeys = {
    publicKey: 'BKHO2zU_EjJiVvUtSgn0mV8y66aUPtlhH1acC4flBdvjMmYsL6oBga1KBM8Ccw4YCM7fmt1gJ84t02OKdH_Z1io',
    privateKey: 'WJV8ZOgpnmZz-lfXwaarHzC-MrBQsaOVkVCB4NDssgc'
  }
console.log(vapidkeys);

push.setVapidDetails("mailto:poomzscript@gmail.com", vapiGeneratedKeys.publicKey, vapiGeneratedKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fMw1afgT-sc:APA91bGFPrdO2bc2D81meMTWUuUwljvSsD-Nuxe0GlU22lKzOWz7nxPDyFcgORcZTa8z5PgQWBT8sIXM4-y1YANzGw_8B3IZ1RugshjAeohtuoiYD2kFJ25STrJeZNkgLljOcDG7EAyf","expirationTime":null,"keys":{"p256dh":"BDwh1YxxdAgJRsC2O6xQpZUTS2XQQpA_TLjbKzV21J2WNEX9MDYAuhZo5jitTEKSUeg-NojaewBYup0t9fvWYto","auth":"nr3v--9xTuql3ELwiDOtTQ"}};

push.sendNotification(sub, "Hello WebTalk");