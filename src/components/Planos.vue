<template>
  <div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">
    <!-- <v-toolbar
      color="pink"
      dark
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>My Music</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>-->

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
                v-card-title
                class="justify-center white--text text-uppercase"
              ></v-system-bar>
              <!-- <v-card-title primary-title>
                <span v-text="plano.descricao"></span>
                <div>
                  <div class="headline" ></div>
                  <p v-text="plano.valor"></p>
                  <span v-text="plano.taxa"></span>
                </div>
              </v-card-title> -->
              <v-card-text>
                <div class="text-xs-center blue--text text--darken-3 font-weight-regular">Descricao</div>
                <p class="display-1 text-xs-center blue--text text--darken-3 font-weight-black">80</p>
                <p class="text-xs-center blue--text text--darken-3 font-weight-regular">Taxa</p>
              </v-card-text>
              <!-- <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card> -->
             <v-card-actions class="justify-center">
                <v-btn text class="white--text" color="orange darken-2">Saiba mais</v-btn>
              </v-card-actions>
              </v-card> 
          </v-flex>
               <v-divider inset></v-divider>


          <!-- <v-flex xs12>
            <v-card
              color="blue-grey darken-2"
              class="white--text"
              v-for="plano in planos2"
              :key="plano._id"
            >
              <v-system-bar
                height="40"
                color="orange"
                v-text="plano.planoname"
                v-card-title
                class="justify-center"
              ></v-system-bar>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Unlimited music now</div>
                  <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex> -->

          <!-- <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Unlimited music now</div>
                  <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex> -->

          <!-- <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>-->

          <!-- <v-flex xs12>
            <v-card color="purple" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Halycon Days</div>
                      <div>Ellie Goulding</div>
                      <div>(2013)</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>-->
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
    planos: [],
    // planos2: [],
    // plano: [{ flex: 12 }, { flex: 6 }, { flex: 6 }]
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