<template>
  <div class="degrade">
    <div class="container bg div-case-large box-shadow">
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
      <div class="text-center mt-2">
        <router-link to="/" class="text-warning">HomePage</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import BaseInput from "@/inputs/BaseInput";
export default {
  name: "ProfilePage",
  components: {
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
      this.userUpdate = this.$store.state.user;
      console.log(this.userUpdate);
    },
    async updateUser() {
      await this.$store.dispatch('updateUser', this.userUpdate)
      this.isActive();
      this.logOut();
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

.custom-margin {
  margin-top: 100px;
}
</style>
