<template>
  <div
    class="card card-bottom  text-white"
    v-for="(movie, i) in movies"
    :key="i.id"
  >
    <div class="row">
      <div class="col-md-6">
        <div class="card myCard-poster">
          <figure class="box-img">
            <img
              class="box-img-card"
              height="100%"
              width="100%"
              :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
              alt=""
            />
          </figure>
        </div>
      </div>

      <div
        class="col-md-6 card-info d-flex flex-column justify-content-between"
      >
        <div class="info-top">
          <p>{{ movie.title }}</p>
          <p>{{ movie.release_date }}</p>
        </div>

        <div class="row info-bottom justify-content-between">
          <p class="calidad">{{ movie.popularity }}</p>
          <p class="rate ">{{ movie.vote_average }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    async getPopularMovies() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=ecaa4965ffbe006e64de9e316960fd4b&language=en-ES&page=1"
        );
        const array = await response.json();

        this.movies = array.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getPopularMovies();
  },
};
</script>
<style scoped>

.card-bottom .myCard-poster {
  height: 15rem;
  background-size: cover !important;
  background-position: center;
  overflow: hidden;
}
.myCard-poster {
  background-color: black;
}
.box-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 0;
}
.box-img-card {
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
}
.card-info {
  padding-right: 12%;
}
.card-info .info-bottom .calidad {
  width: 50%;
  text-align: left;
      background-color: green;
    color: #030303;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
}
.card-info .info-bottom .rate {
  width: 50%;
  text-align: right;
}
.card-bottom {
  margin-bottom: 1rem;
  border: none;
  background-color: transparent;
}
.bg-color-back{
  background-color: black;
}

</style>

