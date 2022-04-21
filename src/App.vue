<template>
  <AppBar />
  <div class="container-fluid fondo">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xs-12">
        <main class="">
          <router-view />
        </main>
      </div>

    </div>
  </div>
</template>


<script>
import AppBar from "./components/AppBar.vue";
import Sidebar from "./components/Sidebar.vue";
import HomeView from "./views/HomeView.vue";
export default {
  components: {
    AppBar,
    Sidebar,
    HomeView,
  },
  data() {
    return {
      movies: [],
    };
  },
};
</script>
<style scoped>
 .fondo{
   background-color: black;
 }
</style>
