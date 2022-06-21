self.addEventListener('push', (e) => {

    var options = {
        body : "Ghafoor has posted new post.",
        icon : 'images/example.png',
        vibrate : [100, 50 , 100],
        data : { 
            dateOfArrival : Date.now(),
            primaryKey : '2'
        },
        actions : [{
            action : 'explore' ,
            title : 'Explor this new world!', 
            icon : 'https://dev3-image-cdn.webtalk.co/10000758/315ffaae861b4080bfff8328b0ecdc4b_93c0faf1a3c34f10abf71a22937aa356__w_200-h_200.jpg',
        },
        {
            action : 'close' ,
            title : 'close', 
            icon : 'images/xmark.png',
        }]
    };
    e.waitUntil(self.registration.showNotification('Hello Sharjeel ..', options));
  });