<template>
  <div class="row">
    <div class="col-md-8 mx-auto test">
      <div class="card"></div>
    </div>
    <div class="col-md-4 mx-auto test">
      <p class="text-white">hola</p>
    </div>
    <h2 class="text-white mx-auto col-md-10">
      Películas Recomendadas {{ $route.params.id }}
    </h2>
    <div class="col-md-12 mx-auto test">
      <MoviesRecommendations :idMovie="$route.params.id" />
    </div>
  </div>
</template>

<script>
import MoviesRecommendations from "../components/MoviesRecommendations.vue";
export default {
  name: "MovieDetailView",
  components: {
    MoviesRecommendations,
  },
  data() {
    return {
      movieDetail: [],
    };
  },
  methods: {
    async getMovieDetail(idMovie) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${idMovie}?api_key=ecaa4965ffbe006e64de9e316960fd4b&language=en-ES`
        );
        const array = await response.json();
        this.movieDetail = array.results;
        console.log(array.results);
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed() {},
};
</script>

<style>
.test {
  background-color: red;
}
</style>