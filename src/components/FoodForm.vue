<template>
    <div>
        <h1>{{ food }}</h1>
        <form class="box form" @submit.prevent="onsubmit">
            <div class="field">
                <label class="label" for="foodname">Food Name:</label>
                <div class="control">
                    <input class="input" type="text" id="foodname" v-model="food.name">
                </div>
            </div>
            <div class="field">
                <label class="label" for="qty">QTY:</label>
                <div class="control">
                    <input class="input" type="number" id="qty" v-model="food.qty">
                </div>
            </div>
            <div class="field">
                <label class="label" for="fooddesc">Food desc:</label>
                <div class="control">
                    <input class="input" type="text" id="fooddesc" v-model="food.desc">
                </div>
            </div>
            <div class="field">

                <label class="checkbox" for="isfav">
                    
                    <input type="checkbox" id="isfav" v-model="food.is_fav">
                    Favorit
                </label>
                
            </div>
            <div class="field">
                <label class="label" for="img">Image URL:</label>
                <div class="control">
                    <input class="input" type="text" id="img" v-model="food.img">
                </div>
            </div>
            <button class="button is-info" type="submit" value="Submit input">Submit</button>
        </form>
    </div>
</template>

<script>
    const FOOD_NAME = 'APPLES MAYBE';

    export default {
        name: 'FoodForm',
        created(){
            //this.loddashSearch = debounce(this.searchFood(), 500)
        },
        data() {
            return {
                food: {
                    id: 14455,
                    "name": FOOD_NAME,
                    "qty": null,
                    "desc": "",
                    "is_fav": null,
                    "img": '',
                },
            }
        },
        watch: {
            'food.name': function( newVal, oldVal){
                console.log(newVal);
                console.log(oldVal);
                // this.loddashSearch();
                this.searchFood()
            }
        },
        methods: {
            onsubmit(){
                this.$store.commit('food/ADD_FOOD', this.food);
                this.$router.push({name: 'Home'})
            },
            searchFood(){
                console.log(`fakeCall to the server with the food name ${this.food.name}`);
            }
        }
    }
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        margin-right: auto;
        margin-left: auto;
    }
</style>