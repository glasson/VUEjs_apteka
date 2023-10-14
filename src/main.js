import { createApp } from 'vue'
import App from "./App.vue"
import components from "./components"
import router from './router/router'
import store from "./store.js"

const app = createApp(App)


components.forEach(component => {
    app.component(component.name, component)
})


app.use(router)
app.use(store)
app.mount('#app')
// через app.use вообще подключаются все расширения
