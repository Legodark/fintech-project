<template>
  <div>
    <li>
      <button class="btn btn-danger" @click.prevent="openModalGasto()">
        Agregar Gasto
      </button>
    </li>
    <modal name="my-first-modal-gasto">
      <div class="container-full register-form">
        <div class="form">
          <div class="note">
            <p>Agregar Gasto</p>
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
                  />
                </div>
                <div class="form-group text-center">
                  <label>Tipo de Movimiento</label>
                  <select class="form-control">
                    <option>Gasto</option>
                    <option>Ingreso</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group text-center">
                  <label>Categoria</label>
                  <select class="form-control">
                    <option>Consumible</option>
                    <option>Salud y Bienestar</option>
                    <option>Ocio</option>
                    <option>Electrónica</option>
                    <option>Viajes</option>
                    <option>Mantenimiento</option>
                  </select>
                </div>
                <div class="form-group text-center">
                  <label>Descripción</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
              </div>
            </div>
            <button type="button" class="btnSubmit">Añadir</button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "GastosAdd",
  methods: {
    openModalGasto() {
      this.$modal.show("my-first-modal-gasto")
    },
    hide() {
      this.$modal.hide("my-first-modal-gasto");
    }
  },
  mount() {
    this.show();
  }
};
</script>

<style>
.custom-boton {
  border: none
}
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
