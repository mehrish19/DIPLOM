<script setup>
import { useProductsStore } from "@/stores/productsStore";
const productsStore = useProductsStore();
import Button from "../UI/Button.vue";
const props = defineProps({
  count: Number,
  info: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card" :data-count="count">
    <RouterLink :to="'/product/' + info.id">
      <img :src="info.thumbnail" alt="" class="card__img" />
    </RouterLink>
    <h2 class="card__name">{{ info.title }}</h2>
    <h3 class="card__rating">rating {{ info.rating }}</h3>
    <li class="card__item">price <a href="#" class="card__price">${{ info.price }}</a></li>
    
    <Button @click="productsStore.addToCart(info) " />
  </div>
</template>
