<template>
  <div style="overflow-x: hidden">
    <UserNavBar />
    <div class="profil">
      <div class="container">
        <div class="row">
          <div class="profil-left" :class="{ active: show_sidebar }">
            <button
              class="profil-left__hamburger"
              @click="show_sidebar = !show_sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8h15M5 16h22M5 24h22M5 11l3-3l-3-3"
                />
              </svg>
            </button>
            <div class="profil-left__menus" :class="{ active: show_sidebar }">
              <ProfilSidebar />
            </div>
          </div>
          <div class="profil-right">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script setup>
const show_sidebar = ref(false);
</script>

<style lang="scss" scoped></style>
