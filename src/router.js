import Router from 'vue-router'
import Vue from 'vue'

import Home from './components/Home'
import PeopleList from './components/people/PeopleList'
import PlanetsList from './components/planets/PlanetsList'

Vue.use(Router)

const route = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/people',
            name: 'People',
            component: PeopleList
        },
        {
            path: '/planets',
            name: 'Planets',
            component: PlanetsList
        }
    ]
})

export default route