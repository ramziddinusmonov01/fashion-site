<template>
    <div>
      <h1 class="profil-right__title">Приветствуем, Елизавета!</h1>
      <form class="profil-right__form">
        <div class="profil-right__item">
          <label for="name">Ваше имя:</label>
          <input type="text" id="name">
        </div>
        <div class="profil-right__item">
          <label for="lastname">Фамилия:</label>
          <input type="text" id="lastname">
        </div>
        <div class="profil-right__item">
          <label for="email">Email адрес</label>
          <input type="email" id="email">
        </div>
        <div class="profil-right__item">
          <label for="number">Номер телефона</label>
          <input type="text" id="number">
        </div>
        <div class="profil-right__item">
         <button class="profil-right__item--btn">Сохранить</button>
        </div>
      </form>
    </div>
</template>

<script setup>
definePageMeta({
  layout: "profil",
});
</script>

<style lang="scss" scoped>

</style>