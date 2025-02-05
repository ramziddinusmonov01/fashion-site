<template>
    <div class="discountProduct-cards__item">
      <div class="discountProduct-item__img">
        <img :src="item.img" alt="images" />
        <span class="discountProduct-item__present">{{ item.present }}%</span>
      </div>
      <h1 class="discountProduct-item__name">
        <NuxtLink :to="`/new-collection/${item.id}`">
          {{ item.name }}
        </NuxtLink>
      </h1>
      <div class="discountProduct-item__price">
        <h1 class="discountProduct-item__price--discount">
          {{ item.disCountPrice }} $
        </h1>
        <h1 class="discountProduct-item__price--main">{{ item.price }} $</h1>
      </div>
    </div>
  </template>
  
  <script setup>
  const { item } = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style lang="scss" scoped></style>
  