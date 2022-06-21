import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

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
    async getCourses({ commit }) {
      const { data: courses } = await axios.get("/courses.json");
      commit("GET_COURSES", courses);
    },
  },
  modules: {},
});
