import Router from 'vue-router'
import Vue from 'vue'

import Home from './components/Home'

Vue.use(Router)

const route = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})

export default route