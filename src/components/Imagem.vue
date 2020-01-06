<template>
  <!-- <v-row align="center" justify="center"> -->
    <v-img
      :src="image"
      position='center bottom'
      
      
      max-width="500"
      max-height="200"
    ></v-img>
  <!-- </v-row> -->
</template>

<script>
export default {
    data() {
        return {
            image: require('@/assets/conexao.jpeg')
        }
    }
}
</script>