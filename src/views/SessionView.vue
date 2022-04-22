<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Inicio de sesion</h5>
      <p class="card-text">
        Por favor de click al boton para iniciar sesion la cual lo mandara a
        otra pagina donde debe dar click al boton aceptar
        {{ token }}
      </p>
      <button class="btn btn-primary mt-1" @click="getToken">
        Obtener token {{ token }}
      </button>
      <a
        :href="`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8080/session`"
        class="btn btn-primary"
        >Obtener autorización del token</a
      >
      <br />

      <button class="btn btn-primary mt-1" @click="getAuthorize">
        Obtener session
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionView",
  data() {
    return {
      token: localStorage.getItem("token") ?? "",
      session_id: "",
      api_key: "",
    };
  },
  methods: {
    async getToken() {
      try {
        if (this.token != "") {
          return;
        } else {
          let request = await fetch(
            "https://api.themoviedb.org/3/authentication/token/new?api_key=ecaa4965ffbe006e64de9e316960fd4b"
          );
          let token = await request.json();
          localStorage.setItem("token", token.request_token);
        }

        this.token = token.request_token;
      } catch (error) {}
    },
    async getAuthorize() {
      try {
        const request = await fetch(
          "https://api.themoviedb.org/3/authentication/session/new?api_key=ecaa4965ffbe006e64de9e316960fd4b",
          {
            method: "POST",
            body: JSON.stringify({
              request_token: "120cb0acf5445c12adb897586ab50b8c44f0600e",
            }),
          }
        );
        let session_id = await request.json();
        localStorage.setItem("session_id", session_id.session_id);
        this.session_id = session_id.session_id;
        console.log(session_id);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.api_key = process.env.VUE_APP_MOVIE_KEY;
  },
  watch: {
    idMovie() {
      //re-render component
      this.$forceUpdate();
    },
  },
};
</script>

<style>
</style>