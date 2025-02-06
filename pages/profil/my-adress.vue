<template>
  <div class="adress">
    <div class="container">
      <h1 class="profil-title">Мои адреса</h1>
      <div class="adress-cards">
        <div class="adress-cards__item" v-for="item in adressVar" :key="item">
          <span class="adress-cards__id">Адрес доставки #{{ item.id }}</span>
          <h1 class="adress-cards__name">{{ item.name }}</h1>
          <p class="adress-cards__location">{{ item.adress_name }}</p>
          <h2 class="adress-cards__number">
            <span>Телефон</span>
            {{ item.phone_number }}
          </h2>
          <h2 class="adress-cards__email">
            <span>Email</span>
            {{ item.email }}
          </h2>

          <div class="adress-cards__footer">
            <NuxtLink to="/">
              <span>
                <Icon name="material-symbols:ink-pen" />
              </span>
              Редактировать
            </NuxtLink>
            <button>
              <span>
                <Icon name="ic:outline-close" />
              </span>
              Удалить
            </button>
          </div>
        </div>
      </div>
      <NuxtLink class="adress-addNew" to="/">
        <button>
            <Icon name="gridicons:create" />
        </button>
        Добавить новый
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profil",
});

const adressVar = ref([
  {
    id: 1,
    name: "Василий Иванов",
    adress_name: "056734, Mосква, Poccия, улица Варшавская, 37/5, кв.574",
    phone_number: "+7 (956) 373-46-33",
    email: "yavasyaivanov@gmail.com",
  },
  {
    id: 2,
    name: "Василий Иванов",
    adress_name: "056734, Mосква, Poccия, улица Варшавская, 37/5, кв.574",
    phone_number: "+7 (956) 373-46-33",
    email: "yavasyaivanov@gmail.com",
  },
  {
    id: 3,
    name: "Василий Иванов",
    adress_name: "056734, Mосква, Poccия, улица Варшавская, 37/5, кв.574",
    phone_number: "+7 (956) 373-46-33",
    email: "yavasyaivanov@gmail.com",
  },
]);
</script>

<style lang="scss" scoped>
</style>