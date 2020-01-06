<template>
  <v-app>
    <!-- <NavigationTop /> -->
    <!-- <v-toolbar> -->
      <v-toolbar dark color="primary">
      <v-toolbar-side-icon router :to="routeh" @click="drawer = !drawer" v-on:click="conexao = !conexao" ></v-toolbar-side-icon>
<atom-spinner
          :animation-duration="1000"
          :size="50"
          :color="'#FFFFFF'"
     />
      <v-toolbar-title>Brasil Networks</v-toolbar-title>
          <!-- <span class="white--text">Lorem ipsum</span> -->


      <v-spacer></v-spacer>
    </v-toolbar>
 <!-- <Botoes /> -->

  <v-container class="pa-1" v-if="drawer == true">
    <div class="text-center">
      <div class="my-2">
        <v-btn block large color="primary" dark @click="drawer = !drawer" router :to="routep" v-on:click="conexao = !conexao">
          <div>
            <span class="d-block" align="center">Planos</span>
            <span class="d-block text-none">Veja nossos velociades e valores</span>
          </div>
        </v-btn>
      </div>

      <div class="my-2">
        <v-btn
          block
          color="primary"
          large
          dark
          href="http://143.137.52.46/central_assinante_web/login"
          @click="drawer = !drawer"
        >
          <div>
            <span class="d-block" align="center">Central</span>
            <span class="d-block text-none">Tenha acesso a segunda via de boleto</span>
          </div>
        </v-btn>
      </div>

      <div class="my-2">
        <v-btn block color="primary" dark large @click="drawer = !drawer">
          <div>
            <span class="d-block" align="center">Whatsapp</span>
            <span class="d-block text-none">Tire dúvidas ou solicitações com nosso time</span>
          </div>
        </v-btn>
      </div>

      <div class="my-2">
        <v-btn large block color="primary" dark    v-on:click="conexao = !conexao"  @click="drawer= !drawer" router :to="routecon" >
          <div>
            <span class="d-block" align="center">Contato</span>
            <span class="d-block text-none">Tenha acesso direto aos departamentos</span>
          </div>
        </v-btn>
      </div>
    </div>
  </v-container>
 <!-- <Imagem /> -->

<v-card >
  <v-img
      v-if="conexao"
      :src="image"
      position='center bottom'
      
      
     width="360"
     height="170"
    ></v-img>
</v-card>

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/shared/footer";
// import NavigationTop from "./components/shared/navigation";
// import Botoes from "./components/Botoes";
// import Imagem from "./components/Imagem";
  import {AtomSpinner} from 'epic-spinners'

export default {
  name: "App",
  components: {
    Footer,
    // NavigationTop,
    // Botoes,
    // Imagem
    AtomSpinner
  },
  data: () => ({
    drawer: true,
    conexao: true,
    routeh: "/",
    routep: "/planos",
    // routec: "/central",
    // routew: "/whatsapp",
    routecon: "/contato",
    url: "http://143.137.52.46/central_assinante_web/login",
    image: require('@/assets/conexao.jpeg')
  })
};
</script>
