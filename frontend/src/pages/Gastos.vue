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

      <div class="container pading">
        <div class="">
          <b-card title="Grafica" sub-title="Card subtitle">
            <b-card-text>
              <div>
                <div
                  id="grafic-line-gastos"
                  style="width: auto; height: 250px"
                ></div>
              </div>
            </b-card-text>
          </b-card>
        </div>
      </div>

      <!-- cartas de gastas -->
      <div class="container">
        <div class="row">
          <div class="mt-3 col-12">
            <b-card-group deck>
              <div class="col-lg-6">
                <b-card
                  bg-variant="light"
                  header="Grafico redondo"
                  class="text-center"
                >
                  <b-card-text >
                    <h4 class="subtitle">
                      TOTAL:
                      <span class="has-text-primary">-{{ total }} €</span>
                    </h4>
                  </b-card-text>
<!-- grafico redondo -->
                  <b-card-text>
                    <div id="grafic-cir-gastos">
                      <!-- Plotly chart will be drawn inside this DIV -->
                    </div>
                  </b-card-text>
                </b-card>
              </div>
              <!-- derecha listar movimientos -->
              <div class="col-lg-6">
                <b-card header="Gastos" class="text-center">
                  <div class="scrollbar scrollbar-morpheus-den">
                    <div class="force-overflow">
                      <div class="justify-content-center mb-3">
                        <GastosAdd />
                      </div>
                      <div class="mr-4" v-for="(gastos, index) in gastosOBG" :key="index">
                        <b-list-group-item
                          href="#"
                          class="flex-column align-items-start mb-2 shadow rounded gastos"
                          v-if="gastos.type !== 'ingreso'"
                        >
                          <div
                            class="d-flex w-100 justify-content-between cursiva"
                          >
                            <h3 class="mb-1">{{ gastos.description }}</h3>
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
                                                :placeholder="gastos.quantity"
                                                value=""
                                                v-model="gastos.quantity"
                                              />
                                            </div>
                                            <div class="form-group text-center">
                                              <label>Tipo de Movimiento</label>
                                              <select
                                                class="form-control"
                                                v-model="gastos.type"
                                              >
                                                <option disabled selected>
                                                  {{ gastos.type }}
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
                                                v-model="gastos.category"
                                              >
                                                <option disabled selected>
                                                  {{ gastos.category }}
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
                                                v-model="gastos.description"
                                              ></textarea>
                                            </div>
                                          </div>
                                        </div>
                                        <button
                                          type="button"
                                          class="btn btn-warning float-left"
                                          @click.prevent="updateMoves(gastos)"
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
                                          @click.prevent="deleteMove(gastos)"
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
                            <h6 class="mb-1">{{ transformDate(gastos) }}</h6>
                          </div>
                          <div>
                            <img
                              :src="gastos.image"
                              alt=""
                              class="icon float-left mr-2"
                            />
                            <p class="mb-1 float-left">{{ gastos.category }}</p>

                            <p class="float-right">-{{ gastos.quantity }}€</p>
                          </div>
                          <small class="text-muted">{{ gastos.type }}</small>
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
import GastosAdd from "@/components/movimientos/GastosAdd";
import MenuSlide from "@/mixins/MenuSlide";
import OpenModal from "@/mixins/OpenModal";
import TimeFormat from "@/mixins/TimeFormat";
export default {
  name: "Gastos",
  components: {
    Burger,
    Sidebar,
    MenuSlide,
    GastosAdd,
  },
  mixins: [OpenModal, TimeFormat],
  data() {
    return {
      gastosOBG: [],
      itemToShow: -1,
    };
  },
  methods: {
    async moveLoad() {
      await this.$store.dispatch("moveLoad");
      this.$store.dispatch("sliderOff");
      this.gastosOBG = this.$store.state.moves.reverse();
      this.gastosOBG.map((gasto) => {
        if (gasto.type === "gasto") {
          gasto.image = require("@/assets/money/png/024-loss-1.png");
        }
      });
      console.log(this.gastosOBG);
    },
    filterType(gastos) {
      if (gastos.type !== "ingreso") {
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
    createLineGraficGastos() {
      var trace1 = {
        x: [1, 10, 20, 30],
        y: [800, 950, 1100, 980],
        type: "scatter",
        name: "gastos",
      };

      var data = [trace1];

      Plotly.newPlot("grafic-line-gastos", data);
    },
    // grafico redondo

    createCircleGraficGastos() {
      var data = [
        {
          //TODO:
          //LOOP TODOS MOVES
          //SWITCH SUMANDO POR CATEGORIA
          type: "pie",
          values: [2, 1, 3, 5],
          labels: ["Ocio", "Belleza y Salud", "Alquiler y Coche", "Ingresos"],
          textinfo: "label+percent",
          textposition: "outside",
          automargin: true,
        },
      ];

      var layout = {
        height: 400,
        width: 400,
        margin: { t: 0, b: 0, l: 0, r: 0 },
        showlegend: false,
      };

      Plotly.newPlot("grafic-cir-gastos", data, layout);
    },
  },

  computed: {
    total() {
      return this.$store.getters.totalGastos;
    },
  },
  mounted() {
    this.moveLoad();
    this.createLineGraficGastos();
    this.createCircleGraficGastos();
  },
};
</script>

<style></style>
