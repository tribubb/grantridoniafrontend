<template>
  <IndexSlideshow :height="slideshowHeight" />
  <HeaderToolbar/>
  <router-view></router-view>
</template>

<script>
import IndexSlideshow from "@/components/IndexSlideshow.vue";
import HeaderToolbar from "@/components/HeaderToolbar.vue";

import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    IndexSlideshow,
    HeaderToolbar,
  },
  computed: {
    ...mapState(['slideshowHeight']),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
body {
  overflow-x: hidden;
  margin: 0px;
}
</style>
