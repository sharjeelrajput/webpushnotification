self.addEventListener('push', (e) => {

    var options = {
        body : "This notification was Generated from push.",
        icon : 'images/example.png',
        vibrate : [100, 50 , 100],
        data : { 
            dateOfArrival : Date.now(),
            primaryKey : '2'
        },
        actions : [{
            action : 'explore' ,
            title : 'Explor this new world!', 
            icon : 'images/checkmark.png',
        },
        {
            action : 'close' ,
            title : 'close', 
            icon : 'images/xmark.png',
        }]
    };
    e.waitUntil(self.registration.showNotification('Hello world!', options));
  });