import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALBI6iqU7lpc35uZYWBwcOY4x0BApvVhQ",
  authDomain: "alfaweb-282b7.firebaseapp.com",
  projectId: "alfaweb-282b7",
  storageBucket: "alfaweb-282b7.appspot.com",
  messagingSenderId: "569910782624",
  appId: "1:569910782624:web:aa82acff49d64ca398f7c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
app;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
