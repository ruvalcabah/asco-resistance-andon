<template>
  <v-app-bar color="blue-darken-4" app><!-- elevation="5"> -->
    <v-img max-height="100" max-width="150" contain src="https://allvectorlogo.com/img/2016/08/emerson-logo.png" />
    <v-toolbar-title class="ml-6 text-h5 font-weight-bold text-yellow">
      <!-- mt-1  -->
      Asco Resistance ANDON System
      <!-- ASCO PACKAGING SYSTEM -->
    </v-toolbar-title>
    <!-- <v-spacer /> -->
    <!-- <v-text> -->
    <DigitalClock />
    <!-- </v-text> -->
  </v-app-bar>
</template>

<style lang="scss">
.v-toolbar__content {
  height: 80px !important;
}
</style>