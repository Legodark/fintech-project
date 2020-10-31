<template>
  <div class="degrade">
    <div toggleable="xl" class="container bg box-shadow div-case-large">
      <!-- menu nav -->
      <b-navbar toggleable="xl" class="trans barnav">
        <b-navbar-brand href="#">
          <img src="@/assets/money/png/006-coins.png" alt="" class="logo" />
          <p class="white"></p
        ></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <p class="white">FinSave</p>
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
  data(){
    return{
      isAuth: null
    }
  },
  methods: {
    isLogin(){
      console.log(this.$store.state.token);
      this.isAuth = this.$store.state.token
    }
  },
  mounted(){
    this.isLogin()
  }
};
</script>

<style>
</style>
