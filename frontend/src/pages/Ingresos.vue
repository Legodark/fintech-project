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
                  <b-card-text
                    >Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.</b-card-text
                  >
                </b-card>
              </div>
              <!-- derecha listar movimientos -->
              <div class="col-6">
                <b-card header="Ingresos" class="text-center">
                  <div v-for="(ingreso, index) in ingresosOBJ" :key="index">
                  <b-list-group-item
                    href="#"
                    class="flex-column align-items-start mb-2 shadow rounded ingresos"
                    v-if="ingreso.type !== 'gasto'"
                  >
                    <div class="d-flex w-100 justify-content-between cursiva">
                      <h3 class="mb-1">{{ ingreso.description }}</h3>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">{{ transformDate(ingreso) }}</h6>
                    </div>
                    <div>
                      <img
                        :src="typeImage(ingreso)"
                        alt=""
                        class="icon float-left mr-2"
                      />
                      <p class="mb-1 float-left">{{ingreso.category}}</p>

                      <p class="float-right">{{ingreso.quantity}}€</p>
                    </div>
                    <small class="text-muted">{{ingreso.type}}</small>
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
  name: "Ingresos",
  components: {
    Burger,
    Sidebar,
    MenuSlide
  },
  data() {
    return {
      ingresosOBJ: []
    };
  },
  methods: {
    async moveLoad() {
        await this.$store.dispatch("moveLoad");
        this.ingresosOBJ = this.$store.state.moves;
        console.log(this.ingresosOBJ);
    },
    transformDate(move) {
      let transform = new Date(move.date)
      let shortTime = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      return new Intl.DateTimeFormat('en-US', shortTime).format(transform)
    },
    filterType(move){
      if(move.type !== 'ingreso'){
        this.isActive = false
        console.log(this.isActive);
      }
    },
    typeImage(move){
      if(move.type === 'ingreso'){
        move.image = '@/assets/money/png/025-profits.png'
        console.log(move.image);
      }
    }
  },
  mounted(){
      this.moveLoad()
    }
};
</script>

<style></style>
