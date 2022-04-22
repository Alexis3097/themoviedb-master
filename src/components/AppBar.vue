<template>
  <nav style="z-index: 10" class="navbar navbar-expand-lg bg-color-back">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/movie">Películas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/tvshow">Tv Shows</router-link>
        </li>
      </ul>
       
      
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style scoped>
.bg-color-back {
  background-color: black;
}
nav a.router-link-exact-active {
  color: white;
}
.nav-link {
  color: rgba(255, 255, 255, 0.5);
}
</style>
