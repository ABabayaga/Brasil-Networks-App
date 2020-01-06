<template>
  <v-container grid-list-lg>
   
    <v-layout row wrap>
      <v-flex>
        <v-card class="mx-auto" width="330" height="240" v-for="plano in planos" :key="plano._id">
          <v-container fluid>
            <v-card height="200">
              <v-system-bar
                height="40"
                color="orange"
                v-text="plano.planoname"
                v-card-title
                class="justify-center"
              ></v-system-bar>

              <v-card-text eight="240" >
                <div class="text-xs-center">Descricao</div>
                <p class="display-1 text-xs-center pa-0   ">80</p>
                <p class="text-xs-center mx-0">Taxa</p>
                
                <v-card-actions class="justify-center pa-0">
                  <v-btn small text color="deep-purple accent-4">Saiba mais</v-btn>
                </v-card-actions>
              </v-card-text>
              

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card class="mx-auto" max-width="500" v-for="plano in planos" :key="plano._id">
          <v-container fluid>
            <v-card>
              <v-system-bar color="orange" v-card-title class="justify-center" v-text="plano.planoname"></v-system-bar>

              <v-card-text>
                <div class="text-xs-center">Descricao</div>
                <p class="display-1 text-xs-center">80</p>
                <p class="text-xs-center">Taxa</p>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn text color="deep-purple accent-4">Saiba mais</v-btn>
              </v-card-actions>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card class="mx-auto" width="150px" v-for="plano in planos" :key="plano.planoname">
          <v-container fluid>
            <v-card>
              <v-system-bar color="orange" v-card-title class="justify-center" v-text="plano.planoname"></v-system-bar>

              <v-card-text>
                <div class="text-xs-center">Descricao</div>
                <p class="display-1 text-xs-center">80</p>
                <p class="text-xs-center">Taxa</p>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn text color="deep-purple accent-4">Saiba mais</v-btn>
              </v-card-actions>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  data: () => ({
    // plano: 1,
    planos: [],
    plano: [{ flex: 12 }, { flex: 6 }, { flex: 6 }]
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