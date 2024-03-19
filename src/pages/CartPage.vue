<script setup>
import { useProductsStore } from "@/stores/productsStore";
const productsStore = useProductsStore();

</script>

<template>
  <div class="table__page">
    <div class="container">
      <div class="table__body">
        <div class="table">
          <div class="table__empty" v-if="!productsStore.cartItems.length">
            <h2>empty...</h2>
          </div>
          <div v-else>
            <div class="table__list" v-for="item in productsStore.cartItems" :key="item.id">
              <img :src="item.thumbnail" class="table__img" />
              <h2 class="table__title"> {{ item.title }}</h2>
              <p class="table__price">${{ item.price }}</p>
              <button class="button" role="button" @click="productsStore.deleteProduct(item.id)">x</button>
            </div>
          </div>
        </div>
      </div>
      <h3 class="table__name">Total Price: {{ productsStore.cartItems?.reduce((acc, item) => acc += item.price, 0) }}</h3>
    </div>
  </div>
</template>