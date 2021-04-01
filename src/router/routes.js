import Com1 from '../components/Com1.vue'
import Student from '../components/Student.vue'

import Player from '../components/Player.vue'


const routes = [
    { 
        path: '/home',
        component: Com1,
        name: 'com1'
    },
    { 
        path: '/student/:id', 
        component: Student,
        name: 'stud'
    },
    { 
        path: '/player', 
        component: Player,
        name: 'player'
    }
]


export default routes;