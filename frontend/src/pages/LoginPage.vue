<template>
  <div class="degrade">
    <div class="container bg box-shadow">
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
              <a href="" @click.prevent="openModalLogin()">Recuperar Contraseña</a>
              </div>
              <div>
                <modal name="my-first-modal-login">
                  <div class="container-full register-form">
                    <div class="form">
                      <div class="note">
                        <p>Recuperar Contraseña</p>
                      </div>

                      <div class="form-content">
                        <div class="row justify-content-center">
                          <div class="col-md-6">
                            <div class="form-group text-center mb-2">
                              <label class="text-dark">Email</label>
                              <input
                                type="text"
                                class="form-control border border-primary rounded-pill"
                                placeholder=""
                                value=""
                                v-model="forwardPass.email"
                              />
                            </div>
                          </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group text-center">
                              <label class="text-dark">Contraseña</label>
                              <input
                                type="text"
                                class="form-control border border-primary rounded-pill"
                                placeholder=""
                                value=""
                                v-model="forwardPass.password"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group text-center">
                              <label class="text-dark">Repetir Contraseña</label>
                              <input
                                type="text"
                                class="form-control border border-primary rounded-pill mb-4"
                                placeholder=""
                                value=""
                                v-model="repeatpassword"
                              />
                            </div>
                          </div>
                        </div>
                        </div>
                        <div class="float-left text-dark"><p>{{errorPassword}}</p></div>
                        <button
                          type="button"
                          class="btn btn-primary float-right"
                          @click.prevent="hideLogin()"
                        >
                          Salir
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning float-right mr-3"
                          @click.prevent="updatePasswordLogin()"
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
      forwardPass: {
        email: "",
        password: ""
      },
      repeatpassword: '',
      errorPassword: '',
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
          await this.$store.dispatch("moveLoad");
          this.$router.push("/dashboard");
        }
      } catch (error) {
        this.error = "Ya estas logueado";
      }
    },
    async updatePasswordLogin() {
      if (this.forwardPass.password !== this.repeatpassword) {
        this.errorPassword = "Las contraseñas no coinciden";
        console.log(this.errorPassword);
        return;
      }
      try{
      await this.$store.dispatch('updatePasswordLogin', this.forwardPass)
      console.log(this.userLogin);
      this.hideLogin()
      }
      catch(error){
        console.log('No se ha podido actualizar la contraseña', error);
      }
    },
  }
};
</script>

<style>
.bg {
  background-color: #00487c;
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
