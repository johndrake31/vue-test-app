<template>
  <div>

    <h2> {{ this.foodName.name }} details</h2>
    <h6>{{ this.foodName.otherData }}</h6>
    <img :src="this.foodName.img" :alt="this.foodName.name">
  </div>
</template>

<script>
  export default {
    name: "FoodDetailPage",
    computed: {
      foodName() {
        const { name, img, otherData } = this.$route.params;
        return { name, img, otherData }
      }
    }
  }
</script>

<style></style>