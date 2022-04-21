<template>
  <AppBar />
  <div class="container-fluid fondo">
    <div class="row">
      <div class="col-md-9 col-lg-9 col-xs-9">
        <main class="">
          <router-view />
        </main>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-3 sidebar-height">
        <p class="text-white" style="font-weight: bolder; text-align: left">
          Popular movies
        </p>
        <Sidebar />
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
