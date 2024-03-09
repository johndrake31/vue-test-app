<template>
    <div class="food-card" :title="tooltip">
        <div class="card-title">
            <FavsWidget :initial_value="f.is_fav" @:toggle="toggle($event)" />
            <h2 @click="showDetails(f.name, f.desc, f.img)" class="pointer">
                {{ f.name }}
            </h2>
        </div>
        <!-- <div class="card-content" :style="genBackGroundImage"> -->
        <div class="card-content">
            <h3>qty: {{ f.qty }}</h3>
            <p>{{ f.desc }}</p>
            <img class="food-img" :src="f.img" :alt="'image of ' + f.name">
        </div>
    </div>
</template>

<script>
import FavsWidget from './FavsWidget.vue'
export default {
    name: 'FoodImg',
    components: {
        FavsWidget
    },
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    methods: {
        toggle(value) {
            console.log(value)
        },
        showDetails(name, otherData, img) {
            this.$router.push({ name: "FoodDetails", params: { name, otherData, img } })
        }
    },
    computed: {
        tooltip() {
            return `${this.f.name} has ${this.f.desc} texture` || "no description"
        },
        f(){
            // getters['food/food'] go to name space 'food' to find getter method 'food'
            return this.$store.getters['food/food'](this.id)
            
            // non-namespaced syntax: 
            // return this.$store.getters.food(this.id)
        }
        // genBackGroundImage() {
        //     return { backgroundImage: `url('${this.img}')` }
        // }

    }
}
</script>

<style scoped>
.food-card {
    
    display: flex;
    border: 2px solid rgb(32, 30, 30);
    box-shadow: 10px 10px lightblue;
    border-radius: 12px;
    padding: 12px;
    max-width: 400px;
    min-width: 400px;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
}

.card-title {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
}

.card-content {
    display: flex;
    flex-direction: column;
}

.pointer {
    cursor: pointer;
}

.food-img {
    max-width: 50px;
}
</style>