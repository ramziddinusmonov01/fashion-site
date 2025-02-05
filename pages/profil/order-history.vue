<template>
  <div class="order">
    <div class="container">
      <h1 class="profil-title">История заказов</h1>
      <table class="order-table">
        <thead>
          <tr>
            <td class="order-table__td" v-for="item in columns" :key="item">
              {{ item.label }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in 4" :key="item">
            <td class="order-table__td">#5653</td>
            <td class="order-table__td">27/06/2023</td>
            <td class="order-table__td">В обработке</td>
            <td class="order-table__td">350 $</td>
          </tr>
        </tbody>
      </table>
      <div class="order-cards">
        <div class="order-cards__item" v-for="item in cardsInfo" :key="item">
          <h4>НОМЕР: <span>{{ item.number }}</span></h4>
          <p>СТАТУС: <span>{{ item.status }}</span></p>
          <p>ДАТА: <span>{{ item.date }}</span></p>
          <p>ИТОГ: <span>{{ item.all }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profil",
});

const columns = [
  {
    key: "number",
    label: "Номер",
  },
  {
    key: "date",
    label: "Дата",
  },
  {
    key: "status",
    label: "Статус",
  },
  {
    key: "all",
    label: "Итог",
  },
];

const cardsInfo = ref([
  {
    id: 0,
    number: "#5653",
    status: "В обработке",
    date: "27/06/2024",
    all: "350 $",
  },
  {
    id: 0,
    number: "#5653",
    status: "В обработке",
    date: "27/06/2024",
    all: "350 $",
  },
  {
    id: 0,
    number: "#5653",
    status: "В обработке",
    date: "27/06/2024",
    all: "350 $",
  },
]);
</script>

<style lang="scss" scoped></style>
