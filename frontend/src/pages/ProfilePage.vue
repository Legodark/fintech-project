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
      </div>
      <div class="row justify-content-center">
        <card class="custom-margin">
          <h4 slot="header" class="card-title text-center">{{ nameEdit }}</h4>
          <form>
            <div class="row justify-content-center">
              <div class="col-md-6">
                <base-input
                  type="email"
                  label="Email"
                  placeholder=""
                  v-model="userUpdate.email"
                  :disabled="true"
                >
                </base-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <base-input
                  type="text"
                  label="Nombre"
                  placeholder=""
                  v-model="userUpdate.name"
                  :disabled="esActive === false"
                >
                </base-input>
              </div>
              <div class="col-md-6">
                <base-input
                  type="text"
                  label="Apellidos"
                  placeholder=""
                  v-model="userUpdate.lastname"
                  :disabled="esActive === false"
                >
                </base-input>
              </div>
            </div>
            <div class="row" v-if="esActive">
              <div class="col-md-6">
                <base-input
                  type="password"
                  label="Password"
                  placeholder="min 8 caracteres"
                  v-model="passwordUpdate"
                  :disabled="esActive === false"
                >
                </base-input>
              </div>
              <div class="col-md-6 ">
                <base-input
                  type="password"
                  label="Repite la contraseña"
                  placeholder="min 8 caracteres"
                  v-model="repeatpassword"
                  :disabled="esActive === false"
                >
                </base-input>
                <p>{{ errorPassword }}</p>
                <button
                  type="submit"
                  class="btn btn-warning btn-fill ml-4"
                  @click.prevent="updatePassword()"
                >
                  Actualizar contraseña
                </button>
              </div>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="btn btn-info btn-fill"
                @click.prevent="isActive()"
                v-if="esActive === false"
              >
                Editar
              </button>
            </div>
            <div class="text-center mt-3" v-if="esActive">
              <button
                type="submit"
                class="btn btn-primary btn-fill ml-4"
                @click.prevent="updateUser()"
              >
                Actualizar Perfil
              </button>
              <button
                type="submit"
                class="btn btn-info btn-fill ml-2 "
                @click.prevent="isActive()"
                v-if="esActive === true"
              >
                Salir de Editar
              </button>
              <button
                type="submit"
                class="btn btn-danger btn-fill ml-3 ml-3"
                @click.prevent="deleteAccount()"
              >
                Borrar Usuario
              </button>
            </div>
          </form>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import Burger from "@/components/Menu/Burger.vue";
import Sidebar from "@/components/Menu/Sidebar.vue";
import MenuSlide from "@/mixins/MenuSlide";
import Card from "@/components/Card";
import BaseInput from "@/inputs/BaseInput";
export default {
  name: "ProfilePage",
  components: {
    Burger,
    Sidebar,
    MenuSlide,
    Card,
    BaseInput
  },
  data() {
    return {
      nameEdit: "Perfil",
      esActive: false,
      userUpdate: "",
      passwordUpdate: "",
      repeatpassword: "",
      errorPassword: ""
    };
  },
  methods: {
    async userLoad() {
      await this.$store.dispatch("userLoad");
      this.$store.dispatch("sliderOff");
      this.userUpdate = this.$store.state.user;
      console.log(this.userUpdate);
    },
    async updateUser() {
      await this.$store.dispatch('updateUser', this.userUpdate)
      this.userLoad()
      this.isActive();
    },
    async updatePassword() {
      if (this.passwordUpdate !== this.repeatpassword) {
        this.errorPassword = "Las contraseñas no coinciden";
        return;
      }
      try{
      await this.$store.dispatch('updatePassword', this.passwordUpdate)
      console.log(this.passwordUpdate);
      this.logOut()
      }
      catch(error){
        console.log('No se ha podido actualizar la contraseña', error);
      }
    },
    async logOut() {
      await this.$store.dispatch("logOut");

      this.$router.push("/");
    },
    async deleteAccount() {
      this.$store.dispatch('deleteAccount')
      this.isActive();
      this.logOut();
    },
    isActive() {
      if (this.esActive === true) {
        this.nameEdit = "Perfil";
        return (this.esActive = false);
      }
      if (this.esActive === false) {
        this.nameEdit = "Editar Perfil";
        return (this.esActive = true);
      }
    }
  },
  mounted() {
    this.userLoad();
  }
};
</script>

<style>
</style>
