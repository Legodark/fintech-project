<template>
<div class="degrade">
  <div class="container bg div-case-large box-shadow">
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
						<input type="text" class="form-control" id="reg_username" name="reg_username" placeholder="Usuario">
					</div>
          <div class="form-group">
						<label for="reg_username" class="sr-only">Email address</label>
						<input type="text" class="form-control" id="reg_username" name="reg_username" placeholder="Apellidos">
					</div>
					<div class="form-group">
						<label for="reg_password" class="sr-only">Password</label>
						<input type="password" class="form-control" id="reg_password" name="reg_password" placeholder="Contraseña">
					</div>
					<!--<div class="form-group">
						<label for="reg_password_confirm" class="sr-only">Password Confirm</label>
						<input type="password" class="form-control" id="reg_password_confirm" name="reg_password_confirm" placeholder="Confirma Contraseña">
					</div>-->

					<div class="form-group">
						<label for="reg_email" class="sr-only">Email</label>
						<input type="text" class="form-control" id="reg_email" name="reg_email" placeholder="Email">
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
						<input type="checkbox" class="" id="reg_agree" name="reg_agree">
						<label for="reg_agree">i agree with <a href="#">terms</a></label>
					</div>
				</div>
				<button type="submit" class="login-button"><i class="fa fa-chevron-right"></i></button>
			</div>
			<div class="etc-login-form">
				<p class="text-center">Si ya tienes cuenta: <router-link to="/login">Login</router-link></p>
			</div>
      <div class="text-center"><router-link to="/">HomePage</router-link></div>
		</form>
	</div>
  </div>
  </div>
	<!-- end:Main Form -->
</div>
</template>

<script>
export default {
  name: "ResgisterPage"
}
</script>

<style>

</style>
