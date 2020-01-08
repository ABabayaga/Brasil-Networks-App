<template>
  <div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card
              color="blue lighten-5"
              class="white--text"
              v-for="plano in planos"
              :key="plano._id"
            >
              <v-system-bar
                height="40"
                color="blue accent-1"
                v-text="plano.planoname"
                class="justify-center white--text text-uppercase"
              ></v-system-bar>

              <v-card-text>
                <div
                  class="text-xs-center blue--text text--darken-3 font-weight-regular"
                  v-text="plano.descricao"
                ></div>
                <p
                  class="display-1 text-xs-center blue--text text--darken-3 font-weight-black"
                  v-text="plano.valor"
                ></p>
                <p
                  class="text-xs-center blue--text text--darken-3 font-weight-regular"
                  v-text="plano.taxa"
                ></p>
              </v-card-text>

              <v-card-actions class="justify-center">
                <v-btn text class="white--text" color="orange darken-2">Saiba mais</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  data: () => ({
    // plano: 1,
    planos: []
    // planos2: [],
  }),
  methods: {
    buscarPlanos() {
      HttpRequestUtil.buscarPlanos().then(plano => {
        this.planos = plano;
      });
    }
  },
  mounted() {
    this.buscarPlanos();
  }
};
</script>

<style scoped>
</style>