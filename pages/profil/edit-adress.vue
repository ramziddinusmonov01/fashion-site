<template>
  <div>
    <div class="editAdress">
      <div class="container">
        <h1 class="profil-title">Редактирование адреса</h1>
        <div class="editAdress-form">
          <div class="editAdress-form__item">
            <label for="name">Ваше имя:</label>
            <input type="text" id="name" placeholder="Введите ваше имя" />
          </div>
          <div class="editAdress-form__item">
            <label for="lastname">Фамилия</label>
            <input
              type="text"
              id="lastname"
              placeholder="Введите вашу фамилию"
            />
          </div>
          <div class="editAdress-form__item">
            <label for="country">Страна</label>
            <select id="country">
              <option value="uzbekistn" selected>Узбекистан</option>
              <option value="uzbekistn">Россия</option>
              <option value="uzbekistn">Америка</option>
              <option value="uzbekistn">Казахстанец</option>
            </select>
          </div>
          <div class="editAdress-form__item">
            <label for="city">Город</label>
            <input type="text" id="city" placeholder="Введите город" />
          </div>
          <div class="editAdress-form__item">
            <label for="street">Введите название улицы</label>
            <input
              type="text"
              id="street"
              placeholder="22 / 1000 Введите название улицы"
            />
          </div>
          <div class="editAdress-form__item">
            <label for="numberHome">Номер дома/квартиры</label>
            <input
              type="text"
              id="numberHome"
              placeholder="Введите номер вашего дома"
            />
          </div>
          <div class="editAdress-form__item">
            <label for="email">Email адрес</label>
            <input type="text" id="email" placeholder="Введите email" />
          </div>
          <div class="editAdress-form__item">
            <label for="number">Номер телефона</label>
            <input
              type="text"
              placeholder="Введите номер телефона"
              v-maska="'+998 (##) ###-##-##'"
              v-model="phone"
              @keydown.backspace="inputPhone($event)"
              required
              @input="($event) => (checkNumber = false)"
              d="number"
            />
          </div>
        </div>
        <button class="editAdress-btn">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profil",
});

const phone = ref("+998(");
//> functions
function inputPhone(event) {
  if (event.target.value.length <= 6) {
    // Backspace tugmasi bosilganda malumot o'chmasligi
    if (event.key === "Backspace") {
      event.preventDefault();
    }
  }
}
</script>

<style lang="scss" scoped>
</style>