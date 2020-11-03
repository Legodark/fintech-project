<template>
  <div class="degrade">
    <div toggleable="xl" class="container-float bg box-shadow">
      <!-- menu nav -->
      <b-navbar toggleable="xl" class="trans barnav">
        <b-navbar-brand href="#">
          <img
            src="@/assets/money/png/006-coins.png"
            alt=""
            class="logo logo-size"/>
          <p class="white"></p
        ></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <p class="white"></p>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-navbar-brand v-if="isAuth === null">
                <router-link to="/register">
                  <p class="white">Register</p>
                </router-link>
              </b-navbar-brand>
            </b-nav-form>

            <b-navbar-brand v-if="isAuth === null"
              ><router-link to="/login"
                ><p class="white">Login</p></router-link
              ></b-navbar-brand
            >

            <!-- hacer dinamico -->
            <b-navbar-brand v-if="isAuth !== null"
              ><router-link to="/dashboard"
                ><p class="white">Dashboard</p></router-link
              ></b-navbar-brand
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <div class="row justify-content-center">
        <div class="col-12">
          <div class="header-description pb-4 pt-3">
            <div class="">
              <h1 class="text-center header-title-color">FinSave</h1>
              <p class="text-black pr-5 pl-5 font-weight-bold text-center">
                Ofrecemos gestionar sus gastos e ingresos, de forma fácil y
                sencilla. Con gráficos y estadísticas para exhibiciones visuales
                adicionales de sus ganancias, flujo de dinero y cómo sus gastos
                afectan su capacidad para pagar sus facturas y, por lo tanto, su
                éxito financiero. Un enfoque basado en fórmulas de Excel
                Ingresos + Gastos = Saldo La mayoría de las herramientas de
                administración de gastos requieren que los usuarios asignen
                valores a los datos relacionados con los gastos. Muchos
                funcionan de manera similar a las hojas de cálculo u otros
                programas creados para trabajar con modelos específicos, pero no
                utilizan el poder y la funcionalidad de Excel. Verá estimaciones
                y análisis de datos en tiempo real.
              </p>
              <div class="col text-center">
                <button class="btn btn-success text-dark boton_sombra">
                  <router-link to="/register" class="text-white ">
                    Empezar a Gestionar
                  </router-link>
                </button>
              </div>
            </div>
          </div>
          <div class=" row justify-content-center">
            <div class="mt-5 col-7">
              <b-card
                img-src="https://image.freepik.com/vector-gratis/ilustracion-concepto-finanzas-rendimiento-financiero_53876-40450.jpg"
                img-alt="Card image "
                img-left
                class="mb-3 text-white custom-bg-card"
              >
                <b-card-text class="mt-5 mb-5 text-center font-weight-bold">
                  <p>Gestione sus ingresos para alcanzar metas a medio-largo plazo.
                  Aumente los ingresos gradualmente para que no se agote. Use
                  parte del dinero para volver a priorizar sus ahorros.
                  </p><p> Mejorar
                  el rendimiento y la eficiencia de su trabajo. Por ejemplo,
                  controle su tiempo y sea más productivo. Emprende algunos
                  proyectos que te harán más creativo.
                  </p>
                  <p>Cambie a un plan
                  telefónico más económico para ahorrar dinero en su factura de
                  telecomunicaciones. y ahorrar dinero en su factura de
                  telecomunicaciones. Para darse un incentivo para ceñirse a su
                  presupuesto, designe una pequeña cantidad de efectivo cada mes
                  como recompensa.</p>
                </b-card-text>
              </b-card>
              <b-card
                img-src="https://image.freepik.com/vector-gratis/inversor-laptop-monitoreando-crecimiento-dividendos-comerciante-sentado-sobre-pila-dinero-invertir-capital-analizar-graficos-ganancias-ilustracion-vector-finanzas-comercio-acciones-inversion_74855-8432.jpg"
                img-alt="Card image"
                img-right
                class="text-white custom-bg-card mb-5 mt-5"
              >
                <b-card-text class="mt-5 text-center font-weight-bold">
                  <p>Controle sus gastos, para lograr sus objetivos, necesita
                  dedicar un tiempo a analizar los gastos de su estilo de vida.
                  La gente generalmente juzga mal sus hábitos de gasto, a menudo
                  porque no puede controlar a dónde va su dinero.</p>
                  <p>Una excelente
                  manera de gastar menos es organizar sus gastos y facturas por
                  categoría. Antes de comenzar a realizar compras, asigne un
                  valor a cada uno. Si no tiene cuidado, es posible que no se dé
                  cuenta de que la factura de reparación de su automóvil es más
                  cara de lo que parece. Incluso puede sentirse avergonzado de
                  contarles a sus amigos y familiares en qué gasta su dinero.
                  </p>
                </b-card-text>
              </b-card>
            </div>
          </div>

          <!--<div class="col-lg-5 white float-left ml-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum impedit cupiditate, suscipit asperiores aliquam eveniet ea alias, consequatur tenetur, magni temporibus aspernatur? Ratione animi neque ipsa repellendus reprehenderit dolores omnis.</div>
          <img src="https://elandroidelibre.elespanol.com/wp-content/uploads/2014/09/grafica-crecimiento.jpg" alt="" class="cuadro">
          <div class="col-lg-5 white float-right mr-5 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis qui cum commodi sint obcaecati, nostrum a ea tempore voluptatibus quia pariatur minus iusto voluptatem, itaque labore? Non ducimus vitae obcaecati.</div>
          <img src="https://image.freepik.com/vector-gratis/graficas-economia_23-2147598629.jpg" alt="" class="cuadro-2 ml-5">-->
        </div>
        <div class="col-12 bg-warning custom-card-height">
          <div class="col-6 float-left custom-bg-form">
            <div class="col-12 text-center text-white">
              <div class="mt-4">
                <i
                  class="fas fa-phone-volume text-white custom-icon-size mt-5"
                ></i>
                <p class="mt-2">
                  <a href="tel:+34 600123123 " class="text-white"
                    >Tel: +34 600123123</a
                  >
                </p>
              </div>
              <div>
                <i
                  class="fas fa-envelope-open-text text-white custom-icon-size mt-2"
                ></i>
                <p class="mt-2">
                  <a href="mailto:contact@finsave.com" class="text-white"
                    >contact@finsave.com</a
                  >
                </p>
              </div>
              <div>
                <i
                  class="fas fa-map-marker-alt text-white custom-icon-size mt-2"
                ></i>
                <p class="mt-2">Calle Moon Nº:24</p>
              </div>
            </div>
          </div>
          <div class="col-6 float-right">
            <div class="">
              <div class="row justify-content-center">
                <form
                  class="form-horizontal text-center col-6"
                  action=""
                  method="post"
                >
                  <fieldset>
                    <legend class="text-center">Contactar</legend>

                    <!-- Name input-->
                    <div class="form-group">
                      <label
                        class="col-md-12 control-label text-center"
                        for="name"
                        >Nombre</label
                      >
                      <div class="col-md-12">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>

                    <!-- Email input-->
                    <div class="form-group">
                      <label
                        class="col-md-12 control-label text-center"
                        for="email"
                        >Email</label
                      >
                      <div class="col-md-12">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>

                    <!-- Message body -->
                    <div class="form-group">
                      <label
                        class="col-md-12 control-label text-center"
                        for="message"
                        >Mensaje</label
                      >
                      <div class="col-md-12 mb-4">
                        <textarea
                          class="form-control"
                          id="message"
                          name="message"
                          placeholder="Cuentanos, que necesitas..."
                          rows="2"
                        ></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary btn-lg">
                        Enviar
                      </button>
                    </div>

                    <!-- Form actions -->
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      isAuth: null
    };
  },
  methods: {
    isLogin() {
      this.$store.dispatch("sliderOff");
      console.log(this.$store.state.token);
      this.isAuth = this.$store.state.token;
    }
  },
  mounted() {
    this.isLogin();
  }
};
</script>

<style>
body {
  overflow-x: hidden;
}

.custom-bg-card {
  background-color: #00487c;
  border: none;
}

.custom-bg-form {
  background: url(https://i.ibb.co/L8YScdC/primer-plano-hombre-negocios-tableta-digital-1098-549-copia.jpg)
    center center/cover no-repeat;
  height: 400px;
}
.custom-card-height {
  height: 400px;
}

.custom-icon-size {
  font-size: 30px;
}

.boton_sombra {
  box-shadow: 0 0 10px 1px #fffcff;
}

.header-description {
  background-color: #ffd600;
  box-shadow: inset 0 0 10px 2px black;
}

.header-title-color {
  color: #00487c;
}

.box-up {
  box-shadow: 0 0 10px 1px black;
}
</style>
