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
                  <div class="justify-content-center mb-3"><GastosAdd/></div>
                  <div v-for="(move, index) in allMoves" :key="index">
                  <b-list-group-item
                    href="#"
                    class="flex-column align-items-start mb-2 shadow rounded gastos"
                    v-if="move.type !== 'ingreso'"
                  >
                    <div class="d-flex w-100 justify-content-between cursiva">
                        <h3 class="mb-1">{{ move.description | upper }}</h3>
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
                                            :placeholder="move.quantity"
                                            value=""
                                            v-model="move.quantity"
                                          />
                                        </div>
                                        <div class="form-group text-center">
                                          <label>Tipo de Movimiento</label>
                                          <select
                                            class="form-control"
                                            v-model="move.type"
                                          >
                                            <option disabled selected>{{
                                              move.type
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
                                            v-model="move.category"
                                          >
                                            <option disabled selected>{{
                                              move.category | upper
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
                                            v-model="move.description"
                                          ></textarea>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      class="btn btn-warning float-left"
                                      @click.prevent="updateMoves(move), hide()">

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
                                      @click.prevent="deleteMove(move)"
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
                      <h6 class="mb-1">{{ transformDate(move) }}</h6>
                    </div>
                    <div>
                      <img
                        :src="move.image"
                        alt=""
                        class="icon float-left mr-2"
                      />
                      <p class="mb-1 float-left">{{move.category}}</p>

                      <p class="float-right">-{{move.quantity}}€</p>
                    </div>
                    <small class="text-muted">{{move.type}}</small>
                  </b-list-group-item>
                  </div>
                </b-card>
              </div>

              <!-- derecha listar Ingressos -->
              <div class="col-6">
                <b-card header="Ingresos" class="text-center">
                  <div class="justify-content-center mb-3"><IngresosAdd/></div>
                  <div v-for="(move, index) in allMoves" :key="index">
                  <b-list-group-item
                    href="#"
                    class="flex-column align-items-start mb-2 shadow rounded ingresos"
                    v-if="move.type !== 'gasto'"
                    >
                    <div class="d-flex w-100 justify-content-between cursiva">
                        <h3 class="mb-1">{{ move.description | upper }}</h3>
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
                                            :placeholder="move.quantity"
                                            value=""
                                            v-model="move.quantity"
                                          />
                                        </div>
                                        <div class="form-group text-center">
                                          <label>Tipo de Movimiento</label>
                                          <select
                                            class="form-control"
                                            v-model="move.type"
                                          >
                                            <option disabled selected>{{
                                              move.type
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
                                            v-model="move.category"
                                          >
                                            <option disabled selected>{{
                                              move.category
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
                                            v-model="move.description"
                                          ></textarea>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      class="btn btn-warning float-left"
                                      @click.prevent="updateMoves(move), hide(), moveLoad()">

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
                                      @click.prevent="deleteMove(move), hide(), moveLoad()"
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
                      <h6 class="mb-1">{{ transformDate(move) }}</h6>
                    </div>
                    <div>
                      <img
                        :src="move.image"
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
import GastosAdd from "@/components/movimientos/GastosAdd";
import IngresosAdd from "@/components/movimientos/IngresosAdd";
import MenuSlide from "@/mixins/MenuSlide";
import OpenModal from "@/mixins/OpenModal"
import TimeFormat from "@/mixins/TimeFormat"

export default {
  name: "Movimientos",
  components: {
    Burger,
    Sidebar,
    MenuSlide,
    GastosAdd,
    IngresosAdd
  },
  mixins: [OpenModal, TimeFormat],
  data(){
    return{
      allMoves: [],
      hola: 'hola',
      itemToShow: -1
    }
  },
  methods:{
    async moveLoad() {
        await this.$store.dispatch("moveLoad");
        this.$store.dispatch("navigateBurguer");
        this.allMoves = this.$store.state.moves;
        console.log(this.allMoves);
        this.allMoves.map((move) => {
          if (move.type === "gasto") {
            move.image = require("@/assets/money/png/024-loss-1.png");
          }
          else{
            move.image = require("@/assets/money/png/025-profits.png")
          }
      })
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
    },
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
    totalGastos() {
      return this.$store.getters.totalGastos;
    },
    totalIngresos() {
      return this.$store.getters.totalIngresos;
  }},
  mounted(){
      this.moveLoad()
  }
};
</script>

<style>
</style>
