// var say = require('./util')
// import getData from './util'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './style/common.scss'
import routes from './routes'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({ routes })
new Vue({
    el: '#app',
    router,
    template: '<App />',
    components: { App }
})

// Vue.component('my-avatar', {
//     template: '<img :src="url"/>',
//     data() {
//         return {
//             url: require('./img/avatar.jpg')
//         }
//     }
// })
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue'
//     },
//     methods: {
//         async fetchData() {
//             const data = await getData()
//             this.message = data
//         }
//     },
//     created() {
//         this.fetchData()
//     }
// })