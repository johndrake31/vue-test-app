<template>

  <div class="container">

    <p cl>about page</p>
    <b-button class="mr-2" tag="router-link" type="is-primary is-light is-link" v-for=" r in routes" :key="r.name" exact :to="{ name: r.name }">
      {{ r.display }}
    </b-button>
    <div style="margin-top: 30px;">

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutPage",
    // conditional route guard check before leaving a page
    beforeRouteLeave(to, from, next) {
      console.log(to);
      console.log(from);
      const res = confirm("do you want to leave page?")
      next(res)
    },
    data() {
      return {
        routes: [
          { name: "AboutFruit", display: "fruit" },
          { name: "AboutGrain", display: "grain" },
          { name: "AboutVegetables", display: "vegetable" },
          { name: "AboutMeat", display: "meat" },
          { name: "AboutDairys", display: "dairy" },
        ]
      }
    }
  }

</script>

<style>
  .router-buttons {
    margin-right: 12px;
    border: 1px solid purple;
    padding: 10px 12px;
  }

  .container {
    margin: 12px;
    padding: 15px;
  }
</style>