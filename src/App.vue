<template>
  <div id="app">
    <FoodWrapper title="Main Title" subTitle="SubTitle">

      <router-view />
      <router-view name="side-bar" />
    </FoodWrapper>
  </div>
</template>

<script>
  import FoodWrapper from './components/FoodWrapper.vue'
  export default {
    name: 'App',
    bobIsAReallyCoolGuy: true,
    created() {
      const foods = [
        {
          "id": 1,
          "name": "apple",
          "qty": 4,
          "desc": "fruit croquant",
          "is_fav": false,
          "img": require('./assets/apples.jpg')
        },
        {
          "id": 2,
          "name": "carrots",
          "qty": 7,
          "desc": "légume croquant",
          "is_fav": true,
          "img": require('./assets/carrots.jpg')
        },
        {
          "id": 3,
          "name": "banana",
          "qty": 3,
          "desc": "fruit mou",
          "is_fav": true,
          "img": require('./assets/banana.jpg')
        },
        {
          "id": 4,
          "name": "orange",
          "qty": 5,
          "desc": "agrume juteux",
          "is_fav": true,
          "img": require('./assets/404.jpg')
        },
        {
          "id": 5,
          "name": "grapes",
          "qty": 12,
          "desc": "petits fruits sucrés",
          "is_fav": false,
          "img": require('./assets/404.jpg')
        },
        {
          "id": 6,
          "name": "pear",
          "qty": 2,
          "desc": "fruit en forme de poire",
          "is_fav": true,
          "img": require('./assets/404.jpg')
        },
        {
          "id": 7,
          "name": "strawberry",
          "qty": 8,
          "desc": "baie rouge sucrée",
          "is_fav": true,
          "img": require('./assets/404.jpg')
        },
        {
          "id": 8,
          "name": "pineapple",
          "qty": 1,
          "desc": "fruit tropical épineux",
          "is_fav": false,
          "img": require('./assets/404.jpg')
        },
        {
          "id": 9,
          "name": "kiwi",
          "qty": 6,
          "desc": "fruit vert et acidulé",
          "is_fav": true,
          "img": require('./assets/404.jpg')
        },
        {
          "id": 10,
          "name": "watermelon",
          "qty": 1,
          "desc": "grosse pastèque juteuse",
          "is_fav": true,
          "img": require('./assets/404.jpg')
        }
      ]
      foods.forEach(f => this.$store.commit('food/ADD_FOOD', f));
      // this.$store.dispatch('getPokemon')
    },
    components: {
      FoodWrapper
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
