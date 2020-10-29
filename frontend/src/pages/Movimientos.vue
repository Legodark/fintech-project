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
          <MenuSlide/>
        </Sidebar>
      </div>

      <!-- body dos paneles de moviemiento economico -->

      <div class="container">
        <div class="row">
          <div class="mt-3 col-12">
            <b-card-group deck>
              <!-- paneles de gastos -->
              <div class="col-6">
                <b-card header="Gastos" class="text-center">
                  <div v-for="(move, index) in allMoves" :key="index">
                  <b-list-group-item
                    href="#"
                    class="flex-column align-items-start mb-2 shadow rounded gastos"
                    v-if="move.type !== 'ingreso'"
                  >
                    <div class="d-flex w-100 justify-content-between cursiva">
                      <h3 class="mb-1">{{move.description}}</h3>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">{{ transformDate(move) }}</h6>
                    </div>
                    <div>
                      <img
                        src="@/assets/money/png/024-loss-1.png"
                        alt=""
                        class="icon float-left mr-2"
                      />
                      <p class="mb-1 float-left">{{move.category}}</p>

                      <p class="float-right">{{move.quantity}}€</p>
                    </div>
                    <small class="text-muted">{{move.type}}</small>
                  </b-list-group-item>
                  </div>
                </b-card>
              </div>

              <!-- derecha listar Ingressos -->
              <div class="col-6">
                <b-card header="Ingresos" class="text-center">
                  <div v-for="(move, index) in allMoves" :key="index">
                  <b-list-group-item
                    href="#"
                    class="flex-column align-items-start mb-2 shadow rounded ingresos"
                    v-if="move.type !== 'gasto'"
                    >
                    <div class="d-flex w-100 justify-content-between cursiva">
                      <h3 class="mb-1">{{move.description}}</h3>
                      <small class="text-muted"></small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">{{ transformDate(move) }}</h6>
                    </div>
                    <div>
                      <img
                        :src="typeImage(move)"
                        alt=""
                        class="icon float-left mr-2"
                      />
                      <p class="mb-1 float-left">{{move.category}}</p>

                      <p class="float-right">{{move.quantity}}€</p>
                    </div>
                    <small class="text-muted">{{move.type}}</small>
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
  name: "Movimientos",
  components: {
    Burger,
    Sidebar,
    MenuSlide
  },
  data(){
    return{
      allMoves: [],
      hola: 'hola'
    }
  },
  methods:{
    async moveLoad() {
        await this.$store.dispatch("moveLoad");
        this.allMoves = this.$store.state.moves;
        console.log(this.allMoves);
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

<style>
</style>
