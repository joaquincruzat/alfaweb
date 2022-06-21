<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Alfaweb</v-toolbar-title>
      <v-btn icon to="/" id="no-background-hover">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon to="/" id="no-background-hover">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
<style>
#no-background-hover::before {
  background-color: transparent !important;
}
</style>
