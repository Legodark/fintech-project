<template>
  <div class="degrade">
    <div class="container bg div-case-large box-shadow">
      <nav class="main-nav">
        <img src="@/assets/money/png/006-coins.png" alt="" class="logo" />
        <Burger class="mt-2"></Burger>
      </nav>
      <Sidebar>
        <ul class="sidebar-panel-nav">
          <li><router-link to="/">Homepage</router-link></li>
          <li><router-link to="/Login">Login</router-link></li>
        </ul>
      </Sidebar>
      <div class="text-center" style="padding:50px 0">
        <div><h1 class="text-center text-light">Registro</h1></div>
        <!-- Main Form -->
        <div class="login-form-1">
          <form id="register-form" class="text-left">
            <div class="login-form-main-message"></div>
            <div class="main-login-form">
              <div class="login-group">
                <div class="form-group">
                  <label for="reg_username" class="sr-only">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="reg_username"
                    name="reg_username"
                    placeholder="Usuario"
                    v-model="registerUser.name"
                  />
                </div>
                <div class="form-group">
                  <label for="reg_username" class="sr-only"
                    >Email address</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="reg_lastname"
                    name="reg_username"
                    placeholder="Apellidos"
                    v-model="registerUser.lastname"
                  />
                </div>
                <div class="form-group">
                  <label for="reg_password" class="sr-only">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="reg_password"
                    name="reg_password"
                    placeholder="Contraseña"
                    v-model="registerUser.password"
                  />
                </div>
                <!--<div class="form-group">
						<label for="reg_password_confirm" class="sr-only">Password Confirm</label>
						<input type="password" class="form-control" id="reg_password_confirm" name="reg_password_confirm" placeholder="Confirma Contraseña">
					</div>-->

                <div class="form-group">
                  <label for="reg_email" class="sr-only">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="reg_email"
                    name="reg_email"
                    placeholder="Email"
                    v-model="registerUser.email"
                  />
                </div>
                <!--<div class="form-group">
						<label for="reg_fullname" class="sr-only">Full Name</label>
						<input type="text" class="form-control" id="reg_fullname" name="reg_fullname" placeholder="full name">
					</div>

					<div class="form-group login-group-checkbox">
						<input type="radio" class="" name="reg_gender" id="male" placeholder="username">
						<label for="male">male</label>

						<input type="radio" class="" name="reg_gender" id="female" placeholder="username">
						<label for="female">female</label>
					</div>-->

                <div class="form-group login-group-checkbox">
                  <input
                    type="checkbox"
                    class=""
                    id="reg_agree"
                    name="reg_agree"
                  />
                  <label for="reg_agree"
                    >Aceptar los<router-link to="/legal"> Terminos Legales</router-link></label
                  >
                </div>
              </div>
              <button
                type="submit"
                class="login-button"
                @click.prevent="register()"
              >
                <i class="fa fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- end:Main Form -->
  </div>
</template>

<script>
import Burger from "@/components/Menu/Burger.vue";
import Sidebar from "@/components/Menu/Sidebar.vue";

export default {
  name: "ResgisterPage",
  components: {
    Burger,
    Sidebar,
  },
  data() {
    return {
      registerUser: {
        name: "",
        lastname: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async register() {
      try {
        await this.axios.post(
          "http://localhost:3000/auth/register",
          this.registerUser
        );

        alert("Te has registrado satisfactorizamente.");

        this.$router.push("/login");
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
};
</script>

<style></style>
