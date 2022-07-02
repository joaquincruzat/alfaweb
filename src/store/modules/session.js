import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Router from "@/router";

export const sessionModule = {
  namespaced: true,
  state: {
    user: null,
    loading: false,
  },
  getters: {
    activeLogin(state) {
      return !!state.user;
    },
  },
  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async subscribeToAuthStateChange({ commit }) {
      const auth = getAuth();
      auth.onAuthStateChanged((user) => {
        commit("SET_USER", user);
        if (user) Router.push("/");
      });
    },
    async signInWithEmailAndPassword({ commit }, credentials) {
      commit("SET_LOADING", true);
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        );
      } catch (e) {
        console.error("falló al intentar autenticarse", e);
      } finally {
        commit("SET_LOADING", false);
        Router.push("/");
      }
    },
  },
};
