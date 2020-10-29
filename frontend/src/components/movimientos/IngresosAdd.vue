<template>
  <div>
    <li>
      <button class="btn btn-success" @click.prevent="openModalIngreso()">
        Agregar Ingreso
      </button>
    </li>
    <modal name="my-first-modal-ingreso">
      <div class="container-full register-form">
        <div class="form">
          <div class="note">
            <p>Agregar Ingreso</p>
          </div>

          <div class="form-content">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group text-center">
                  <label>Cantidad</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    value=""
                    v-model="registerIngreso.quantity"
                  />
                </div>
                <div class="form-group text-center">
                  <label>Tipo de Movimiento</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ingreso"
                    value=""
                    disabled="true"

                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group text-center">
                  <label>Categoria</label>
                  <select class="form-control" v-model="registerIngreso.category">
                    <option>Transferencia</option>
                    <option>Ingreso Cajero</option>
                  </select>
                </div>
                <div class="form-group text-center">
                  <label>Descripción</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    v-model="registerIngreso.description"
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btnSubmit"
              @click.prevent="registerMovesIngreso(), hide()"
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "IngresosAdd",
  data() {
    return {
      registerIngreso: {
        quantity: "",
        description: "",
        category: "",
        type: "ingreso"
      }
    };
  },
  methods: {
    openModalIngreso() {
      this.$modal.show("my-first-modal-ingreso");
    },
    hide() {
      this.$modal.hide("my-first-modal-ingreso");
    },
    async registerMovesIngreso() {
      try {
        let config = {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("setToken")}`
          }
        };
        await this.axios.post(
          "http://localhost:3000/moves/entry",
          this.registerIngreso,
          config
        );
      } catch (error) {
        console.log(error.response.data);
      }
    }
  },
  mount() {
    this.show();
  }
};
</script>

<style>
.note {
  text-align: center;
  height: 40px;
  background: -webkit-linear-gradient(left, #0072ff, #8811c5);
  color: #fff;
  font-weight: bold;
  line-height: 40px;
}
.form-content {
  padding: 20px;
  margin-bottom: 10px;
}
.form-control {
  border-radius: 1.5rem;
}
.btnSubmit {
  border: none;
  border-radius: 1.5rem;
  padding: 1%;
  width: 20%;
  cursor: pointer;
  background: #0062cc;
  color: #fff;
}
</style>
