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
                <b-card header="Gastos" class="text-center">
                  <div v-for="(gastos, index) in gastosOBG" :key="index">
                  <b-list-group-item
                    href="#"
                    class="flex-column align-items-start mb-2 shadow rounded gastos"
                    v-if="gastos.type !== 'ingreso'"
                  >
                    <div class="d-flex w-100 justify-content-between cursiva">
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
                                            <option disabled selected>{{
                                              gastos.type
                                            }}</option>
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
                                            <option disabled selected>{{
                                              gastos.category
                                            }}</option>
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
                                      @click.prevent="updateMoves(gastos), hide()">

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
                        :src="typeImage(gastos)"
                        alt=""
                        class="icon float-left mr-2"
                      />
                      <p class="mb-1 float-left">{{gastos.category}}</p>

                      <p class="float-right">-{{gastos.quantity}}€</p>
                    </div>
                    <small class="text-muted">{{gastos.type}}</small>
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
import Burger from '@/components/Menu/Burger.vue';
import Sidebar from '@/components/Menu/Sidebar.vue';
import GastosAdd from "@/components/movimientos/GastosAdd";
import MenuSlide from "@/mixins/MenuSlide";
import OpenModal from "@/mixins/OpenModal"
import TimeFormat from "@/mixins/TimeFormat"

export default {
  name: "Gastos",
  components: {
    Burger,
    Sidebar,
    MenuSlide,
    GastosAdd
  },
  mixins:[OpenModal, TimeFormat],
  data(){
    return{
      gastosOBG:[],
      itemToShow: -1
    }
  },
  methods: {
    async moveLoad() {
        await this.$store.dispatch("moveLoad");
        this.gastosOBG = this.$store.state.moves;
        console.log(this.gastosOBG);
    },
    filterType(gastos){
      if(gastos.type !== 'ingreso'){
        this.isActive = false
        console.log(this.isActive);
      }
    },
    typeImage(gastos){
      if(gastos.type === 'ingreso'){
        gastos.image = '@/assets/money/png/025-profits.png'
        console.log(gastos.image);
      }
    }
  },
  mounted(){
      this.moveLoad()
    }
}
</script>

<style>

</style>
