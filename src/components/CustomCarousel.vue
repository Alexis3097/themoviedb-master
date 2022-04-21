<template>
  <div class="col-md-10 mx-auto redondeo mt-5">
    <Carousel :autoplay="2000" :wrap-around="true">
      <!-- <router-link class="nav-link" to="/"> -->
        <Slide v-for="(rateMovie, i) in rateMovies" :key="i.id">
          <div class="card fondo redondeo">
            <img
              class="redondeo"
              :src="`https://image.tmdb.org/t/p/original${rateMovie.backdrop_path}`"
              alt=""
            />
            <div class="card-body">
              <h3 class="card-title text-white font-weight-bold">
                {{ rateMovie.title }}
              </h3>
            </div>
          </div>
        </Slide>
      <!-- </router-link> -->

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
  name: "CustomCarousel",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      rateMovies: [],
    };
  },
  methods: {
    async getRateMovies() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=ecaa4965ffbe006e64de9e316960fd4b&language=en-ES&page=1"
        );
        const array = await response.json();

        this.rateMovies = array.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getRateMovies();
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
</style>