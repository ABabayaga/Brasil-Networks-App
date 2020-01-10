import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

// import Home from './components/shared/navigation'
import Planos from './components/Planos'
// import Central from './components/Central'
// import Botoes from './components/Botoes'
import Contato from './components/Contato'

const routers = [{
  name: 'Home',
  path: '/',
  // component: App
},
{
  name: 'Planos',
  path: '/planos',
  component: Planos
},
// {
//   name: 'Central',
//   path: '/central',
//   component: Central
// },
{
  name: 'Contato',
  path: '/contato',
  component: Contato
}
]

const router = new VueRouter({mode: 'history', routes: routers})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
