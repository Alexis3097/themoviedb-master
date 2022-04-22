<template>
  <div class="row">
    <div class="col-md-8 mx-auto d-flex mt-5">
      <div
        class="card col-md-4 mx-auto"
        style="padding: 0; background-color: black"
      >
        <img
          :src="`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`"
          alt=""
        />
      </div>
      <div class="card col-md-8 mx-auto card-movie-detail">
        <h2 class="text-white">{{ movieDetail.title }}</h2>
        <p class="font-weight-light card-movie-detail text-white">
          {{ movieDetail.overview }}
        </p>
        <p class="text-white">
          <span style="font-weight: bolder">Fecha de estreno: </span
          >{{ movieDetail.release_date }}
        </p>
        <p class="star">{{ movieDetail.vote_average }}</p>
        <p class="text-white">
          <span style="font-weight: bolder">Género: </span>
          <span>
            <span
              v-for="(generos, i) in movieDetail.genres"
              :key="i.id"
              style="margin-bottom: 1rem"
              class="text-white"
            >
              {{ generos.name }},
            </span>
          </span>
        </p>
      </div>
    </div>
    <br />
    <h2 class="text-white mx-auto col-md-10">
      <br />
      Películas Recomendadas
    </h2>
    <div class="col-md-12 mx-auto">
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

  data: () => ({
    movieDetail: [],
    // idMovie : this.$route.params.id
  }),
  methods: {
    async getMovieDetail(idMovie) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${idMovie}?api_key=ecaa4965ffbe006e64de9e316960fd4b&language=en-ES`
        );
        const array = await response.json();

        this.movieDetail = array;
      } catch (error) {
        console.log(error);
      }
    },
    
  },

  created() {
    this.getMovieDetail(this.$route.params.id);
  },
  watch: {
    "$route.params.id": {
      handler: function (search) {
        this.getMovieDetail(this.$route.params.id);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
.test {
  background-color: red;
}
.star {
  width: 10%;
  text-align: center;
  background-color: yellow;
  color: #030303;
  font-weight: bold;
  text-align: center;
  border-radius: 1rem;
}
.card-movie-detail {
  background-color: black;
}
</style>