import { createRouter, createWebHashHistory } from 'vue-router'
import Startseite from '../views/Startseite.vue'
import Sportangebote from '../views/Sportangebote.vue'
import Trainingszeiten from '../views/Trainingszeiten.vue'
import Verein from '../views/Verein.vue'
import Kontakt from '../views/Kontakt.vue'

const routes = [
  {
    path: '/',
    name: 'Startseite',
    component: Startseite
  },
  {
    path: '/Sportangebote',
    name: 'Sportangebote',
    component: Sportangebote
  },
  {
    path: '/Trainingszeiten',
    name: 'Trainingszeiten',
    component: Trainingszeiten
  },
  {
    path: '/Verein',
    name: 'Verein',
    component: Verein
  },
  {
    path: '/Kontakt',
    name: 'Kontakt',
    component: Kontakt
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
