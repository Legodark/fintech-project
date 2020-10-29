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
          <ul class="sidebar-panel-nav">
            <li><router-link to="/moves">Movimientos</router-link></li>
            <li><router-link to="/entrys">Ingresos</router-link></li>
            <li><router-link to="/spend">Gastos</router-link></li>
          </ul>
        </Sidebar>
      </div>

      <!-- icono -->
      <!-- <div class="float-right">
        <img src="@/assets/bola.png" alt="" class="icono" />
      </div> -->

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
              <p>Aqui van los ingresos</p>
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
                  <b-list-group-item
                    href="#"
                    class="flex-column align-items-start mb-2 shadow rounded gastos"
                  >
                    <div class="d-flex w-100 justify-content-between cursiva">
                      <h5 class="mb-1">24 de Octubre de 2020</h5>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">Tarjeta crédito *6845</h6>
                    </div>
                    <div>
                      <img
                        src="@/assets/money/png/024-loss-1.png"
                        alt=""
                        class="icon float-left"
                      />
                      <p class="mb-1 float-left">Pizza delicious</p>

                      <p class="float-right">70€</p>
                    </div>
                    <small class="text-muted">Restaurante</small>
                  </b-list-group-item>

                  <b-list-group-item
                    href="#"
                    class="flex-column align-items-start mb-2 shadow rounded ingresos"
                  >
                    <div class="d-flex w-100 justify-content-between cursiva">
                      <h5 class="mb-1">5 de Octubre de 2020</h5>
                      <small class="text-muted">22 days ago</small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">Transferencia</h6>
                    </div>
                    <div>
                      <img
                        src="@/assets/money/png/025-profits.png"
                        alt=""
                        class="icon float-left"
                      />
                      <p class="mb-1 float-left">Traspaso desde cuenta</p>

                      <p class="float-right">220€</p>
                    </div>
                    <small class="text-muted">Transferencia realizada</small>
                  </b-list-group-item>

                  <!-- <b-list-group-item
                    href="#"
                    class="flex-column align-items-start"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">List group item heading</h5>
                      <small class="text-muted">3 days ago</small>
                    </div>

                    <p class="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>

                    <small class="text-muted"
                      >Donec id elit non mi porta.</small
                    >
                  </b-list-group-item> -->
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
export default {
  name: "DashBoard",
  components: {
    Burger,
    Sidebar,
  },
};
</script>

<style>
</style>
