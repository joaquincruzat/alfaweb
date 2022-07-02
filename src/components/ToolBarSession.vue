<template>
  <div>
    <v-tooltip bottom color="warning">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          dark
          text
          small
          type="submit"
          @click="closeSession"
        >
          {{ user.email }}
          <v-icon class="ml-2">mdi-login</v-icon>
        </v-btn>
      </template>
      <span>Cerrar Sesión</span>
    </v-tooltip>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getAuth, signOut } from "firebase/auth";
export default {
  computed: {
    ...mapState("session", ["user"]),
  },
  methods: {
    async closeSession() {
      const auth = getAuth();
      await signOut(auth).then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style></style>
