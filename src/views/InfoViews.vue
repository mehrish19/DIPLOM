<script setup>
import Next from "@/components/icons/Next.vue";
import Prev from "@/components/icons/Prev.vue";
import Button from "../components/UI/Button.vue";
import { useInfoStore } from "@/stores/infoStore";
import { useProductsStore } from "@/stores/productsStore";
import { useRoute } from "vue-router";
const route = useRoute();
const infoStore = useInfoStore();
const productsStore = useProductsStore();
infoStore.getInfo(route.params.id);
</script>

<template>
  <div class="info">
    <div class="container">
      <div class="info__content">
        <div class="info__card">
          <img :src="infoStore.info?.thumbnail" alt="" class="info__img" />
          <h2 class="info__name">{{ infoStore.info?.title }}</h2>
          <h3 class="info__rating">Rating: {{ infoStore.info?.rating }}</h3>
          <li class="info__item">
            price<a href="#" class="info__price"
              >${{ infoStore.info?.price }}</a
            >
          </li>
          <p class="info__description">
            Description: {{ infoStore.info?.description }}
          </p>

          <Button @click="productsStore.addToCart(infoStore.info)" />
        </div>

        <div class="next__prev">
          <Next />
          <Prev />
        </div>
      </div>
    </div>
  </div>
</template>
