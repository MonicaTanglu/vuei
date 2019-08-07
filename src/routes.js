import button from './pages/button.vue'
import index from './pages/index.vue'

let routes = [{
    path: '/',
    component: index,
    children: [
        { path: '/button', component: button },
        { path: '', redirect: { path: '/button' } }
    ]
}]

export default routes
