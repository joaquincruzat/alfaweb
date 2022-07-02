<template>
  <div class="homeView">
    <h1>¡Bienvenid@ a Alfaweb!</h1>
    <v-content class="loginForm">
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-form
                @submit.prevent="handleSignInFormSubmit"
                ref="signInFormRef"
              >
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Inicie sesión</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="email"
                    label="Introduzca su email"
                    type="text"
                    v-model="credentials.email"
                    :rules="[required, mustBeEmail]"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Introduzca su contraseña"
                    type="password"
                    v-model="credentials.password"
                    :rules="[required, minLength(6)]"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" type="submit">Login</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
            <h3 class="loginForm-routeSignUp">
              Si no tiene una cuenta,
              <router-link to="/signup">haga click aquí</router-link>
            </h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { mapActions } from "vuex";
export default {
  data: () => ({
    credentials: { email: "", password: "" },
  }),
  methods: {
    ...mapActions("session", ["signInWithEmailAndPassword"]),
    async handleSignInFormSubmit() {
      if (this.$refs.signInFormRef.validate()) {
        try {
          await this.signInWithEmailAndPassword(this.credentials);
          this.credentials = {
            email: "",
            password: "",
          };
        } catch (e) {
          console.error(e);
        }
      }
    },
    mustBeEmail(value) {
      return (
        //eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        "El campo debe ser un email válido"
      );
    },
    minLength(length) {
      return (value) =>
        String(value).length >= length || "Introduzca una contraseña válida";
    },
  },
  // methods: {
  //   async sendLogin() {
  //     const { email, password } = this.user;
  //     const auth = getAuth();
  //     await signInWithEmailAndPassword(auth, email, password);
  //     this.$router.push("/");
  //   },
  // },
};
</script>
<style>
.loginForm {
  margin-top: 50px;
}
.loginForm-routeSignUp {
  margin-top: 50px;
}
.homeView {
  text-align: center;
  margin-top: 50px;
}
</style>
