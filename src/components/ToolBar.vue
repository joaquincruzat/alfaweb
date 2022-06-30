<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Alfaweb</v-toolbar-title>
      <v-btn icon to="/" id="no-background-hover">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h5 class="admin">Administrar cursos</h5>
      <v-btn icon to="/admin">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
      <v-btn text small type="submit" @click="closeSession">
        {{ user.email }}
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  methods: {
    async closeSession() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>
<style>
#no-background-hover::before {
  background-color: transparent !important;
}
.admin {
  text-decoration: none;
}
</style>
