<template>
  <div class="change-password">
    <h1 class="profil-title">Смена пароля</h1>
    <div class="change-password__form">
      <div class="change-password__item">
        <label for="lastPassword">Текущий пароль:</label>
        <input
          :type="lastPasswordSee ? 'text' : 'password'"
          id="lastPassword"
          placeholder="********"
        />
        <button @click="lastPasswordSee = !lastPasswordSee">
          <Icon
            :name="
              lastPasswordSee
                ? 'ic:outline-remove-red-eye'
                : 'ic:outline-visibility-off'
            "
          />
        </button>
      </div>
      <div class="change-password__item">
        <label for="newPassword">Новый пароль:</label>
        <input
          :type="newPasswwordSee ? 'text' : 'password'"
          id="newPassword"
          placeholder="********"
        />
        <button @click="newPasswwordSee = !newPasswwordSee">
          <Icon
            :name="
              newPasswwordSee
                ? 'ic:outline-remove-red-eye'
                : 'ic:outline-visibility-off'
            "
          />
        </button>
      </div>
      <div class="change-password__item">
        <label for="repeatPassword">Новый пароль еще раз:</label>
        <input
          :type="repeatPasswordSee ? 'text' : 'password'"
          id="repeatPassword"
          placeholder="********"
        />
        <button @click="repeatPasswordSee = !repeatPasswordSee">
          <Icon
            :name="
              repeatPasswordSee
                ? 'ic:outline-remove-red-eye'
                : 'ic:outline-visibility-off'
            "
          />
        </button>
      </div>
    </div>
    <button class="change-password__btn">Сохранить</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profil",
});
const lastPasswordSee = ref(false);
const newPasswwordSee = ref(false);
const repeatPasswordSee = ref(false);
</script>

<style lang="scss" scoped>
</style>