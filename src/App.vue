<template>
  <v-app>
    <ToolBar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: { ToolBar },
  methods: {
    ...mapActions(["getCourses"]),
  },
  mounted() {
    this.getCourses();
  },
};
</script>

<style></style>
