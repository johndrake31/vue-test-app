<template>
    <div class="mt-5">
        <h1>Food List</h1>
        <div class="flex-container justify-content-between">
            <FoodImg v-for="f in foods" :key="f.id" :id="f.id" />
        </div>
    </div>
</template>


<script>

    import FoodImg from './FoodImg.vue'

    export default {
        name: 'HomePage',
        data: () => {
            return {
                msg: 'Food List',
            }
        },
        components: {
            FoodImg,
        },
        computed: {
            foods() {
                return this.$store.state.food.foods
            }
        }
    }
</script>

<style scoped>
 .flex-container{
    display: flex;
    flex-direction: column;
    align-items: center;    
 }
</style>