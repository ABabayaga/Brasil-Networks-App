<template>
    <v-footer  height="auto" inset app>
      <v-card color='#64B5F6'  flat tile class=" lighten-1 white--text text-xs-center flex">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{icon}}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text>
          Segue em nossas redes sociais.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text text-center">
          &copy;2019 - <strong>Brasil Networks Solutions Digitais</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
        'fab fa-facebook',
        // 'fab fa-twitter',
        // 'fab fa-google-plus',
        // 'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
}
</script>

<style>

</style>