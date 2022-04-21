<template>
  <h2 class="text-white mx-auto col-md-10">Películas Top(Rated)</h2>
  <CustomCarousel> </CustomCarousel>
  <h2 class="text-white mx-auto col-md-10">Películas Favoritas(Favorite)</h2>
  <CarouselMovies />
  <br />

</template>

<script>
import CustomCarousel from "../components/CustomCarousel.vue";
import CarouselMovies from "../components/CarouselMovies.vue";
import CarouselTvShow from "../components/CarouselTvShow.vue";



export default ({
  name: "MovieView",
  components: {
    CustomCarousel,
    CarouselMovies,
    CarouselTvShow,
  },
});
</script>