<template>
<div class="degrade">
  <div class="container bg div-case-large box-shadow">
  <div class="row justify-content-center">
  <card class="custom-margin">
    <h4 slot="header" class="card-title text-center">Editar Perfil</h4>
    <form>
      <div class="row">
        <!--<div class="col-md-5">
          <base-input type="text"
                    label="Company"
                    :disabled="true"
                    placeholder="Light dashboard"
                    >
          </base-input>
        </div>-->
        <div class="col-md-6">
          <base-input type="email"
                    label="Email"
                    placeholder=""
                    v-model="userUpdate.email"
                    >

          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="password"
                    label="Password"
                    placeholder="min 8 caracteres"
                    >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="Nombre"
                    placeholder=""
                    v-model="userUpdate.name"
                    >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Apellidos"
                    placeholder=""
                    v-model="userUpdate.lastname"
                    >
          </base-input>
        </div>
      </div>

      <!--<div class="row">
        <div class="col-md-12">
          <base-input type="text"
                    label="Address"
                    placeholder="Home Address"
                    >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="City"
                    placeholder="City"
                    >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Country"
                    placeholder="Country"
                    >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="number"
                    label="Postal Code"
                    placeholder="ZIP Code"
                    >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>About Me</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Here can be your description"
                      >
              </textarea>
          </div>
        </div>
      </div>-->
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill" @click.prevent="updateUser()">
          Actualizar Perfil
        </button>
        <button type="submit" class="btn btn-danger btn-fill ml-3" @click.prevent="deleteAccount()">
          Borrar Usuario
        </button>
      </div>
    </form>
  </card>
  </div>
  <div class="text-center mt-2"><router-link to="/" class="text-warning">HomePage</router-link></div>
</div>
</div>
</template>

<script>
import Card from '@/components/Card'
import BaseInput from '@/inputs/BaseInput'
export default {
  name: 'ProfilePage',
  components: {
    Card,
    BaseInput
    },
  data(){
    return {
      userUpdate: ''
    }
  },
  methods:{
    async userLoad(){
      await this.$store.dispatch('userLoad')
      this.userUpdate = this.$store.state.user
      console.log(this.userUpdate);

    },
    async updateUser(){
      try{
      await this.axios.patch(`http://localhost:3000/auth/user/${this.userUpdate._id}`, this.userUpdate)

      }
      catch(error){
        console.log('No se ha podido actulizar el usuario', error);
      }
      this.logOut()

    },
    async logOut(){
       await this.$store.dispatch('logOut')

        this.$router.push("/")
    },
    async deleteAccount(){
      try{
      if(confirm('Seguro que deseas eliminar tu cuenta? Esta operación no se puede deshacer'))
      await this.axios.delete(`http://localhost:3000/auth/user/${this.userUpdate._id}`)
      else{
        return
      }
      }
      catch(error){
        console.log('La cuenta no se ha podido eliminar correctamente', error);
      }
      this.logOut()
    }

  },
  mounted() {
    this.userLoad()
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

.custom-margin{
  margin-top: 100px;
}
</style>
