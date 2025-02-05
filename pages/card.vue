<template>
  <div class="card">
    <div class="container">
      <div class="row">
        <div class="card-left">
          <h1 class="card-left__title">Ваш заказ</h1>
          <div class="card-left__list">
            <div class="card-left__item" v-for="item in cards" :key="item">
              <img class="card-left__item--img" :src="item.img" :alt="images" />
              <div class="card-left__item--info">
                <h1 class="card-left__item--name">{{ item.name }}</h1>
                <p class="card-left__item--color">
                  Цвет: <span> {{ item.color }}</span>
                </p>
                <p class="card-left__item--size">
                  Размер: <span>{{ item.size }}</span>
                </p>
                <div class="card-left__item--count">
                  <button @click="item.count--">-</button>
                  <p>{{ item.count }}</p>
                  <button @click="item.count++">+</button>
                </div>
              </div>
              <div class="card-left__item--right">
                <button class="card-left__item--right-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                    />
                  </svg>
                </button>
                <h1 class="card-left__item--right-price">{{ item.price }}$</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="card-right">
          <h1 class="card-right__title">Итого к оплате</h1>
          <div class="card-right__list">
            <div class="card-right__item">
              <p class="card-right__item--text">
                <span>Всего товаров:</span>
                <span>3 шт</span>
              </p>
            </div>
            <div class="card-right__item">
              <p class="card-right__item--text">
                <span>Цена:</span>
                <span>2300 $</span>
              </p>
            </div>
            <div class="card-right__item">
              <p class="card-right__item--text">
                <span>Скидка:</span>
                <span>- 680 $</span>
              </p>
            </div>
          </div>
          <div class="card-right__TotalPrice">
            <h4>Итого к оплате:</h4>
            <h1>2300 $</h1>
          </div>
          <p class="card-right__text">Без учета возможной стоимости доставки</p>
          <div class="card-right__paymentMethod">
            <div class="card-right__paymentMethod--header" @click="showBody()">
              <p>способ оплаты</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
                />
              </svg>
            </div>
            <div class="card-right__paymentMethod--body">
              <div class="card-right__paymentMethod--item">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethodCard"
                  @change="showBody()"
                />
                <label for="paymentMethodCard">оПЛАТА КАРТОЙ</label>
              </div>
              <div class="card-right__paymentMethod--item">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethodCash"
                  @change="showBody()"
                />
                <label for="paymentMethodCash">оПЛАТА НАЛИЧНЫМИ</label>
              </div>
            </div>
          </div>
          <button class="card-right__btn">Оформить заказ</button>
          <p class="card-right__text">Укажите способ оплаты</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = ref([
  {
    id: 0,
    name: "Спортивный костюм “BOSS Спортивный костюм “BOSS Спортивный костюм “BOSS”",
    color: "Черный",
    size: "M",
    count: 1,
    price: 310,
    img: "./detail-one.png",
  },
  {
    id: 1,
    name: "Спортивный костюм “BOSS”",
    color: "белий",
    size: "L",
    count: 1,
    price: 410,
    img: "./detail-two.png",
  },
  {
    id: 2,
    name: "Спортивный костюм “BOSS”",
    color: "Желтый",
    size: "XL",
    count: 1,
    price: 200,
    img: "./detail-three.png",
  },
  {
    id: 3,
    name: "Спортивный костюм “BOSS”",
    color: "красный",
    size: "M",
    count: 1,
    price: 500,
    img: "./detail-four.png",
  },
]);

function showBody() {
  document
    .querySelector(".card-right__paymentMethod--body")
    .classList.toggle("active");
}
</script>

<style lang="scss" scoped></style>
