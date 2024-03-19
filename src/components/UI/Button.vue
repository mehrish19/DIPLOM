<script setup>
import WalletIcon from "../icons/WalletIcon.vue";

const props = defineProps({
  text: String,
  color: {
    type: String,
    default: "#e62143",
  },
});

</script>

<template>
  <button class="button">Shop
    <WalletIcon />
  </button>
</template>

<style>
.button {
  background: #e62143;
  padding: 10px 20px;
  border: 2px, solid #ffff;
  outline: none;
  border-radius: 8px;
  box-shadow: 0 0 40px #e62143;
  font-size: 18px;
  color: #ffff;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button:hover{
  background-color: #3a4750;
  box-shadow: 0 0 40px #3a4750;
}
</style>