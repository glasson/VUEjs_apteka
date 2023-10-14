import { createRouter, createWebHistory } from "vue-router"
import ListComponent from "../components/ListComponent.vue"
import CreateComponent from "../components/CreateComponent.vue"
import UpdateComponent from "../components/UpdateComponent.vue" 
import ShowMedicamentComponent from "../components/ShowMedicamentComponent.vue" 

const routes = [
    {
        path:"/list",
        name:'list',
        component: ListComponent
    },
    {
        path:'/create',
        name:'create',
        component: CreateComponent
    },
    {
        path: '/update/:id',
        name: 'update',
        component: UpdateComponent
    },
    {
        path: '/show-medicament/:id',
        name: 'show_medicament',
        component: ShowMedicamentComponent
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router