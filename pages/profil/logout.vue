<template>
  <div class="logout">
    <h1 class="profil-title">Выход</h1>
    <div class="logout-card">
      <p class="logout-card__text">Вы хотите выйти ?</p>
      <div class="logout-card__btns">
        <button @click="logout">Да</button>
        <button @click="gotoHome">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
definePageMeta({
  layout: "profil",
});

function logout() {
  localStorage.removeItem("registerUser");
  router.push("/");
}

function gotoHome() {
  router.push("/");
}
</script>

<style lang="scss" scoped>
</style>