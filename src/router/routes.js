import Com1 from '../components/Com1.vue'
import Student from '../components/Student.vue'

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
    }
]


export default routes;