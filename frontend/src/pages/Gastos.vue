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
                  <b-card-text v-model="selectedCategory">
                    <h4 class="subtitle">
                      TOTAL: <span class="has-text-primary">-{{ total }} €</span>
                    </h4>
                  </b-card-text>

                </b-card>
              </div>
              <!-- derecha listar movimientos -->
              <div class="col-6">
                <b-card header="Gastos" class="text-center">
                  <div v-for="(gastos, index) in gastosOBG" :key="index">
                    <b-list-group-item
                      href="#"
                      class="flex-column align-items-start mb-2 shadow rounded gastos"
                      v-if="gastos.type !== 'ingreso'"
                    >
                      <div class="d-flex w-100 justify-content-between cursiva">
                        <h3 class="mb-1">{{ gastos.description }}</h3>
                        <small class="text-muted">3 days ago</small>
                      </div>
                      <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1">{{ transformDate(gastos) }}</h6>
                      </div>
                      <div>
                        <img
                          :src="typeImage(gastos)"
                          alt=""
                          class="icon float-left mr-2"
                        />
                        <p class="mb-1 float-left">{{ gastos.category }}</p>

                        <p class="float-right">-{{ gastos.quantity }}€</p>
                      </div>
                      <small class="text-muted">{{ gastos.type }}</small>
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

export default {
  name: "Gastos",
  components: {
    Burger,
    Sidebar,
    MenuSlide,
  },
  data() {
    return {
      gastosOBG: [],
    };
  },
  methods: {
    async moveLoad() {
      await this.$store.dispatch("moveLoad");
      this.gastosOBG = this.$store.state.moves;

      this.gastosOBG.map((gasto) => {
        if (gasto.type === "gasto") {
          gasto.image = require("@/assets/money/png/024-loss-1.png");
        }
      });
      console.log(this.gastosOBG);
    },

    transformDate(gastos) {
      let transform = new Date(gastos.date);
      let shortTime = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      return new Intl.DateTimeFormat("en-US", shortTime).format(transform);
    },
    filterType(gastos) {
      if (gastos.type !== "ingreso") {
        this.isActive = false;
        console.log(this.isActive);
      }
    },
    typeImage(gastos) {},
  },
  computed: {
    total() {
      this.gastosOBG = this.$store.state.moves;

      if (this.gastosOBG.length > 0) {
        const tottalsum = this.gastosOBG.map((gastos) => {
          return gastos.type === "gasto" ? gastos.quantity : 0;
        });
        return tottalsum.reduce((acum, quantity) => acum + quantity).toFixed(2);
      } else {
        return 0;
      }
    },
  },

  mounted() {
    this.moveLoad();
  },
};
</script>

<style>
</style>
