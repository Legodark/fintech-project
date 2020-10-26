<template>
  <div class="degrade">
    <div class="container bg box-shadow div-case-large">
      <!-- menu nav -->
      <b-navbar toggleable="lg" class="trans barnav">
        <b-navbar-brand href="#">
          <img src="@/assets/money/png/006-coins.png" alt="" class="logo" />
          <p class="white"></p
        ></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <p class="white">FindSave</p>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-navbar-brand href="#">
                <p class="white">Register</p></b-navbar-brand
              >
            </b-nav-form>

            <b-navbar-brand href="#"><p class="white">Login</p></b-navbar-brand>

            <!-- hacer dinamico -->
            <b-navbar-brand href="#"
              ><p class="white">Dashboard</p></b-navbar-brand
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <div>
        <div class="mt-4">
          <b-card
            img-src="https://placekitten.com/300/300"
            img-alt="Card image"
            img-left
            class="mb-3"
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>

          <b-card
            img-src="https://placekitten.com/300/300"
            img-alt="Card image"
            img-right
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </div>
      </div>

      <div class="footer">
        <footer></footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
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

.trans {
  background-color: transparent;
}
.white {
  color: white;
}

.navbar {
  padding-top: 5px;
}

.logo {
  width: 30px;
}
.center {
  text-align: center;
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
  height: 1500px;

}
.div-case-large{
    height: 1500px;
}
</style>
