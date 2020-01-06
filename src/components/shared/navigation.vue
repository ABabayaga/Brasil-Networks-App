<template>
  <v-toolbar>
    <v-toolbar-side-icon router :to="routeh" @click="drawer = !drawer"></v-toolbar-side-icon>

    <v-toolbar-title>Brasil Networks</v-toolbar-title>

    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    routeh: "/"
    
  })
};
</script>

<style>
</style>