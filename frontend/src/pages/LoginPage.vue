<template>
<div class="degrade">
  <div class="container bg div-case-large box-shadow">
      <div class="text-center" style="padding:50px 0">
	<div><h1 class="text-center text-light">Login</h1></div>

	<div class="login-form-1">
		<form id="login-form" class="text-left">
			<div class="login-form-main-message"></div>
			<div class="main-login-form">
				<div class="login-group">
					<div class="form-group">
						<label for="lg_username" class="sr-only">Username</label>
						<input type="text" class="form-control" id="lg_username" name="lg_username" placeholder="Usuario">
					</div>
					<div class="form-group">
						<label for="lg_password" class="sr-only">Password</label>
						<input type="password" class="form-control" id="lg_password" name="lg_password" placeholder="Contraseña">
					</div>
					<div class="form-group login-group-checkbox">
						<input type="checkbox" id="lg_remember" name="lg_remember">
						<label for="lg_remember">Recordar</label>
					</div>
				</div>
				<button type="submit" class="login-button"><i class="fa fa-chevron-right"></i></button>
			</div>
			<div class="etc-login-form">
				<p class="text-center">Recupera tu contraseña <a href="#">aquí</a></p>
				<p class="text-center">Registrate <router-link to="/register">aquí</router-link></p>
			</div>
      <div class="text-center"><router-link to="/">HomePage</router-link></div>
		</form>
	</div>
	<!-- end:Main Form -->
</div>


  </div>
</div>
</template>

<script>
export default {
  name: "HomePage"
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
