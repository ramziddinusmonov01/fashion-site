<template>
    <div class="discountProduct">
      <div class="container">
        <div class="discountProduct-header">
          <h1 class="discountProduct-header__title">Товары со скидкой</h1>
          <button class="discountProduct-header__btn">
            <img src="~/assets/images/svg/filter.svg" alt="icone" />
            Сортировать
          </button>
        </div>
  
        <div class="discountProduct-cards">
          <DiscountCards
            v-for="item in disCountProduct"
            :key="item"
            :item="item"
          />
        </div>
  
        <h1 class="discountProduct-seeing-product">
          Показано: 9 из {{ disCountProduct.length }} товаров
        </h1>
        <div class="discountProduct-pagination">
          <button class="discountProduct-pagination__item">1</button>
          <button class="discountProduct-pagination__item">2</button>
          <img src="~/assets/images/svg/arrov-pagination.svg" alt="icone" />
        </div>
        <div class="flex justify-between items-center p-3">
          <UPagination
            v-model="page"
            :page-count="3"
            :total="items.length"
            :ui="{
              wrapper: 'flex items-center gap-3',
              rounded: 'first:rounded-s-md last:rounded-e-md rounded-md',
              base: 'font-medium',
            }"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: "user-index",
  });
  const disCountProduct = ref([
    {
      id: 0,
      img: "./user-collection.png",
      name: "Спортивный костюм “BOSS”",
      present: "-24",
      price: "293",
      disCountPrice: "580",
    },
    {
      id: 1,
      img: "./user-collection.png",
      name: "Спортивный костюм “BOSS”",
      present: "-24",
      price: "293",
      disCountPrice: "580",
    },
    {
      id: 2,
      img: "./user-collection.png",
      name: "Спортивный костюм “BOSS”",
      present: "-24",
      price: "293",
      disCountPrice: "580",
    },
    {
      id: 3,
      img: "./user-collection.png",
      name: "Спортивный костюм “BOSS”",
      present: "-24",
      price: "293",
      disCountPrice: "580",
    },
    {
      id: 4,
      img: "./user-collection.png",
      name: "Спортивный костюм “BOSS”",
      present: "-24",
      price: "293",
      disCountPrice: "580",
    },
    {
      id: 5,
      img: "./user-collection.png",
      name: "Спортивный костюм “BOSS”",
      present: "-24",
      price: "293",
      disCountPrice: "580",
    },
    {
      id: 6,
      img: "./user-collection.png",
      name: "Спортивный костюм “BOSS”",
      present: "-24",
      price: "293",
      disCountPrice: "580",
    },
    {
      id: 7,
      img: "./user-collection.png",
      name: "Спортивный костюм “BOSS”",
      present: "-24",
      price: "293",
      disCountPrice: "580",
    },
    {
      id: 8,
      img: "./user-collection.png",
      name: "Спортивный костюм “BOSS”",
      present: "-24",
      price: "293",
      disCountPrice: "580",
    },
  ]);
  
  const page = ref(1);
  const items = ref(Array(55));
  </script>
  
  <style lang="scss" scoped></style>
  