const app = {
    data(){
        return{
            msg:'Hello  Vue3',
            show:true,
            url: 'https://www.google.com/'       
        }
    },
    created(){
        console.log('created');
    },
    updated(){
        console.log('updated');
    }
};

var mountedApp = Vue.createApp(app).mount('#app');