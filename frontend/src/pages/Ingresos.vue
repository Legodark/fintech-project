<template>
  <div class="degrade">
    <div class="container bg box-shadow div-case-large">
      <!-- slidenav panel de navejacion superior -->
      <div>
        <nav class="main-nav">
          <img src="@/assets/money/png/006-coins.png" alt="" class="logo" />
          <Burger class="mt-2"></Burger>
        </nav>

        <Sidebar>
          <MenuSlide />
        </Sidebar>
      </div>

      <!-- body -->

      <div class="container">
        <div class="row">
          <div class="mt-3 col-12">
            <b-card-group deck>
              <div class="col-6">
                <b-card
                  bg-variant="light"
                  header="Grafico redondo"
                  class="text-center"
                >
                  <b-card-text>
                    <h4 class="subtitle">
                      TOTAL:
                      <span class="has-text-primary">{{ totalIngresos }} €</span>
                    </h4>
                  </b-card-text>
                </b-card>
              </div>
              <!-- derecha listar movimientos -->
              <div class="col-6">
                <b-card header="Ingresos" class="text-center">
                  <div class="justify-content-center mb-3"><IngresosAdd/></div>
                  <div v-for="(ingreso, index) in ingresosOBJ" :key="index">
                    <b-list-group-item
                      class="flex-column align-items-start mb-2 shadow rounded ingresos"
                      v-if="ingreso.type !== 'gasto'"
                    >
                      <div class="d-flex w-100 justify-content-between cursiva">
                        <h3 class="mb-1">{{ ingreso.description }}</h3>
                        <small class="text-muted mt-2 mr-5">3 days ago</small>
                        <small class="text-muted"
                          ><div
                            class="float-right"
                            @click="(itemToShow = index), openModal()"
                          >
                            <i class="fas fa-edit"></i></div
                        ></small>
                        <div v-show="itemToShow == index">
                          <div>
                            <modal name="my-first-modal-move">
                              <div class="container-full register-form">
                                <div class="form">
                                  <div class="note">
                                    <p>Editar Movimiento</p>
                                  </div>

                                  <div class="form-content">
                                    <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group text-center">
                                          <label>Cantidad</label>
                                          <input
                                            type="text"
                                            class="form-control"
                                            :placeholder="ingreso.quantity"
                                            value=""
                                            v-model="ingreso.quantity"
                                          />
                                        </div>
                                        <div class="form-group text-center">
                                          <label>Tipo de Movimiento</label>
                                          <select
                                            class="form-control"
                                            v-model="ingreso.type"
                                          >
                                            <option disabled selected>
                                              {{ ingreso.type }}
                                            </option>
                                            <option>gasto</option>
                                            <option>ingreso</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="form-group text-center">
                                          <label>Categoria</label>
                                          <select
                                            class="form-control"
                                            v-model="ingreso.category"
                                          >
                                            <option disabled selected>
                                              {{ ingreso.category }}
                                            </option>
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
                                          <textarea
                                            class="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="2"
                                            v-model="ingreso.description"
                                          ></textarea>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      class="btn btn-warning float-left"
                                      @click.prevent="
                                        updateMoves(ingreso), hide()
                                      "
                                    >
                                      Actualizar
                                    </button>

                                    <button
                                      type="button"
                                      class="btn btn-primary float-right"
                                      @click.prevent="hide(), moveLoad()"
                                    >
                                      Salir
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-danger mr-4 float-right"
                                      @click.prevent="
                                        deleteMove(ingreso), hide()
                                      "
                                    >
                                      Borrar Movimiento
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </modal>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1">{{ transformDate(ingreso) }}</h6>
                      </div>
                      <div>
                        <img
                          :src="ingreso.image"
                          alt=""
                          class="icon float-left mr-2"
                        />
                        <p class="mb-1 float-left">{{ ingreso.category }}</p>

                        <p class="float-right">{{ ingreso.quantity }}€</p>
                      </div>
                      <small class="text-muted">{{ ingreso.type }}</small>
                    </b-list-group-item>
                  </div>
                </b-card>
              </div>
            </b-card-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Burger from "@/components/Menu/Burger.vue";
import Sidebar from "@/components/Menu/Sidebar.vue";
import MenuSlide from "@/mixins/MenuSlide";
import IngresosAdd from "@/components/movimientos/IngresosAdd";
import OpenModal from "@/mixins/OpenModal";
import TimeFormat from "@/mixins/TimeFormat";

export default {
  name: "Ingresos",
  mixins: [OpenModal, TimeFormat],
  components: {
    Burger,
    Sidebar,
    MenuSlide,
    IngresosAdd,
  },
  data() {
    return {
      ingresosOBJ: [],
      updateOBG: {},
      deleteItem: {},
      itemToShow: -1,
    };
  },
  methods: {
    async moveLoad() {
      await this.$store.dispatch("moveLoad");
      this.ingresosOBJ = this.$store.state.moves;
      console.log(this.ingresosOBJ);
      this.ingresosOBJ.map((ingreso) => {
        if (ingreso.type === "ingreso") {
          ingreso.image = require("@/assets/money/png/025-profits.png");
          console.log(ingreso.image);
        }
      })
    },
    filterType(move) {
      if (move.type !== "ingreso") {
        this.isActive = false;
        console.log(this.isActive);
      }
    },
    /*typeImage(move) {
      if (move.type === "ingreso") {
        move.image = require("@/assets/money/png/025-profits.png");
        console.log(move.image);
      }
    },*/
    async updateMoves(move) {
      const updateOBG = {
        id: move._id,
        quantity: move.quantity,
        category: move.category,
        type: move.type,
        description: move.description,
      };
      try{
      await this.$store.dispatch('updateMove', updateOBG)
      }
      catch(error){
            console.log("Error al enviar la actualizacion", error);
      }
    },
    async deleteMove(move) {

        const deleteItem = {
          id: move._id,
        };
        console.log(deleteItem.id);
        try{
        await this.$store.dispatch("deleteMove", deleteItem.id)
        }
        catch(error){
            console.log("Error al enviar el id", error);
        }

    },
  },

  computed: {
    totalIngresos() {
      this.ingresosOBJ = this.$store.state.moves;
      },
    total() {

      return this.$store.getters.totalIngresos;
      // this.ingresosOBJ = this.$store.state.moves;

      // if (this.ingresosOBJ.length > 0) {
      //   const tottalsum = this.ingresosOBJ.map((ingresos) => {
      //     return ingresos.type === "ingreso" ? ingresos.quantity : 0;
      //   });
      //   return tottalsum.reduce((acum, quantity) => acum + quantity).toFixed(2);
      // }else {
      //   return 0;
      // }
    },
  },
  mounted() {
    this.moveLoad();
  },
};
</script>

<style>
.custom-button-edit {
  background-color: transparent;
  border: none;
}
</style>
