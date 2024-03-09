import AboutMeat from "../components/foodgroups/AboutMeat.vue";
import AboutVeggies from "../components/foodgroups/AboutVeggies.vue";
import AboutFruit from "../components/foodgroups/AboutFruit.vue";
import AboutGrain from "../components/foodgroups/AboutGrain.vue";
import AboutDairys from "../components/foodgroups/AboutDairy.vue";


 
 const aboutRoutes = [
    {
        name: "AboutFruit",
        component: AboutFruit,
        path: "fruits"
    },
    {
        name: "AboutGrain",
        component: AboutGrain,
        path: "grains"
    },
    {
        name: "AboutVegetables",
        component: AboutVeggies,
        path: "vegetables"
    },
    {
        name: "AboutMeat",
        component: AboutMeat,
        path: "meats"
    },
    {
        name: "AboutDairys",
        component: AboutDairys,
        path: "dairys"
    },
 ]

 export default aboutRoutes;