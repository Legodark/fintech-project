<template>
  <div class="degrade">
    <div class="container bg div-case-large box-shadow">
      <div>
        <nav class="main-nav">
          <img src="@/assets/money/png/006-coins.png" alt="" class="logo" />
          <Burger class="mt-2"></Burger>
        </nav>
        <Sidebar>
          <ul class="sidebar-panel-nav">
            <li><router-link to="/">Homepage</router-link></li>
            <li><router-link to="/register">Registro</router-link></li>
          </ul>
        </Sidebar>
      </div>
      <div class="text-center" style="padding:50px 0">
        <div><h1 class="text-center text-light">Login</h1></div>

        <div class="login-form-1">
          <form id="login-form" class="text-left">
            <div class="login-form-main-message"></div>
            <div class="main-login-form">
              <div class="login-group">
                <div class="form-group">
                  <label for="lg_username" class="sr-only">Username</label>
                  <input
                    type="email"
                    class="form-control"
                    id="lg_username"
                    name="lg_username"
                    placeholder="Usuario"
                    v-model="userLogin.email"
                  />
                </div>
                <div class="form-group">
                  <label for="lg_password" class="sr-only">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="lg_password"
                    name="lg_password"
                    placeholder="Password"
                    v-model="userLogin.password"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="login-button"
                @click.prevent="login()"
              >
                <i class="fa fa-chevron-right"></i>
              </button>
            </div>

            <div class="etc-login-form">
              <div class="text-center text-warning">
                <p>{{ error }}</p>
              </div>
              <div class="text-center">
              <a href="" @click.prevent="openModal()">Recuperar Contraseña</a>
              </div>
              <div>
                <modal name="my-first-modal-move">
                  <div class="container-full register-form">
                    <div class="form">
                      <div class="note">
                        <p>Recuperar Contraseña</p>
                      </div>

                      <div class="form-content">
                        <div class="row justify-content-center">
                          <div class="col-md-6">
                            <div class="form-group text-center mb-2">
                              <label>Email</label>
                              <input
                                type="text"
                                class="form-control border border-primary rounded-pill"
                                placeholder=""
                                value=""
                              />
                            </div>
                          </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group text-center">
                              <label>Contraseña</label>
                              <input
                                type="text"
                                class="form-control border border-primary rounded-pill"
                                placeholder=""
                                value=""
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group text-center">
                              <label>Repetir Contraseña</label>
                              <input
                                type="text"
                                class="form-control border border-primary rounded-pill mb-4"
                                placeholder=""
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                        </div>
                        <button
                          type="button"
                          class="btn btn-primary float-right"
                        >
                          Salir
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning float-right mr-3"
                        >
                          Actualizar
                        </button>
                      </div>
                    </div>
                  </div>
                </modal>
              </div>
              <p class="text-center">
                Registrate <router-link to="/register">aquí</router-link>
              </p>
            </div>
            <!--<div class="text-center"><router-link to="/">HomePage</router-link></div>
      <div class="text-center"><router-link to="/profile">Profile</router-link></div>-->
          </form>
        </div>
        <!-- end:Main Form -->
      </div>
    </div>
  </div>
</template>

<script>
//import {mapActions} from 'vuex'
import Burger from "@/components/Menu/Burger.vue";
import Sidebar from "@/components/Menu/Sidebar.vue";
import OpenModal from "@/mixins/OpenModal";

export default {
  name: "HomePage",
  mixins: [OpenModal],
  components: {
    Burger,
    Sidebar,
  },
  data() {
    return {
      userLogin: {
        email: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", this.userLogin);
        await this.$store.dispatch("readTokenFormLocalStorage");
        if (this.$store.state.token === null) {
          this.error = this.$store.state.errorLogin;
        } else {
          this.$router.push("/dashboard");
        }
      } catch (error) {
        this.error = "Ya estas logueado";
      }
    }
  }
};
</script>

<style>
.bg {
  background-color: #00487c;
}

.degrade {
  background: -webkit-linear-gradient(
    top,
    rgba(248, 181, 0, 1) 0%,
    rgba(248, 181, 0, 1) 15%,
    rgba(252, 205, 77, 1) 78%,
    rgba(251, 223, 147, 1) 87%,
    rgba(252, 234, 187, 1) 95%,
    rgba(252, 234, 187, 1) 100%
  );
  height: 1000px;
}
.div-case-large {
  height: 1000px;
}

.box-shadow {
  -webkit-box-shadow: 2px 9px 5px 21px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 9px 5px 21px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 9px 5px 21px rgba(0, 0, 0, 0.75);

}
.custom-button-edit {
  background-color: transparent;
  border: none;
}
</style>
