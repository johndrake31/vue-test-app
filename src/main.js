import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import store from './store';
import { globalMixin } from '@/mixins/globalMix'
import permissions from './directives/permissions';
import { changeStringFilter } from './filters/changeStringFilter';
Vue.config.productionTip = false
Vue.use(Buefy)

Vue.mixin(globalMixin)
Vue.directive('permissions', permissions)
Vue.filter('changeStringFilter', changeStringFilter)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
