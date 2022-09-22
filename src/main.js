import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).use(router).mount('#app')
