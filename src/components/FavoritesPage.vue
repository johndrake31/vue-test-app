<template>
      <p>{{"Favorites Page" | changeStringFilter('&')}} </p>
  </template>
  
  <script>
  import {telemData as telemMixin} from '@/mixins/telemetryData';
  export default {
      name: "FavoritesPage",
      bobIsAReallyCoolGuy: true,
      mixins:[ telemMixin],
      
  }
  
  </script>
  
  <style>
  
  </style>