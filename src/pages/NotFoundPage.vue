<script setup>
import HomeIcon from "@/components/icons/HomeIcon.vue";

</script>


<template>
    <div class="error">
        <div class="container">
            <div class="error__content">
                <div class="error__info">
                    <div class="error__left">
                        <h2 class="error__title">OOOPS ...</h2>
                        <h3 class="error__sub">Page not found</h3>
                        <RouterLink :to="'/'"> <button class="button" role="button">Home <HomeIcon/></button></RouterLink>
                    </div>
                    <div class="error__right">
                        <img class="error__img" src="../assets/images/error.png" alt="">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
