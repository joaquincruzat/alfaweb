<template>
  <v-main>
    <v-container class="container" fluid>
      <div class="adminBtn">
        <v-btn color="primary" to="/admin"> Administrar cursos </v-btn>
      </div>

      <v-row>
        <v-col
          cols="12"
          xl="4"
          md="6"
          sm="9"
          v-for="(course, index) in courses"
          :key="index"
        >
          <CourseCards :course="course" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CourseCards from "@/components/CourseCards.vue";
import { mapState } from "vuex";
export default {
  components: { CourseCards },
  mounted() {
    this.$store.dispatch("getCourses");
  },
  computed: {
    ...mapState(["courses"]),
  },
};
</script>
<style>
.container {
  margin-top: 20px;
  max-width: 70vw;
  align-self: center;
}
.adminBtn {
  display: flex;
  justify-content: end;
}
</style>
