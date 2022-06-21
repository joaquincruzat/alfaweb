<template>
  <v-main>
    <v-container class="container" fluid>
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
</style>
