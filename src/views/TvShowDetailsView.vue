<template>
  <div class="row" id="toolbarChat" ref="toolbarChat">
    <div class="col-md-8 mx-auto d-flex mt-5">
      <div
        class="card col-md-4 mx-auto"
        style="padding: 0; background-color: black"
      >
        <img
          :src="`https://image.tmdb.org/t/p/original${tvShowDetail.poster_path}`"
          alt=""
        />
      </div>
      <div class="card col-md-8 mx-auto card-tvShow-detail justify-content-between">
       <div>
          <h2 class="text-white">{{ tvShowDetail.name }}</h2>
          <p class="font-weight-light card-tvShow-detail text-white">
            {{ tvShowDetail.overview }}
          </p>
          <p class="text-white">
            <span style="font-weight: bolder">Fecha de primera emision: </span
            >{{ tvShowDetail.first_air_date }}
          </p>
       </div>

        <div class="col justify-content-between" style="margin-top: 10%">
          <div class="row align-items-center justify-content-between">
  
            <div class="col-md-6">
              <span class="text-white" style="font-weight: bolder"
                >Temporadas</span
              >
              <p class="star col">{{ tvShowDetail.number_of_seasons }}</p>
            </div>
            <div class="col-md-6 ">
              <span class="text-white" style="font-weight: bolder"
                >Stars</span
              >
               <p class="star ">{{ tvShowDetail.vote_average }}</p>
            </div>
          </div>
  
          <p class="text-white">
            <span style="font-weight: bolder">Género: </span>
            <span>
              <span
                v-for="(generos, i) in tvShowDetail.genres"
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
    </div>
    <br />
    <h2 class="text-white mx-auto col-md-10">
      <br />
      Tv show Recomendadas
    </h2>
    <div class="col-md-12 mx-auto">
      <TvShowRecomendations :idTvShow="$route.params.id" />
    </div>
  </div>
</template>

<script>
import TvShowRecomendations from "../components/TvShowRecomendations.vue";
export default {
  name: "TvShowDetailsView",
  components: {
    TvShowRecomendations,
  },
  data: () => ({
    tvShowDetail: [],
  }),
  methods: {
    async getTvShowDetail(idTvShow) {
      try {
        const response = await fetch(`
                https://api.themoviedb.org/3/tv/${idTvShow}?api_key=ecaa4965ffbe006e64de9e316960fd4b&language=en-ES`);
        const array = await response.json();
        this.tvShowDetail = array;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getTvShowDetail(this.$route.params.id);
  },
  watch: {
    "$route.params.id": function (idTvShow) {
      this.getTvShowDetail(idTvShow);
    },
  },
};
</script>

<style scoped>
.card-tvShow-detail {
  background-color: black;
}
.star {
  width: 20%;
  text-align: center;
  background-color: yellow;
  color: #030303;
  font-weight: bold;
  text-align: center;
  border-radius: 1rem;
}
</style>