<template>
  <div class="degrade">
    <div class="container bg box-shadow">
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
      <!-- grafica linea -->
      <div class="container pading">
        <div class="">
          <b-card title="Grafica" sub-title="Card subtitle">
            <b-card-text>
              <div>
                <div
                  id="grafic-line-ingresos"
                  style="width: auto; height: 250px"
                ></div>
              </div>
            </b-card-text>
          </b-card>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="mt-3 col-12">
            <b-card-group deck>
              <div class="col-lg-6">
                <b-card

                  header="Grafico redondo"
                  class="text-center"
                >
                  <b-card-text>
                    <h4 class="subtitle">
                      TOTAL:
                      <span class="has-text-primary">{{ total }} €</span>
                    </h4>
                  </b-card-text>
                  <!-- grafico redondo -->
                  <b-card-text>
                    <div id="grafic-cir-ingresos">
                      <!-- Plotly chart will be drawn inside this DIV -->
                    </div>
                  </b-card-text>
                </b-card>
              </div>
              <!-- derecha listar movimientos -->
              <div class="col-lg-6">
                <b-card header="Ingresos" class="text-center">
                  <div class="scrollbar scrollbar-morpheus-den scrollbarbig">
                    <div class="force-overflow">
                      <div class="justify-content-center mb-3">
                        <IngresosAdd :refreshMovesLista="refreshMovesLista" />
                      </div>
                      <div
                        class="mr-4"
                        v-for="(ingreso, index) in ingresosOBJ"
                        :key="index"
                      >
                        <b-list-group-item
                          class="flex-column align-items-start mb-2 shadow rounded ingresos"
                          v-if="ingreso.type !== 'gasto'"
                        >
                          <div
                            class="d-flex w-100 justify-content-between cursiva"
                          >
                            <h3 class="mb-1">
                              {{ ingreso.description | upper }}
                            </h3>
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
                                                <option>
                                                  Salud y Bienestar
                                                </option>
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
                                          @click.prevent="updateMoves(ingreso)"
                                        >
                                          Actualizar
                                        </button>

                                        <button
                                          type="button"
                                          class="btn btn-primary float-right"
                                          @click.prevent="hide()"
                                        >
                                          Salir
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-danger mr-4 float-right"
                                          @click.prevent="deleteMove(ingreso)"
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
                            <h6 class="mb-1">{{ ingreso.category }}</h6>
                          </div>
                          <div>
                            <img
                              :src="ingreso.image"
                              alt=""
                              class="icon float-left mr-2"
                            />
                            <p class="mb-1 float-left">
                              {{ transformDate(ingreso) }}
                            </p>

                            <p class="float-right">{{ ingreso.quantity }}€</p>
                          </div>
                          <small class="text-muted">{{ ingreso.type }}</small>
                        </b-list-group-item>
                      </div>
                    </div>
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
      yIngresos: [],
      updateOBG: {},
      deleteItem: {},
      itemToShow: -1,
    };
  },
  methods: {
    async moveLoad() {
      await this.$store.dispatch("moveLoad");
      this.$store.dispatch("sliderOff");
      this.ingresosOBJ = this.$store.state.moves.reverse();

      this.addData()
      this.graficCalculate()
      this.createLineGraficIngresos();
      this.createCircleGraficIngresos();

      console.log(this.ingresosOBJ);
      this.ingresosOBJ.map((ingreso) => {
        if (ingreso.type === "ingreso") {
          ingreso.image = require("@/assets/money/png/025-profits.png");
          console.log(ingreso.image);
        }
      });
    },
    filterType(move) {
      if (move.type !== "ingreso") {
        this.isActive = false;
        console.log(this.isActive);
      }
    },
    async updateMoves(move) {
      const updateOBG = {
        id: move._id,
        quantity: move.quantity,
        category: move.category,
        type: move.type,
        description: move.description,
      };
      try {
        await this.$store.dispatch("updateMove", updateOBG);
      } catch (error) {
        console.log("Error al enviar la actualizacion", error);
      }
      this.hide();
      await this.moveLoad();
    },
    async deleteMove(move) {
      const deleteItem = {
        id: move._id,
      };
      console.log(deleteItem.id);
      try {
        await this.$store.dispatch("deleteMove", deleteItem.id);
      } catch (error) {
        console.log("Error al enviar el id", error);
      }
      this.hide();
      await this.moveLoad();
    },
    // grafica lineal
    createLineGraficIngresos() {
      const trace1 = {
        x: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        y: this.yIngresos,
        type: "line",
        name: "Ingresos",
      };

      const layout = {
      title: '',
      uirevision:'true',
      xaxis: {autorange: true},
      yaxis: {autorange: true}
      };

      const data = [trace1];

      Plotly.newPlot("grafic-line-ingresos", data, layout);
    },

    // grafico redondo

    createCircleGraficIngresos() {
      const data = [
        {
          //TODO:
          //LOOP TODOS MOVES
          //SWITCH SUMANDO POR CATEGORIA
          type: "pie",
          values: [this.totalGastos, this.total],
          labels: ["Gastos", "Ingresos"],
          textinfo: "label+percent",
          textposition: "inside",
          automargin: false,
        },
      ];

      const layout = {
        height: 400,
        width: 400,
        margin: { t: 0, b: 0, l: 0, r: 0 },
        showlegend: true,
      };

      Plotly.newPlot("grafic-cir-ingresos", data, layout);
    },
    addData() {
        for (let month of this.$store.state.monthIngresos){
          this.yIngresos.push(month.total)
        }
        console.log(this.yIngresos);

    },
    graficCalculate() {
      this.$store.getters.graficCalculate
    // refescarlista
    },
    refreshMovesLista(){
      this.moveLoad();
    }
  },
  computed: {
    totalIngresos() {
      return this.ingresosOBJ = this.$store.state.moves;
    },
    total() {
      return this.$store.getters.totalIngresos;
    },
    totalGastos() {
      return this.$store.getters.totalGastos;
    }
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
