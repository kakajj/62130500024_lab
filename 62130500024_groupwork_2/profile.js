const app = {
    data(){
        return{
             name:'Nachanon Montikanon',
             desc: 'Hello, Im JJ from Thailand!',
             numOfPhoto: 200,
             numOfFriend: 1105,
             profilePic: 'https://lh3.googleusercontent.com/proxy/sfEslFQgylysGQwtxLXhrLCkDfmUkGZeecRaWbY2pxnsy7WothgD__t02Cv8fc2s6dMP3g0x4ABUOdyBWy3hQuasQSixrsCL',    
             coverPic: 'https://pbs.twimg.com/media/EUaV7lWUYAAialH?format=jpg&name=large'
            }
    },
};

var mountedApp = Vue.createApp(app).mount('#app');