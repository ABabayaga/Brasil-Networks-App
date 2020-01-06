<template>
  <v-container class="pa-1" v-if="drawer == true">
    <div class="text-center">
      <div class="my-2">
        <v-btn block large color="primary" dark @click="drawer = !drawer" router :to="routep">
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
        <v-btn block color="primary" dark large @click="drawer = !drawer" router :to="routew">
          <div>
            <span class="d-block" align="center">Whatsapp</span>
            <span class="d-block text-none">Tire dúvidas ou solicitações com nosso time</span>
          </div>
        </v-btn>
      </div>

      <div class="my-2">
        <v-btn large block color="primary" dark @click="drawer = !drawer" router :to="routecon">
          <div>
            <span class="d-block" align="center">Contato</span>
            <span class="d-block text-none">Tenha acesso direto aos departamentos</span>
          </div>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    // routeh: "/",
    routep: "/planos",
    routec: "/central",
    routew: "/whatsapp",
    routecon: "/contato",
    url: "http://143.137.52.46/central_assinante_web/login"
  })
};
</script>