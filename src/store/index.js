import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    users: [],
  },
  getters: {
    posts(state) {
      let authors = state.users.reduce((acc, el) => {
        acc[el.id] = el.name;
        return acc;
      }, {});

      return state.posts.map((el) => {
        el.author = authors[el.userId];
        return el;
      });
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        commit("setPosts", data);
      } catch (e) {
        console.error(e);
      }

      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("setUsers", data);
      } catch (e) {
        console.error(e);
      }
    },
  },
  modules: {},
});
