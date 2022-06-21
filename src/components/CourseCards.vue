<template>
  <v-container>
    <v-row>
      <v-card width="500">
        <v-img height="250px" width="500px" :src="course.img"> </v-img>
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">{{ course.title }}</div>

          <v-timeline align-top dense>
            <v-timeline-item>
              <div>
                <div class="font-weight-normal">
                  <p>
                    Costo: <strong>{{ course.price }}</strong>
                  </p>
                </div>
                <p>Duration: {{ course.duration }}</p>
              </div>
            </v-timeline-item>
            <v-timeline-item>
              <div>
                <div class="font-weight-normal">
                  <p>
                    Cupos: <strong>{{ course.quota }}</strong>
                  </p>
                </div>
                <p>Completado: {{ course.status }}</p>
              </div>
            </v-timeline-item>
            <v-timeline-item>
              <div>
                <div class="font-weight-normal">
                  <p>Fecha de Registro:</p>
                  <strong>{{ course.registrationDate }}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item>
              <div>
                <div class="font-weight-normal">
                  <p>Descripción:</p>
                  <strong>{{ course.desc }}</strong>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ["course"],
};
</script>
<style>
v-img {
  background-image: cover;
}
</style>
