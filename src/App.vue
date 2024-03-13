<template>
  <div class="search">
    <input
      v-model="filter"
      class="search__input"
      type="search"
      id="search"
      placeholder="Filter by author..."
      autofocus
    />
    <label for="name" class="search__label">Filter by author...</label>
  </div>
  <Card :filter="filter" />
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "App",
  data() {
    return { filter: "" };
  },
  methods: {},
  components: {
    Card,
  },
};
</script>
