<template>
    <div>

        <header class="mb-5">
            <h1 class="mb-5">my header {{ title }} and {{ subTitle }}</h1>
            <nav>
                <router-link class="my-btn-link" exact to="/" >Home</router-link>
                <router-link v-permissions:Favorites.mod1 class="my-btn-link" exact :to="{ name: 'Favorites' }">Favorites</router-link>
                <!-- <router-link v-perm class="my-btn-link" exact :to="{ name: 'Favorites' }">Favorites</router-link> -->

                <router-link v-permissions:About class="my-btn-link" exact :to="{ name: 'About' }">About</router-link>
                <router-link class="my-btn-link" exact :to="{ name: 'ADDFOOD' }">Add Food</router-link>
            </nav>
        </header>
        <slot>
            <p>default wrap content</p>
        </slot>
        <footer class="mt-5">this is a footer</footer>
    </div>
</template>

<script>
import {telemData as telemMixin} from '@/mixins/telemetryData';
// import permissions from '@/directives/permissions';
export default {

    name: "FoodWrapper",
    // directives: {
    //     perm: permissions
    // },
    mixins: [telemMixin],
    data: () => {
        return {

            id: 1
        }
    },
    props:{
        title:{
            type: String
        },
        subTitle:{
            type: String
        }
    }
    
}
</script>

<style scoped>
.router-link-active {
    background-color: black;
    color: white;
}
.my-btn-link{
    padding: 8px 12px;
    border: 1px solid black;
    border-radius: 12px;
    margin-right: 5px;
    
}
</style>