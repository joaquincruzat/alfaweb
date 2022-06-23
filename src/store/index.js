import Vue from "vue";
import Vuex from "vuex";
import {
  getFirestore,
  collection,
  query,
  // where,
  onSnapshot,
} from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [],
  },
  getters: {},
  mutations: {
    GET_COURSES(state, courses) {
      state.courses = courses;
    },
  },
  actions: {
    getCourses({ commit }) {
      const db = getFirestore();
      const q = query(collection(db, "courses"));
      onSnapshot(q, (querySnapshot) => {
        const courses = [];
        querySnapshot.forEach((doc) => {
          courses.push({ id: doc.id, data: doc.data() });
        });
        commit("GET_COURSES", courses);
      });
    },
  },
  modules: {},
});
