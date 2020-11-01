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
                      <span class="has-text-primary">-{{ total }} €</span>
                    </h4>
                          <!-- grafica -->
                    <!-- <div>
                      <b-card-text>
                        <div id="grafic-cir "> -->

                          <!-- Plotly chart will be drawn inside this DIV -->
                        <!-- </div>
                      </b-card-text>
                    </div> -->
                  </b-card-text>
                </b-card>
              </div>
              <!-- derecha listar movimientos -->
              <div class="col-6">
                <b-card header="Gastos" class="text-center">
                  <div class="justify-content-center mb-3"><GastosAdd /></div>

                  <div class="scrollbar scrollbar-morpheus-den scrollbarbig">
                    <div class="force-overflow"></div>

                    <div v-for="(gastos, index) in gastosOBG" :key="index">
                      <b-list-group-item
                        href="#"
                        class="flex-column align-items-start mb-2 shadow rounded gastos"
                        v-if="gastos.type !== 'ingreso'"
                      >
                        <div
                          class="d-flex w-100 justify-content-between cursiva"
                        >
                          <h3 class="mb-1">{{ gastos.description }}</h3>
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
                                              v-model="gastos.description"
                                            ></textarea>
                                          </div>
                                        </div>
                                      </div>
                                      <button
                                        type="button"
                                        class="btn btn-warning float-left"
                                        @click.prevent="
                                          updateMoves(gastos), hide()
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
      //this.$store.dispatch("navigateBurguer"); ¿POR QUÉ ESTÁ AQUI ESTO?
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
    typeImage(gastos) {},
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
    },
  },
  computed: {
    total() {
      return this.$store.getters.totalGastos;
    },
  },
  mounted() {
    this.moveLoad();
  },
};

// setTimeout(() => {
//   var data = [
//     {
//       type: "gastos",
//       values: [2, 1, 3, 5],
//       labels: ["Ocio", "Belleza y Salud", "Coche", "Necesidades"],
//       textinfo: "label+percent",
//       textposition: "outside",
//       automargin: true,
//     },
//   ];

//   var layout = {
//     height: 400,
//     width: 400,
//     margin: { t: 0, b: 0, l: 0, r: 0 },
//     showlegend: false,
//   };

//   Plotly.newPlot("grafic-cir", data, layout);
// }, 400);
</script>

<style>

</style>
