import Vue from "vue";
import Vuex from "vuex";
import {
  getFirestore,
  collection,
  query,
  // where,
  onSnapshot,
} from "firebase/firestore";
import { sessionModule as session } from "@/store/modules/session.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [],
  },
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
  getters: {
    totalQuotaCourses(state) {
      return state.courses.reduce((i, course) => {
        i = i + parseInt(course.data.quota);
        return i;
      }, 0);
    },
    totalRegisteredToCourses(state) {
      return state.courses.reduce((i, course) => {
        i = i + parseInt(course.data.registered);
        return i;
      }, 0);
    },
    remainingQuotaCourses(state) {
      return state.courses.reduce((i, course) => {
        i =
          i + (parseInt(course.data.quota) - parseInt(course.data.registered));
        return i;
      }, 0);
    },
    finishedCourses(state) {
      return state.courses.reduce((i, course) => {
        if (course.data.status === "Sí") i++;
        return i;
      }, 0);
    },
    activeCourses(state) {
      return state.courses.reduce((i, course) => {
        if (course.data.status === "No") i++;
        return i;
      }, 0);
    },
    totalCourses(state) {
      return state.courses.length;
    },
  },
  modules: {
    session,
  },
});
