<script setup>
import { ref } from "vue";

const categories = ref(null);
async function getFetchCategories(category) {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  console.log(res);
  categories.value = data;
}
getFetchCategories();
</script>

<template>
  <div class="categories">
    <h2 class="categories__title"></h2>
    <img src="" alt="" class="categories__img" />
  </div>
</template>

<style lang="scss" scoped></style>
