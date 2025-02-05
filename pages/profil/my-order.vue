<template>
  <div cass="myOrder">
    <div class="container">
      <h1 class="profil-title">Мои заказы</h1>
      <div class="myOrder-info">
        <h1 class="myOrder-info__id">Заказ #4353</h1>
        <div class="myOrder-info__status">
          <p>Был оформлен <strong>27 Июня в 12:34</strong> - статус заказа</p>
          <button>Отправлен</button>
        </div>
        <div class="myOrder-info__table">
          <table>
            <thead>
              <tr>
                <td>Товар</td>
                <td>Итого</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tablesVar" :key="item">
                <td>{{ item.product }} <span>X{{ item.count }}</span></td>
                <td>{{ item.price }}$</td>
              </tr>
              <tr>
                <td>Всего</td>
                <td>1 150 $</td>
              </tr>
              <tr>
                <td>Скидка</td>
                <td>- 65 $</td>
              </tr>
              <tr>
                <td>Доставка</td>
                <td>30 $</td>
              </tr>
              <tr>
                <td>Итого</td>
                <td>1 150 $</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profil",
});

const tablesVar = ref([
  {
    id: 0,
    product: "Кроссовки Nike Air Max 3000",
    price: 210,
    count: 3,
  },
  {
    id: 1,
    product: "Футболка Lacoste белая поло",
    price: 150,
    count: 1,
  },
  {
    id: 1,
    product: "Кроссовки Nike Air Max 3000",
    price: 800,
    count: 2,
  },
]);
</script>

<style lang="scss" scoped>
</style>