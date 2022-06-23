<template>
  <v-container>
    <v-row>
      <v-card width="500">
        <v-img height="250px" width="500px" :src="course.data.img"></v-img>
        <v-card-text class="card">
          <div class="font-weight-bold ml-8 mb-2"></div>

          <v-timeline align-top dense>
            <v-timeline-item>
              <div>
                <div class="font-weight-normal">
                  <p>Costo: {{ course.data.price }}<strong></strong></p>
                </div>
                <p>Duration: {{ course.data.duration }}</p>
              </div>
            </v-timeline-item>
            <v-timeline-item>
              <div>
                <div class="font-weight-normal">
                  <p>Cupos: {{ course.data.quota }}<strong></strong></p>
                </div>
                <p>Completado: {{ course.data.status }}</p>
              </div>
            </v-timeline-item>
            <v-timeline-item>
              <div>
                <div class="font-weight-normal">
                  <p>Fecha de Registro: {{ course.data.date }}</p>
                  <strong></strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item>
              <div>
                <div class="font-weight-normal">
                  <p>Descripción: {{ course.data.desc }}</p>
                  <strong></strong>
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
.card {
  background-color: rgb(250, 250, 250);
}
v-img {
  background-image: cover;
}
</style>
