<template>
  <v-card height="600px" color="#E0E0E0"
>
    <div class="pt-3 text-xs-center grey--text text--darken-2 font-weight-regular">
      <h3>ENTRE EM CONTATO CONOSCO</h3>
    </div>

    <div class="pt-1 pl-2 text-xs grey--text text--darken-2 font-weight-regular">
      <p>Ligue, envie um e-mail, faça-nos uma visita ou envie sua mensagem.</p>

      <p>Retornaremos o mais breve possível.</p>
      <p>Será um prazer atendê-lo (a)!</p>

      <div>
        <v-icon size="21px">fas fa-phone-square</v-icon>
        <span class="pl-1">67 3388 8730</span>
      </div>
      <div>
        <v-icon size="21px">fab fa-whatsapp-square</v-icon>
        <span class="pl-1">67 99252 2626</span>
      </div>

      <div class="pt-1">
        <v-icon size="21px">fas fa-envelope</v-icon>
        <span class="pl-1">comercial@brasiltecnologianetwork.com.br</span>
      </div>

      <div class="pt-3 text-center">
        <v-icon size="21px">fas fa-map-marker-alt</v-icon>
        <span class="pl-1 ">Rua Inubia Paulista, n 704 - Campo Grande-MS</span>
      </div>

     
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fas fa-phone-alt",
      // 'fab fa-twitter',
      // 'fab fa-google-plus',
      // 'fab fa-linkedin',
      "fab fa-instagram"
    ]
  })
};
</script>

<style>
</style>