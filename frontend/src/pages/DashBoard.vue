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
      <!-- grafica -->
      <div class="container pading">
        <div class="">
          <b-card title="Grafica" sub-title="Card subtitle">
            <b-card-text>
              Aqui va una <em>grafica</em> Grafica to guapa
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>
            <b-button variant="outline-primary">
              <b-icon icon="tools"></b-icon> Settings
            </b-button>
            <b-button variant="outline-primary">
              <b-icon icon="person-fill"></b-icon> Tiempo
            </b-button>
            <b-button variant="outline-primary">
              <b-icon icon="inbox-fill"></b-icon> Categorias
            </b-button>
          </b-card>
        </div>
      </div>

      <!-- cartas x3 -->

      <div class="container mt-3">
        <b-card-group columns>
          <b-card bg-variant="primary" text-variant="white">
            <blockquote class="card-blockquote">
              <p>-{{ totalGastos }}€</p>
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
              <p>Aqui van los gastos</p>
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
              <p>Aqui va el balance</p>
              <footer>
                <small
                  >Saldo a nuestro favor
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
              <div class="col-6">
                <b-card
                  bg-variant="light"
                  header="Grafico redondo"
                  class="text-center"
                >
                  <b-card-text
                    >Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.</b-card-text
                  >
                </b-card>
              </div>
              <!-- derecha listar movimientos -->
              <div class="col-6">
                <b-card header="Movimientos" class="text-center">
                  <div v-for="(move, index) in allMove" :key="index">
                    <b-list-group-item
                      class="flex-column align-items-start mb-2 shadow rounded">
                      <div class="d-flex w-100 justify-content-center cursiva">
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
                        <p class="mb-1 float-left">{{ transformDate(move) }}</p>

                        <p class="float-right">{{ move.quantity }}€</p>
                      </div>
                      <small class="text-muted">{{ move.type }}</small>
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
import Burger from "@/components/Menu/Burger";
import Sidebar from "@/components/Menu/Sidebar";
import MenuSlide from "@/mixins/MenuSlide";
import TimeFormat from "@/mixins/TimeFormat"
export default {
  name: "DashBoard",
  components: {
    Burger,
    Sidebar,
    MenuSlide
  },
  mixins: [TimeFormat],
  data() {
    return {
      allMove: []
    };
  },
  methods: {
    async moveLoad() {
      await this.$store.dispatch("moveLoad")
      this.allMove = this.$store.state.moves;
      console.log(allMove);
    }
  },
  computed: {
    totalGastos() {
      return this.$store.getters.totalGastos;
    }
  },
  mounted() {
    this.moveLoad()
  }
};
</script>

<style></style>
