<template>
  <div class="degrade">
    <div class="container bg box-shadow">
      <div>
        <nav class="main-nav">
          <img src="@/assets/money/png/006-coins.png" alt="" class="logo" />
          <Burger class="mt-2"></Burger>
        </nav>
        <Sidebar>
          <MenuSlide/>
        </Sidebar>
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
                <p></p>
              </div>
              <p class="text-center"><a href="#"></a></p>
              <p class="text-center">
              <router-link to="/forward">Recuperar Contraseña</router-link>
              </p>
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
  </div>
</template>

<script>
import Burger from "@/components/Menu/Burger.vue";
import Sidebar from "@/components/Menu/Sidebar.vue";
import MenuSlide from "@/mixins/MenuSlide";
export default {
  name: 'ForwardPass',
  components: {
    Burger,
    Sidebar,
    MenuSlide
  },
}
</script>

<style>

</style>
