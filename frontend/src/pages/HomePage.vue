<template>
  <div class="degrade">
    <div toggleable="xl" class="container-float bg box-shadow div-case-large">
      <!-- menu nav -->
      <b-navbar toggleable="xl" class="trans barnav">
        <b-navbar-brand href="#">
          <img
            src="@/assets/money/png/006-coins.png"
            alt=""
            class="logo logo-size"/>
          <p class="white"></p
        ></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <p class="white"></p>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-navbar-brand v-if="isAuth === null">
                <router-link to="/register">
                  <p class="white">Register</p>
                </router-link>
              </b-navbar-brand>
            </b-nav-form>

            <b-navbar-brand v-if="isAuth === null"
              ><router-link to="/login"
                ><p class="white">Login</p></router-link
              ></b-navbar-brand
            >

            <!-- hacer dinamico -->
            <b-navbar-brand v-if="isAuth !== null"
              ><router-link to="/dashboard"
                ><p class="white">Dashboard</p></router-link
              ></b-navbar-brand
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <div class="row justify-content-center">
        <div class="col-12">
          <div class="header-description pb-4 pt-3">
            <div class="">
          <h1 class="text-center header-title-color">FinSave</h1>
          <p class="text-black pr-5 pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            pellentesque eros. Donec dictum eget lectus quis eleifend. Morbi nec
            velit et augue eleifend porttitor quis ac nunc. Proin gravida eros
            mauris, quis facilisis turpis elementum non. Duis efficitur
            efficitur dolor. In vulputate vitae lorem at ultricies. Duis vitae
            risus mauris. Donec eget metus eget ligula tincidunt dignissim a sit
            amet urna. Maecenas enim magna, volutpat id fringilla nec, posuere
            quis tellus. Praesent pharetra arcu erat, id malesuada justo
            tristique sit amet. Nulla facilisi. Nam vestibulum felis id dolor
            finibus viverra. Praesent eleifend felis dictum vehicula eleifend.
            Suspendisse elementum vestibulum nisl, vel condimentum massa ornare
            vel. Duis ipsum felis, vulputate a velit at, pretium pharetra
            tortor. Phasellus at mi mi. Integer non scelerisque dolor. Duis
            facilisis fermentum pretium. Ut metus metus, ultricies at maximus
            eu, consectetur quis massa. Nunc eget tristique velit. Nullam quam
            ipsum, facilisis ac luctus a, vestibulum sit amet nunc.
          </p>
          <div class="col text-center">
            <button class="btn btn-success text-dark boton_sombra">
              <router-link to="/register" class="text-white ">
                Empezar a Gestionar
              </router-link>
            </button>
          </div>
          </div>
          </div>
          <div class=" row justify-content-center">
            <div class="mt-5 col-7">
              <b-card
                img-src="https://placekitten.com/300/300"
                img-alt="Card image "
                img-left
                class="mb-3 text-white custom-bg-card"
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
              <b-card
                img-src="https://placekitten.com/300/300"
                img-alt="Card image"
                img-right
                class="text-white custom-bg-card mb-5 "
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
            </div>
          </div>

          <div class="col-5 bg-white float-left ml-5">graficas img</div>
          <div class="col-5 bg-white float-right mr-5 mb-5">graficas img</div>
        </div>
        <div class="col-12 bg-warning custom-card-height">
          <div class="col-6 float-left custom-bg-form">
            <div class="col-12 text-center text-white">
              <div class="mt-4">
                <i
                  class="fas fa-phone-volume text-white custom-icon-size mt-5"
                ></i>
                <p class="mt-2">
                  <a href="tel:+34 600123123 " class="text-white"
                    >Tel: +34 600123123</a
                  >
                </p>
              </div>
              <div>
                <i
                  class="fas fa-envelope-open-text text-white custom-icon-size mt-2"
                ></i>
                <p class="mt-2">
                  <a href="mailto:contact@finsave.com" class="text-white"
                    >contact@finsave.com</a
                  >
                </p>
              </div>
              <div>
                <i
                  class="fas fa-map-marker-alt text-white custom-icon-size mt-2"
                ></i>
                <p class="mt-2">Calle Moon Nº:24</p>
              </div>
            </div>
          </div>
          <div class="col-6 float-right">
            <div class="">
              <div class="row justify-content-center">
                <form
                  class="form-horizontal text-center col-6"
                  action=""
                  method="post"
                >
                  <fieldset>
                    <legend class="text-center">Contactar</legend>

                    <!-- Name input-->
                    <div class="form-group">
                      <label
                        class="col-md-12 control-label text-center"
                        for="name"
                        >Nombre</label
                      >
                      <div class="col-md-12">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>

                    <!-- Email input-->
                    <div class="form-group">
                      <label
                        class="col-md-12 control-label text-center"
                        for="email"
                        >Email</label
                      >
                      <div class="col-md-12">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>

                    <!-- Message body -->
                    <div class="form-group">
                      <label
                        class="col-md-12 control-label text-center"
                        for="message"
                        >Mensaje</label
                      >
                      <div class="col-md-12 mb-4">
                        <textarea
                          class="form-control"
                          id="message"
                          name="message"
                          placeholder="Cuentanos, que necesitas..."
                          rows="2"
                        ></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary btn-lg">
                        Enviar
                      </button>
                    </div>

                    <!-- Form actions -->
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      isAuth: null
    };
  },
  methods: {
    isLogin() {
      console.log(this.$store.state.token);
      this.isAuth = this.$store.state.token;
    }
  },
  mounted() {
    this.isLogin();
  }
};
</script>

<style>
body {
  overflow-x: hidden;
}

.custom-bg-card {
  background-color: #00487c;
  border: none;
}

.custom-bg-form {
  background: url(https://i.ibb.co/L8YScdC/primer-plano-hombre-negocios-tableta-digital-1098-549-copia.jpg)
    center center/cover no-repeat;
  height: 400px;
}
.custom-card-height {
  height: 400px;
}

.custom-icon-size {
  font-size: 30px;
}

.boton_sombra {
  box-shadow: 0 0 10px 1px #FFFCFF;
}

.header-description {
  background-color: #ffd600;
  box-shadow: inset 0 0 10px 2px black;
}

.header-title-color {
  color: #00487c;
}
</style>
