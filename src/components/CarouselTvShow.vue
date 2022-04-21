<template>
  <div class="col-md-10 mx-auto redondeo mt-5">
    <Carousel :itemsToShow="3.5" :wrapAround="true">
      <Slide v-for="(tvShow, i) in tvShows" :key="i.id" class="margin-left">
        <div class="carousel__item card carousel-peliculas">
          <img
            class="redondeo card-img-top"
            :src="`https://image.tmdb.org/t/p/original${tvShow.poster_path}`"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title text-white">{{ tvShow.name }}</h5>
             <p class="card-text calificacion mx-auto">{{tvShow.vote_average}}</p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "CarouselTvShow",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    tvShows: [],
  }),

  methods: {
    async getTvShows() {
      try {
        const response = await fetch(
          "Https://api.themoviedb.org/3/tv/top_rated?api_key=ecaa4965ffbe006e64de9e316960fd4b&language=en-Es&page=1"
        );
        const array = await response.json();

        this.tvShows = array.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getTvShows();
  },
});
</script>
<style scoped>
.margin-left {
  margin-left: 1rem;
}
.carousel-peliculas {
  background-color: black;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
.calificacion {
  width: 20%;
  text-align: center;
  background-color: yellow;
  color: #030303;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
}
</style>