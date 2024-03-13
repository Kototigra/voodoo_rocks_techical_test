<template>
  <div class="container">
    <div class="cardsList">
      <div class="card" v-for="post in posts" :key="post.id">
        <p class="card__title">{{ post.title }}</p>
        <p class="card__text">
          {{ post.body }}
        </p>
        <p class="card__author">{{ post.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-card",
  props: ["filter"],
  data() {},
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    posts() {
      let postsList = this.$store.getters.posts;
      if (!this.filter) {
        return postsList;
      } else {
        return postsList.filter((el) =>
          el.author.toLowerCase().includes(this.filter.toLowerCase())
        );
      }
    },
  },
};
</script>
