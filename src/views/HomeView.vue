<template>
  <h2 class="text-white mx-auto col-md-10">Películas Top</h2>
  <CustomCarousel> </CustomCarousel>
  <h2 class="text-white mx-auto col-md-10">Películas</h2>
  <CarouselMovies />
  <br />
  <h2 class="text-white mx-auto col-md-10">Tv Shows</h2>
  <CarouselTvShow />
</template>

<script>
import CustomCarousel from "../components/CustomCarousel.vue";
import CarouselMovies from "../components/CarouselMovies.vue";
import CarouselTvShow from "../components/CarouselTvShow.vue";

export default {
  name: "HomeView",
  components: {
    CustomCarousel,
    CarouselMovies,
    CarouselTvShow,
  },
};
</script>