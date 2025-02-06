<template>
  <div>
    <!-- HEADER -->
    <header class="header">
      <div class="cursor"></div>
      <div class="cursor-follow"></div>
      <div class="container">
        <div class="header-info">
          <h1 class="header-info__title">
            Medium length hero headline goes here
          </h1>
          <p class="header-info__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div class="header-info__btns headr-btn">
            <button>
              Перейти
            </button>
          </div>
        </div>
        <div class="header-imgs">
          <img
            class="header-imgs__bg header-one"
            src="~/assets/images/png/header-bg.png"
            alt="bg"
          />
          <img
            class="header-imgs__bg header-two"
            src="~/assets/images/png/header-bg.png"
            alt="bg"
          />
          <img
            class="header-imgs__main"
            src="~/assets/images/png/header-main.png"
            alt="bg"
          />
        </div>
      </div>
    </header>
    <!-- HEADER END -->

    <!-- COLLECTION  -->
    <div class="collection">
      <div class="container">
        <h1 class="collection-title">Новая коллекция</h1>
        <div class="collection-cards">
          <div
            class="collection-cards__item"
            v-for="item in collections"
            :key="item"
          >
            <img
              class="collection-item__img"
              :src="item.img"
              :alt="item.name"
            />
            <h1 class="collection-item__name">{{ item.name }}</h1>
            <h4 class="collection-item__price">{{ item.price }}</h4>
          </div>
        </div>

        <NuxtLink to="/new-collection" class="collection-btn">Открыть магазин</NuxtLink>
      </div>
    </div>
    <!-- COLLECTION  END -->

    <!-- HERO -->
    <div class="hero">
      <div class="container">
        <div class="hero-row">
          <div class="hero-left">
            <h1 class="hero-left__heading">Stylish</h1>
            <h1 class="hero-left__title">
              Discover the Latest Fashion Trends for Women
            </h1>
          </div>
          <div class="hero-right">
            <p class="hero-right__desc">
              At our online clothing store, we offer a wide range of stylish and
              sustainable fashion for women. Enjoy free shipping on all orders
              and hassle-free returns for a worry-free shopping experience.
            </p>
          </div>
        </div>
        <div class="hero-list">
          <!-- HERO LIST ITEM ONE -->
          <div
            class="hero-list__item"
           
          >
            <img
              class="hero-list__item--img"
              src="~/assets/images/svg/delivery-truck.svg"
              alt="icone"
            />
            <h2 class="hero-list__item--title">Free Shipping</h2>
            <p class="hero-list__item--desc">
              Enjoy free shipping on all orders.
            </p>
          </div>
          <!-- HERO LIST ITEM TWO -->
          <div
            class="hero-list__item"
            
          >
            <img
              class="hero-list__item--img"
              src="~/assets/images/svg/distribution.svg"
              alt="icone"
            />
            <h2 class="hero-list__item--title">Easy Returns</h2>
            <p class="hero-list__item--desc">
              Hassle-free returns for a worry-free shopping experience.
            </p>
          </div>
          <!-- HERO LIST ITEM THREE -->
          <div
            class="hero-list__item"
            
          >
            <img
              class="hero-list__item--img"
              src="~/assets/images/svg/hanger.svg"
              alt="icone"
            />
            <h2 class="hero-list__item--title">Sustainable Fashion</h2>
            <p class="hero-list__item--desc">
              Shop with a conscience and choose sustainable fashion.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- HERO END -->

    <!-- SKIDKA -->
    <div class="skidka">
      <div class="container">
        <div class="skidka-info">
          <h1 class="skidka-info__title">скидка до 40%</h1>
          <p class="skidka-info__desc">Специальные и выгодные предложения</p>
          <NuxtLink class="skidka-info__link" to="/discount-product">
            Перейти
            <img src="~/assets/images/svg/arrow-right.svg" alt="icone" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- SKIDKA EMD -->

    <!-- CARDS -->
    <div class="cards">
      <div class="container">
        <div class="cards-list">
          <div   class="cards-list__item cards-list__item--one">
            <img src="~assets/images/png/user-cards-img-one.png" alt="image" />
            <h1 class="cards-list__item--title">Модные одежду на ваш вкус</h1>
            <p class="cards-list__item--text">Модные одежду на ваш вкус</p>
          </div>
          <div   class="cards-list__item cards-list__item--two">
            <img src="~assets/images/png/user-cards-img-two.png" alt="image" />
            <h1 class="cards-list__item--title">Трендовые очки</h1>
            <p class="cards-list__item--text">Успейте пока в наличии</p>
          </div>
          <div    class="cards-list__item cards-list__item--three">
            <img
              src="~assets/images/png/user-cards-img-three.png"
              alt="image"
            />
            <h1 class="cards-list__item--title">Распродажа обуви</h1>
            <p class="cards-list__item--text">Скоро закончиться</p>
          </div>
          <div  class="cards-list__item cards-list__item--four">
            <img src="~assets/images/png/user-cards-img-four.png" alt="image" />
            <div>
              <h1 class="cards-list__item--title">Обновление женской одежды</h1>
              <p class="cards-list__item--text">
                Новые трендовые образы на это лето
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CARDS END -->
     
  <!-- BEST SELLERS -->
  <div class="bestSellers">
      <div class="container">
        <h1 class="bestSellers-title">Best Sellers</h1>
        <p class="bestSellers-desc">
          Discover our top-selling products and customer favorites.
        </p>

        <Swiper
          class="bestSellers-swiper"
         
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :pagination="{ clickable: true }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <SwiperSlide class="bestSellers-slider" v-for="item in 5" :key="item">
            <img src="~/assets/images/png/best-sellers.png" alt="icone" />
          </SwiperSlide>
        </Swiper>
        <div class="bestSellers-nav">
          <button class="bestSellers-nav__one swiper-button-prev old">
            <img src="~/assets/images/svg/arrow-btn.svg" alt="icone" />
          </button>
          <button class="bestSellers-nav__two swiper-button-next keyn">
            <img src="~/assets/images/svg/arrow-btn.svg" alt="icone" />
          </button>
        </div>
      </div>
    </div>
    <!-- BEST SELLERS END -->

  </div>
</template>

<script setup>
definePageMeta({
  layout: "user-index",
});

const collections = ref([
  {
    id: 0,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    price: "293 $",
  },
  {
    id: 1,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    price: "293 $",
  },
  {
    id: 2,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    price: "293 $",
  },
  {
    id: 3,
    img: "../user-collection.png",
    name: "Спортивный костюм “BOSS”",
    price: "293 $",
  },
]);
</script>

<style lang="scss" scoped></style>
