import Vue from "vue";
import Router from "vue-router";

import HomePage from "../components/HomePage.vue";
import FoodDetail from "../components/FoodDetailPage.vue";
import AboutPage from "../components/AboutPage.vue";
import FavoritesPage from "../components/FavoritesPage.vue";
import FoodForm from "../components/FoodForm.vue";

import aboutRoutes from "./about";
import SearchBar from "../components/SearchWidget.vue";
import AdWidget from "../components/AdWidget.vue";
import BlogViewWidget from "../components/BlogViewWidget.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'Home',
            path: '/',
            components: {
                default: HomePage,
                "side-bar": SearchBar
            }

        },
        {
            name: 'FoodDetails',
            path: '/food-details/:name',
            components: {
                default: FoodDetail,
                "side-bar": AdWidget

            },
            props: true,
            // route protection similiar to express middleware handler.
            beforeEnter(to, from, next){
                console.log(to);
                console.log(from);
                let allow = false;
                const nutrition = to.params.otherData;
                if (nutrition) {
                    allow = true;
                    console.log("allow nav");
                }else{
                    console.log("no data deny nav");
                }
                next(allow)
            }
        },
        {
            name: 'About',
            path: '/about',
            components: {
                default: AboutPage,
                "side-bar": BlogViewWidget
            },
            children: aboutRoutes,
        },
        {
            name: 'Favorites',
            path: '/favorites',
            components: {
                default: FavoritesPage,
                "side-bar": AdWidget
            }
        },
        {
            name: 'ADDFOOD',
            path: '/addfood',
            component: FoodForm
        },
    ]
})