<script setup>
import Card from "../components/card/Card.vue";
import { useProductsStore } from "@/stores/productsStore";
import { ref, watch } from "vue";
import Next from "@/components/icons/Next.vue";
import Prev from "@/components/icons/Prev.vue";
import { useRouter, useRoute } from "vue-router";
import debounce from "lodash.debounce";
// import { useInfoStore } from "@/stores/infoStore";

const router = useRouter();
const route = useRoute();
const search = ref("");

const productsStore = useProductsStore();
productsStore.getProducts(12, +route.query.page * 12 - 12 || 0, search.value);

const currentPage = ref(+route.query.page || 1);

function onClickHandler(page) {
  // console.log(page);
  if (page === 1) {
    router.push(`/`);
  } else {
    router.push(`/?page=${page}`);
  }
  productsStore.getProducts(12, page * 12 - 12, search.value);
}

const paginatePage = Math.ceil(productsStore.total / 12);
if (currentPage.value > paginatePage) { router.push("/error") }

watch(
  search,
  debounce(() => {
    productsStore.getProducts(12, currentPage.value * 12 - 12, search.value);
  }, 500)
);

</script>

<template>
  <div class="products">
    <div class="container">
      <h2 class="products__title">Products</h2>
      <input type="text" class="products__input" placeholder="Search..." v-model="search" />
      <div class="products__cards">
        <Card v-for="item in productsStore.products" :key="item.id" :count="item.id" :info="item" />
      </div>
      <vue-awesome-paginate :total-items="+productsStore.total" :items-per-page="12" :max-pages-shown="4"
        v-model="currentPage" :on-click="onClickHandler" class="products__paginate">
        <template #prev-button>
          <Prev :size="30" />
        </template>
        <template #next-button>
          <Next :size="30" />
        </template>
      </vue-awesome-paginate>
    </div>
  </div>
</template>
