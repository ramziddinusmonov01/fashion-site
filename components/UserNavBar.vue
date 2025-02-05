<template>
  <nav class="nav">
    <div class="container">
      <div class="hamburger" @click="active_navModal = true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav-show" :class="{ active: show_lang }">
        <div class="nav-modal" :class="{ 'active-modal': active_navModal }">
          <div class="nav-modal__header">
            <NuxtLink to="/user-indexuser-index">Logo</NuxtLink>
            <button>X</button>
          </div>
          <div class="nav-modal__list">
            <NuxtLink class="nav__list-item" to="/user-index">Главная</NuxtLink>
            <NuxtLink class="nav__list-item" to="/user-index">Новинки</NuxtLink>
            <NuxtLink class="nav__list-item" to="/user-index">Скидки</NuxtLink>
            <NuxtLink
              class="nav__list-item"
              to="/user-index"
              @click="activeModalDropdown = !activeModalDropdown"
            >
              Еще
              <img
                :style="{
                  transform: activeModalDropdown
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
                }"
                src="~/assets/images/svg/arrow-bottom.svg"
                alt="icone"
              />
            </NuxtLink>
            <div
              class="nav-modal__dropdown"
              :class="{ active: activeModalDropdown }"
            >
              <div class="nav-modal__dropdown--header">
                <button @click="activeDropdown = false">
                  <svg
                    width="20px"
                    height="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
              <div class="nav-modal__dropdown--list">
                <div class="nav-modal__dropdown--item">
                  <h2 class="nav-dropdown-title">
                    Women's Clothing Collection
                  </h2>
                  <div class="nav-modal__dropdown--list">
                    <div class="nav-modal__dropdown--list--item">
                      <img src="~/assets/images/svg/dress.svg" alt="icone" />
                      <div class="nav-modal__dropdown--list--flex">
                        <h2><NuxtLink to="/user-index">Dresses</NuxtLink></h2>
                      </div>
                    </div>
                    <div class="nav-modal__dropdown--list--item">
                      <img src="~/assets/images/svg/necklace.svg" alt="icone" />
                      <div class="nav-modal__dropdown--list--flex">
                        <h2>
                          <NuxtLink to="/user-index">Accessories</NuxtLink>
                        </h2>
                      </div>
                    </div>
                    <div class="nav-modal__dropdown--list--item">
                      <img
                        src="~/assets/images/svg/high-heels.svg"
                        alt="icone"
                      />
                      <div class="nav-modal__dropdown--list--flex">
                        <h2>
                          <NuxtLink to="/user-index">Shoes</NuxtLink>
                        </h2>
                      </div>
                    </div>
                    <div class="nav-modal__dropdown--list--item">
                      <img src="~/assets/images/svg/clothes.svg" alt="icone" />
                      <div class="nav-modal__dropdown--list--flex">
                        <h2>
                          <NuxtLink to="/user-index">Outerwear</NuxtLink>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nav-modal__dropdown--item">
                  <h2 class="nav-dropdown-title">Men's Clothing Collection</h2>
                  <div class="nav-modal__dropdown--list">
                    <div class="nav-modal__dropdown--list--item">
                      <img src="~/assets/images/svg/tshirt.svg" alt="icone" />
                      <div class="nav-modal__dropdown--list--flex">
                        <h2>
                          <NuxtLink to="/user-index">Shirts</NuxtLink>
                        </h2>
                      </div>
                    </div>
                    <div class="nav-modal__dropdown--list--item">
                      <img src="~/assets/images/svg/trousers.svg" alt="icone" />
                      <div class="nav-modal__dropdown--list--flex">
                        <h2>
                          <NuxtLink to="/user-index">Pants</NuxtLink>
                        </h2>
                      </div>
                    </div>
                    <div class="nav-modal__dropdown--list--item">
                      <img src="~/assets/images/svg/tie.svg" alt="icone" />
                      <div class="nav-modal__dropdown--list--flex">
                        <h2>
                          <NuxtLink to="/user-index">Suits</NuxtLink>
                        </h2>
                      </div>
                    </div>
                    <div class="nav-modal__dropdown--list--item">
                      <img src="~/assets/images/svg/watches.svg" alt="icone" />
                      <div class="nav-modal__dropdown--list--flex">
                        <h2>
                          <NuxtLink to="/user-index">Accessories</NuxtLink>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/user-index" class="nav__logo">Logo</NuxtLink>

        <div class="nav__list">
          <NuxtLink class="nav__list-item" to="/user-index">Главная</NuxtLink>
          <NuxtLink class="nav__list-item" to="/new-collection">Новинки</NuxtLink>
          <NuxtLink class="nav__list-item" to="/discount-product">Скидки</NuxtLink>
          <NuxtLink
            class="nav__list-item"
            to="/user-index"
            @click="activeDropdown = !activeDropdown"
          >
            Еще
            <img
              :style="{
                transform: activeDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
              src="~/assets/images/svg/arrow-bottom.svg"
              alt="icone"
            />
          </NuxtLink>
          <div class="nav__dropdown" :class="{ active: activeDropdown }">
            <div class="container">
              <div class="nav__dropdown-header">
                <button @click="activeDropdown = false">
                  <svg
                    width="20px"
                    height="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
              <div class="nav__dropdown-item">
                <h2 class="nav-dropdown-title">Women's Clothing Collection</h2>
                <div class="nav__dropdown-list">
                  <div class="nav__dropdown-list--item">
                    <img src="~/assets/images/svg/dress.svg" alt="icone" />
                    <div class="nav__dropdown-list--flex">
                      <h2><NuxtLink to="/user-index">Dresses</NuxtLink></h2>
                      <div>
                        <p>Tops</p>
                        <p>Bottoms</p>
                        <p>More</p>
                      </div>
                    </div>
                  </div>
                  <div class="nav__dropdown-list--item">
                    <img src="~/assets/images/svg/necklace.svg" alt="icone" />
                    <div class="nav__dropdown-list--flex">
                      <h2>
                        <NuxtLink to="/user-index">Accessories</NuxtLink>
                      </h2>
                      <div>
                        <p>Bags</p>
                        <p>Jewelry</p>
                        <p>Hats</p>
                      </div>
                    </div>
                  </div>
                  <div class="nav__dropdown-list--item">
                    <img src="~/assets/images/svg/high-heels.svg" alt="icone" />
                    <div class="nav__dropdown-list--flex">
                      <h2>
                        <NuxtLink to="/user-index">Shoes</NuxtLink>
                      </h2>
                      <div>
                        <p>Sneakers</p>
                        <p>Heels</p>
                        <p>Sandals</p>
                      </div>
                    </div>
                  </div>
                  <div class="nav__dropdown-list--item">
                    <img src="~/assets/images/svg/clothes.svg" alt="icone" />
                    <div class="nav__dropdown-list--flex">
                      <h2>
                        <NuxtLink to="/user-index">Outerwear</NuxtLink>
                      </h2>
                      <div>
                        <p>Coats</p>
                        <p>Jackets</p>
                        <p>Blazers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nav__dropdown-item">
                <h2 class="nav-dropdown-title">Men's Clothing Collection</h2>
                <div class="nav__dropdown-list">
                  <div class="nav__dropdown-list--item">
                    <img src="~/assets/images/svg/tshirt.svg" alt="icone" />
                    <div class="nav__dropdown-list--flex">
                      <h2>
                        <NuxtLink to="/user-index">Shirts</NuxtLink>
                      </h2>
                      <div>
                        <p>Tees</p>
                        <p>Polos</p>
                        <p>Dress Shirts</p>
                      </div>
                    </div>
                  </div>
                  <div class="nav__dropdown-list--item">
                    <img src="~/assets/images/svg/trousers.svg" alt="icone" />
                    <div class="nav__dropdown-list--flex">
                      <h2>
                        <NuxtLink to="/user-index">Pants</NuxtLink>
                      </h2>
                      <div>
                        <p>Jeans</p>
                        <p>Chinos</p>
                        <p>Shorts</p>
                      </div>
                    </div>
                  </div>
                  <div class="nav__dropdown-list--item">
                    <img src="~/assets/images/svg/tie.svg" alt="icone" />
                    <div class="nav__dropdown-list--flex">
                      <h2>
                        <NuxtLink to="/user-index">Suits</NuxtLink>
                      </h2>
                      <div>
                        <p>Formal</p>
                        <p>Casual Suits</p>
                      </div>
                    </div>
                  </div>
                  <div class="nav__dropdown-list--item">
                    <img src="~/assets/images/svg/watches.svg" alt="icone" />
                    <div class="nav__dropdown-list--flex">
                      <h2>
                        <NuxtLink to="/user-index">Accessories</NuxtLink>
                      </h2>
                      <div>
                        <p>Ties</p>
                        <p>Belts</p>
                        <p>Hats</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nav__dropdown" :class="{ active: activeDropdown }">
          <div class="container">
            <div class="nav__dropdown-header">
              <button @click="activeDropdown = false">
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
            <div class="nav__dropdown-item">
              <h2 class="nav-dropdown-title">Women's Clothing Collection</h2>
              <div class="nav__dropdown-list">
                <div class="nav__dropdown-list--item">
                  <img src="~/assets/images/svg/dress.svg" alt="icone" />
                  <div class="nav__dropdown-list--flex">
                    <h2><NuxtLink to="/user-index">Dresses</NuxtLink></h2>
                    <div>
                      <p>Tops</p>
                      <p>Bottoms</p>
                      <p>More</p>
                    </div>
                  </div>
                </div>
                <div class="nav__dropdown-list--item">
                  <img src="~/assets/images/svg/necklace.svg" alt="icone" />
                  <div class="nav__dropdown-list--flex">
                    <h2>
                      <NuxtLink to="/user-index">Accessories</NuxtLink>
                    </h2>
                    <div>
                      <p>Bags</p>
                      <p>Jewelry</p>
                      <p>Hats</p>
                    </div>
                  </div>
                </div>
                <div class="nav__dropdown-list--item">
                  <img src="~/assets/images/svg/high-heels.svg" alt="icone" />
                  <div class="nav__dropdown-list--flex">
                    <h2>
                      <NuxtLink to="/user-index">Shoes</NuxtLink>
                    </h2>
                    <div>
                      <p>Sneakers</p>
                      <p>Heels</p>
                      <p>Sandals</p>
                    </div>
                  </div>
                </div>
                <div class="nav__dropdown-list--item">
                  <img src="~/assets/images/svg/clothes.svg" alt="icone" />
                  <div class="nav__dropdown-list--flex">
                    <h2>
                      <NuxtLink to="/user-index">Outerwear</NuxtLink>
                    </h2>
                    <div>
                      <p>Coats</p>
                      <p>Jackets</p>
                      <p>Blazers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav__dropdown-item">
              <h2 class="nav-dropdown-title">Men's Clothing Collection</h2>
              <div class="nav__dropdown-list">
                <div class="nav__dropdown-list--item">
                  <img src="~/assets/images/svg/tshirt.svg" alt="icone" />
                  <div class="nav__dropdown-list--flex">
                    <h2>
                      <NuxtLink to="/user-index">Shirts</NuxtLink>
                    </h2>
                    <div>
                      <p>Tees</p>
                      <p>Polos</p>
                      <p>Dress Shirts</p>
                    </div>
                  </div>
                </div>
                <div class="nav__dropdown-list--item">
                  <img src="~/assets/images/svg/trousers.svg" alt="icone" />
                  <div class="nav__dropdown-list--flex">
                    <h2>
                      <NuxtLink to="/user-index">Pants</NuxtLink>
                    </h2>
                    <div>
                      <p>Jeans</p>
                      <p>Chinos</p>
                      <p>Shorts</p>
                    </div>
                  </div>
                </div>
                <div class="nav__dropdown-list--item">
                  <img src="~/assets/images/svg/tie.svg" alt="icone" />
                  <div class="nav__dropdown-list--flex">
                    <h2>
                      <NuxtLink to="/user-index">Suits</NuxtLink>
                    </h2>
                    <div>
                      <p>Formal</p>
                      <p>Casual Suits</p>
                    </div>
                  </div>
                </div>
                <div class="nav__dropdown-list--item">
                  <img src="~/assets/images/svg/watches.svg" alt="icone" />
                  <div class="nav__dropdown-list--flex">
                    <h2>
                      <NuxtLink to="/user-index">Accessories</NuxtLink>
                    </h2>
                    <div>
                      <p>Ties</p>
                      <p>Belts</p>
                      <p>Hats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button class="nav-sign" v-if="user_info == null">
            <NuxtLink to="/user-indexregister">
              <span> sign Up </span>
            </NuxtLink>
          </button>
          <div v-else class="nav-sign__icons">
            <NuxtLink to="/profil">
              <img
                width="30"
                height="30"
                src="~/assets/images/svg/user.svg"
                alt="icone"
              />
            </NuxtLink>
            <NuxtLink to="/card">
              <img
                width="30"
                height="30"
                src="~/assets/images/svg/shopping-cart.svg"
                alt="icone"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="nav-lang"
        @click="show_lang = !show_lang"
        :class="{ active: show_lang }"
      >
        <div class="nav-lang__header">
          <img src="~/assets/images/svg/globe.svg" alt="icone" />
          <h1>RU</h1>
        </div>
        <div class="nav-lang__option">
          <h1>EN</h1>
          <h1>UZ</h1>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
////// IMPORTS /////////////////////////////////////////////////////////////////
/* STORE */
import { useStore } from "~/store/store.js";
const store = useStore();

const activeDropdown = ref(false);
const activeModalDropdown = ref(false);
const active_navModal = ref(false);
const show_lang = ref(false);
const user_info = ref(JSON.parse(localStorage.getItem("registerUser")));
</script>
