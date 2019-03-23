// var say = require('./util')
// import getData from './util'
import Vue from 'vue'
import './style/common.scss'

import App from './App.vue'

new Vue({
    el: '#app',
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