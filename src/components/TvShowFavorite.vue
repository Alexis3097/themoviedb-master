<template>
  <div class="col-md-10 mx-auto redondeo mt-5">
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(popularTvShow, i) in popularTvShows" :key="i.id">
        <div class="card fondo redondeo">
          <img
            class="redondeo"
            :src="`https://image.tmdb.org/t/p/original${popularTvShow.backdrop_path}`"
            alt=""
          />
          <div class="card-body">
            <h3 class="card-title text-white font-weight-bold">
              {{ popularTvShow.name }}
            </h3>
            <p class="card-text star mx-auto">
              {{ popularTvShow.vote_average }}
            </p>
            <router-link
              class="btn btn-primary"
              :to="`/tvShowDetail/${popularTvShow.id}`"
              >Ver detalle</router-link
            >
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "TvShowFavorite",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      popularTvShows: [],
      api_key: "",
    };
  },
  methods: {
    async getPopularTvShows() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${this.api_key}&language=en-ES&page=1`
        );
        const array = await response.json();

        this.popularTvShows = array.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.api_key = process.env.VUE_APP_MOVIE_KEY;
    this.getPopularTvShows();
  },
});
</script>
<style scoped>
.fondo {
  background-color: black;
}
.redondeo {
  border-radius: 10px;
}
.star{
  width: 5%;
  text-align: center;
  background-color: yellow;
  color: #030303;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
}
</style>