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
                  <b-list-group-item
                    href="#"
                    class="flex-column align-items-start mb-2 shadow rounded ingresos"
                    v-for="(ingreso, index) in ingresosOBJ"
                    :key="index"
                  >
                    <div class="d-flex w-100 justify-content-between cursiva">
                      <h5 class="mb-1">{{ ingreso.date }}</h5>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">{{ ingreso.category }}</h6>
                    </div>
                    <div>
                      <img
                        src="@/assets/money/png/025-profits.png"
                        alt=""
                        class="icon float-left"
                      />
                      <p class="mb-1 float-left">{{ ingreso.description }}</p>

                      <p class="float-right">{{ ingreso.quantity }}</p>
                    </div>
                    <small class="text-muted">{{ ingreso.metodo }}</small>
                  </b-list-group-item>
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

  }
};
</script>

<style></style>
