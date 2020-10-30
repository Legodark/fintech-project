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
						<input type="email" class="form-control" id="lg_username" name="lg_username" placeholder="Usuario" v-model="userLogin.email">
					</div>
					<div class="form-group">
						<label for="lg_password" class="sr-only">Password</label>
						<input type="password" class="form-control" id="lg_password" name="lg_password" placeholder="Password" v-model="userLogin.password">
					</div>
				</div>
				<button type="submit" class="login-button" @click.prevent="login()"><i class="fa fa-chevron-right"></i></button>
			</div>

			<div class="etc-login-form">
        <div class="text-center text-warning"><p>{{error}}</p></div>
				<p class="text-center"><a href="#"></a></p>
				<p class="text-center">Registrate <router-link to="/register">aquí</router-link></p>
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

export default {
  name: "HomePage",
  components: {
    Burger,
    Sidebar
  },
  data(){
    return {
      userLogin: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods:{
    async login(){

      try{
      await this.$store.dispatch('login', this.userLogin)

      this.$router.push('/')
      }
      catch(error){
        this.error = error.response.data.mensage
      }
    }
  }
}
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
.div-case-large{
    height: 1000px;
}

.box-shadow {

  -webkit-box-shadow: 2px 9px 5px 21px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 9px 5px 21px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 9px 5px 21px rgba(0, 0, 0, 0.75);
}
</style>
