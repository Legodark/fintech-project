<template>
  <div class="degrade">
    <div class="container bg box-shadow div-case-larges">
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
      <!-- grafica -->
      <div class="container pading">
        <div class="">
          <b-card title="Grafica" sub-title="Card subtitle">
            <b-card-text>
              <div>
                <div id="grafic-line" style="width: auto; height: 250px"></div>
              </div>
            </b-card-text>
          </b-card>
        </div>
      </div>

      <!-- cartas x3 -->

      <div class="container mt-3">
        <b-card-group columns>
          <b-card bg-variant="primary" text-variant="white">
            <blockquote class="card-blockquote">
              <h3>Ingresos</h3>
              <h5 class="subtitle">
                TOTAL:
                <span class="has-text-primary">{{ totalIngresos }} €</span>
              </h5>
              <footer>
                <small
                  >Someone famous in
                  <img
                    src="@/assets/money/png/025-profits.png"
                    alt=""
                    class="icon"
                /></small>
              </footer>
            </blockquote>
          </b-card>
          <b-card bg-variant="primary" text-variant="white">
            <blockquote class="card-blockquote">
              <h3>Gastos</h3>
              <h5 class="subtitle">
                TOTAL:
                <span class="has-text-primary">-{{ totalGastos }} €</span>
              </h5>
              <footer>
                <small
                  >Someone famous in
                  <img
                    src="@/assets/money/png/024-loss-1.png"
                    alt=""
                    class="icon"
                /></small>
              </footer>
            </blockquote>
          </b-card>
          <b-card bg-variant="primary" text-variant="white">
            <blockquote class="card-blockquote">
              <h3>Balance</h3>
              <h5> <span class="has-text-primary"> {{balance}}€ </span> </h5>
              <footer>
                <small
                  >
                  <cite title="Source Title">
                    la banca siempre gana</cite
                  ></small
                >
              </footer>
            </blockquote>
          </b-card>
        </b-card-group>
      </div>

      <!-- izquierda grafico redondo -->
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
                  <b-card-text>
                    <div id="grafic-cir">
                      <!-- Plotly chart will be drawn inside this DIV -->
                    </div>
                  </b-card-text>
                </b-card>
              </div>
              <!-- derecha listar movimientos -->
              <div class="col-6">
                <b-card header="Movimientos" class="text-center">
                  <div class="scrollbar scrollbar-morpheus-den">
                    <div class="force-overflow">
                      <div
                        class="mr-4"
                        v-for="(move, index) in allMove"
                        :key="index"
                      >
                        <b-list-group-item
                          class="flex-column align-items-start mb-2 shadow rounded"
                        >
                          <div
                            class="d-flex w-100 justify-content-center cursiva"
                          >
                            <h3 class="mb-1">{{ move.description | upper }}</h3>
                          </div>
                          <div class="d-flex w-100 justify-content-center">
                            <h6 class="mb-1">{{ move.category }}</h6>
                          </div>
                          <div>
                            <img
                              :src="move.image"
                              alt=""
                              class="icon float-left mr-2"
                            />
                            <p class="mb-1 float-left">
                              {{ transformDate(move) }}
                            </p>

                            <p class="float-right">{{ move.quantity }}€</p>
                          </div>
                          <small class="text-muted">{{ move.type }}</small>
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
import Burger from "@/components/Menu/Burger";
import Sidebar from "@/components/Menu/Sidebar";
import MenuSlide from "@/mixins/MenuSlide";
import TimeFormat from "@/mixins/TimeFormat";
import { setTimeout } from "timers";
export default {
  name: "DashBoard",
  components: {
    Burger,
    Sidebar,
    MenuSlide,
  },
  mixins: [TimeFormat],
  data() {
    return {
      allMove: [],
    };
  },
  methods: {
    async moveLoad() {
      await this.$store.dispatch("moveLoad");
      this.$store.dispatch("sliderOff");
      this.allMove = this.$store.state.moves.reverse();
      console.log(this.allMove);
      this.allMove.map((move) => {
        if (move.type === "gasto") {

          move.image = require("@/assets/money/png/024-loss-1.png");
        } else {
          move.image = require("@/assets/money/png/025-profits.png");
        }
      });
    },
  },
  computed: {
    totalGastos() {
      return this.$store.getters.totalGastos;
    },
    totalIngresos() {
      return this.$store.getters.totalIngresos;
    },
    balance(){
      const balance = this.$store.getters.totalIngresos - this.$store.getters.totalGastos
      return balance.toFixed(2)
    }
  },
  mounted() {
    this.moveLoad();
  },


};

// graficas
setTimeout(() => {
  var trace1 = {
    x: [1, 10, 20, 30],
    y: [1200, 1250, 1300, 1300],
    // y: this.moveQuantityIngresos,
    type: "scatter",
    name: "ingresos",
  };

  var trace2 = {
    x: [1, 10, 20, 30],
    y: [800, 950, 1100, 980],
    type: "scatter",
    name: "gastos",
  };

  var data = [trace1, trace2];

  Plotly.newPlot("grafic-line", data);
}, 100);

setTimeout(() => {
var data = [{
  type: "pie",
  values: [2, 1, 3, 5],
  labels: ["Ocio", "Belleza y Salud", "Alquiler y Coche", "Ingresos"],
  textinfo: "label+percent",
  textposition: "outside",
  automargin: true
}]

var layout = {
  height: 400,
  width: 400,
  margin: {"t": 0, "b": 0, "l": 0, "r": 0},
  showlegend: false
  }

Plotly.newPlot('grafic-cir', data, layout)

}, 200);
</script>
<<<<<<< HEAD
<style></style>
=======



<style>
.degradade{
  height: 2000px;
}
</style>
>>>>>>> 77d0233ec35415b3639368415e1a7cd85e98a970
