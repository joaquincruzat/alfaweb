<template>
  <v-app>
    <v-container class="table">
      <v-data-table
        :headers="headers"
        :items="courses"
        class="elevation-1"
        loading="true"
        loading-text="Loading... Please wait"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Lista de cursos</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="dialog"
              max-width="600px"
              transition="dialog-top-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Nuevo Curso
                </v-btn>
              </template>
              <v-card color="yellow lighten-5">
                <v-card-title>
                  <span class="text-h5"></span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <h1>Agregando curso</h1>
                      <v-col cols="12">
                        <v-text-field
                          v-model="updatedItem.title"
                          label="Curso"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="updatedItem.img"
                          placeholder="URL de la imagen del curso"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="updatedItem.quota"
                          label="Cupos"
                          type="number"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="updatedItem.registered"
                          label="Inscritos"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="updatedItem.duration"
                          label="Duración"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="updatedItem.price"
                          label="Costo"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <p>Terminado</p>
                        <v-checkbox
                          v-model="updatedItem.status"
                          label="Sí"
                          value="Sí"
                          required
                        ></v-checkbox>
                        <v-checkbox
                          v-model="updatedItem.status"
                          value="No"
                          label="No"
                          required
                        ></v-checkbox>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="updatedItem.date"
                          label="Fecha de inicio"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="updatedItem.cod"
                          placeholder="Código del curso (Formato: C + 'número de curso')"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="updatedItem.desc"
                          label="Descripción del curso"
                          required
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.update`]="{ item }">
          <v-icon small class="mr-2" @click="updateItem(item)">
            mdi-pencil
          </v-icon>
        </template>
        <template v-slot:[`item.delete`]="{ item }">
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-container>
    <v-container>
      <v-alert
        dense
        outlined
        color="purple"
        icon="mdi-account-group"
        loading="true"
        loading-text="Loading... Please wait"
      >
        Cantidad total de alumnos permitidos:
        <strong>{{ $store.getters.totalQuotaCourses }}</strong> alumnos
      </v-alert>
      <v-alert dense outlined color="primary" icon="mdi-account-multiple-check">
        Cantidad total de alumnos inscritos:
        <strong>{{ $store.getters.totalRegisteredToCourses }}</strong> alumnos
      </v-alert>
      <v-alert dense outlined color="error" icon="mdi-account-clock">
        Cantidad total de cupos restantes:
        <strong>{{ $store.getters.remainingQuotaCourses }}</strong> alumnos
      </v-alert>
      <v-alert dense outlined color="pink" icon="mdi-check-all">
        Cantidad total de cursos terminados:
        <strong>{{ $store.getters.finishedCourses }}</strong>
      </v-alert>
      <v-alert dense outlined color="success" icon="mdi-bell-ring">
        Cantidad total de cursos activos:
        <strong>{{ $store.getters.activeCourses }}</strong>
      </v-alert>
      <v-alert dense outlined color="gray" icon="mdi-bell">
        Cantidad total de cursos:
        <strong>{{ $store.getters.totalCourses }}</strong>
      </v-alert>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default {
  mounted() {
    this.$store.dispatch("getCourses");
  },
  computed: {
    ...mapState(["courses"]),
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Curso", value: "data.title" },
      { text: "Cupos", value: "data.quota" },
      { text: "Inscritos", value: "data.registered" },
      { text: "Duración", value: "data.duration" },
      { text: "Costo", value: "data.price" },
      { text: "Terminado", value: "data.status" },
      { text: "Fecha", value: "data.date" },
      { text: "Editar", value: "update" },
      { text: "Eliminar", value: "delete" },
    ],
    updatedIndex: "",
    updatedItem: {},
  }),

  methods: {
    updateItem(item) {
      this.updatedIndex = item.id;
      this.updatedItem = Object.assign({}, item.data);
      this.dialog = true;
    },

    async deleteItem({ id }) {
      const db = getFirestore();
      await deleteDoc(doc(db, "courses", id));
      this.updatedIndex = "";
      this.updatedItem = {};
      this.dialogDelete = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      try {
        const { updatedItem: course, updatedIndex } = this;
        const db = getFirestore();

        if (!updatedIndex) {
          await addDoc(collection(db, "courses"), course);
        } else {
          const courseRef = doc(db, "courses", updatedIndex);
          await updateDoc(courseRef, course);
        }
        this.updatedIndex = "";
        this.updatedItem = {};
        this.close();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.table {
  align-self: center;
  justify-self: center;
  margin-top: 100px;
}
</style>
