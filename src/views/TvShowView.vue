<template>
  <h2 class="text-white mx-auto col-md-10">Tv Show populare (Favorite)</h2>
  <TvShowFavorite> </TvShowFavorite>
  <h2 class="text-white mx-auto col-md-10">Tv Show top (Rated)</h2>
  <CarouselTvShow />
</template>

<script>
import TvShowFavorite from "../components/TvShowFavorite.vue";
import CarouselTvShow from "../components/CarouselTvShow.vue";
export default {
  name: "TvShowView",
  components: {
    TvShowFavorite,
    CarouselTvShow,
  },
};
</script>

<style>
</style>