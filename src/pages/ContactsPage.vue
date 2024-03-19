<script setup>
import Navbar from "@/components/nav/Navbar.vue";
// import Button from "../components/UI/Button.vue";
import { ref } from 'vue';

const userName = ref("")
const userPhone = ref("")
const userEmail = ref("")

const token = import.meta.env.VITE_TG_TOKEN
const chatId = import.meta.env.VITE_TG_CHATID

const sendToTelegram = () => {

  const txt = ref("")

  const tgObj = ref({
    name: userName.value,
    phone: userPhone.value,
    email: userEmail.value
  })

  for (const key in tgObj.value) {
    txt.value += `${key}: ${tgObj.value[key]} %0A`
  }
  
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt.value}`)
}
</script>

<template>
  <div class="contact">
    <div class="container">
      <div class="contact__content">
        <Navbar />
        <h2 class="contact__title">Registration</h2>
        <form action="" class="contact__form" @submit.prevent="sendToTelegram">
          <input class="contact__input" type="text" required v-model="userName" placeholder="Your Name">
          <input class="contact__input" type="tel" required v-model="userPhone" placeholder="Your Number">
          <input class="contact__input" type="email" required v-model="userEmail" placeholder="Your e-mail">
          <button class="contact__btn">send</button>
          <!-- <Button /> -->
        </form>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
