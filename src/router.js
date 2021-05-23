import Router from 'vue-router'
import Vue from 'vue'

import Home from './components/Home'
import PeopleList from './components/people/PeopleList'
import PlanetsList from './components/planets/PlanetsList'
import StarshipsList from './components/starships/StarshipsList'

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
        },
        {
            path: '/starships',
            name: 'Starships',
            component: StarshipsList
        }
    ]
})

export default route