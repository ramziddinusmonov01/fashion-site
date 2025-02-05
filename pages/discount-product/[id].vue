<template>
  <div class="disCountDetail">
    <div class="container">
      <div class="row">
        <div class="disCountDetail-imgs">
          <div class="disCountDetail-imgs__list">
            <div
              class="disCountDetail-imgs__item"
              v-for="item in imgs"
              :key="item"
              @click="changeImg(item)"
            >
              <img ref="main-img" :src="item.img" alt="image" />
            </div>
          </div>
          <div class="disCountDetail-imgs__main">
            <img :src="mainImg" alt="images" />
          </div>
          <div class="disCountDetail-imgs__slider">
            <Swiper
              :modules="[SwiperAutoplay, SwiperPagination]"
              :loop="false"
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
              }"
              :slides-per-view="1"
              :space-between="10"
              :pagination="{
                clickable: true,
              }"
            >
              <SwiperSlide
                class="disCountDetail-imgs__slider--item"
                v-for="item in imgs"
                :key="item"
              >
                <img :src="item.img" alt="images" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="disCountDetail-info">
          <h1 class="disCountDetail-info__title">Спортивный костюм “BOSS”</h1>
          <div class="disCountDetail-prices">
            <h1 class="disCountDetail-detail__disPrice">$311</h1>
            <h1 class="disCountDetail-detail__price">$450</h1>
          </div>
          <div class="disCountDetail-sizes">
            <p class="disCountDetail-sizes__text">Выберите размер</p>
            <div class="disCountDetail-sizes__list">
              <div
                class="disCountDetail-sizes__list--item"
                :class="{ active: activeIndex === index }"
                @click="setActive(index)"
                v-for="(item, index) in sizez"
                :key="item"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="disCountDetail-colors">
            <p class="disCountDetail-colors__text">Выберите цвет</p>
            <div class="disCountDetail-colors__list">
              <div
                class="disCountDetail-colors__list--item"
                :class="{ active: activeIndexColor === index }"
                @click="setActiveColor(index)"
                :style="{ backgroundColor: getColor(index) }"
                v-for="(item, index) in 6"
                :key="item"
              ></div>
            </div>
          </div>
          <div class="disCountDetail-addCard">
            <div class="disCountDetail-addCard__number">1</div>
            <button class="disCountDetail-addCard__btn">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <div class="disCountDetail-similar">
        <h1 class="disCountDetail-similar__title">Похожие товары</h1>
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            320: {
              slidesPerView: 1, // Kichik mobil ekranlar uchun
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2, // Katta mobil ekranlar uchun
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2, // Planshetlar uchun
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // Katta planshetlar va kichik kompyuterlar uchun
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3, // Katta ekranlar uchun
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4, // Juda katta ekranlar uchun
              spaceBetween: 40,
            },
          }"
        >
          <SwiperSlide
            class="comment-slider"
            v-for="item in disCountProduct"
            :key="item"
          >
            <DiscountCards :item="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const imgs = ref([
  {
    id: 0,
    img: "../detail-one.png",
  },
  {
    id: 1,
    img: "../detail-two.png",
  },
  {
    id: 2,
    img: "../detail-three.png",
  },
  {
    id: 3,
    img: "../detail-four.png",
  },
  {
    id: 4,
    img: "../detail-five.png",
  },
]);
const mainImg = ref(imgs.value[0].img);
const activeIndex = ref(null);
const activeIndexColor = ref(null);
function changeImg(item) {
  mainImg.value = item.img;
}

const setActive = (index) => {
  activeIndex.value = index;
};

const sizez = ref([
  { id: 1, name: "S" },
  { id: 2, name: "M" },
  { id: 3, name: "L" },
  { id: 4, name: "XL" },
  { id: 5, name: "XXL" },
]);

const active_color = ref([
  { id: 1, name: "#927876" },
  { id: 2, name: "#D4D4D4" },
  { id: 3, name: "#FD9696" },
  { id: 4, name: "#FDC796" },
]);

const getColor = (index) => {
  const color = active_color.value[index % active_color.value.length];
  return color?.name || "transparent";
};

const setActiveColor = (index) => {
  activeIndexColor.value = index;
};

// similar products
const disCountProduct = ref([
  {
    id: 0,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    present: "-24",
    price: "293",
    disCountPrice: "580",
  },
  {
    id: 1,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    present: "-24",
    price: "293",
    disCountPrice: "580",
  },
  {
    id: 2,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    present: "-24",
    price: "293",
    disCountPrice: "580",
  },
  {
    id: 3,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    present: "-24",
    price: "293",
    disCountPrice: "580",
  },
  {
    id: 4,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    present: "-24",
    price: "293",
    disCountPrice: "580",
  },
  {
    id: 5,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    present: "-24",
    price: "293",
    disCountPrice: "580",
  },
  {
    id: 6,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    present: "-24",
    price: "293",
    disCountPrice: "580",
  },
  {
    id: 7,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    present: "-24",
    price: "293",
    disCountPrice: "580",
  },
  {
    id: 8,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    present: "-24",
    price: "293",
    disCountPrice: "580",
  },
]);

onMounted(() => {
  document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
    bullet.style.width = "40px";
    bullet.style.height = "4px";
    bullet.style.borderRadius = "5px";
    bullet.style.background = "#fff";
    bullet.style.margin = "0 10px";
    bullet.style.opacity = "1";
  });
});
</script>

<style lang="css" scoped>

</style>
