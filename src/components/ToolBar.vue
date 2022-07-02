<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Alfaweb</v-toolbar-title>
      <v-btn icon to="/" id="no-background-hover">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <ToolBarSession v-if="activeLogin" />
    </v-toolbar>
  </v-card>
</template>
<script>
import ToolBarSession from "@/components/ToolBarSession";
import { mapGetters } from "vuex";
export default {
  components: {
    ToolBarSession,
  },
  data: () => ({
    drawer: false,
  }),
  computed: {
    ...mapGetters("session", ["activeLogin"]),
  },
  mounted() {
    this.$store.dispatch("session/subscribeToAuthStateChange");
  },
};
// import { getAuth, signOut } from "firebase/auth";
// export default {
//   methods: {
//     async closeSession() {
//       const auth = getAuth();
//       signOut(auth).then(() => {
//         this.$router.push("/login");
//       });
//     },
//   },
// };
</script>
<style>
#no-background-hover::before {
  background-color: transparent !important;
}
.admin {
  text-decoration: none;
}
</style>
