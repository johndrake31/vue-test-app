import Vue from "vue";
import Vuex from "vuex";

import foodMod from './modules/food'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        food: foodMod
    }
}
)

