<script setup>
import BasketIcon from "../icons/BasketIcon.vue";
import { useProductsStore } from "@/stores/productsStore";

const productsStore = useProductsStore();

</script>

<template>
  <nav class="nav">
    <div class="container">
      <div class="nav__content">
        <RouterLink :to="'/'" href="">
          <img src="@/assets/images/nikie.svg" alt="" class="nav__logo" />
        </RouterLink>

        <ul class="nav__list">
          <li class="nav__item">
            <RouterLink :to="'/'" class="nav__link">Home</RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink :to="'/about'" class="nav__link">About</RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink :to="'/contacts'" class="nav__link">Contacts</RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink :to="'/categories'" class="nav__link">Categories</RouterLink>
          </li>
          <li class="nav__item">
            <button class="button">
              <RouterLink :to="'/cart'" class="nav__link-debit ">Cart({{ productsStore.counterCartItems }})<BasketIcon /></RouterLink>
            </button>
          </li>


        </ul>
      </div>
    </div>
  </nav>
</template>


