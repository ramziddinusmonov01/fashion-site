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
            <button>Shop</button>
            <button>Sale</button>
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
          <div class="hero-list__item">
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
          <div class="hero-list__item">
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
          <div class="hero-list__item">
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

    <!-- PERSONAL STYLE -->
    <div class="personalStyle">
      <div class="container">
        <h1 class="personalStyle-title">
          Discover Your Personal Style with Our Expert Styling Services
        </h1>
        <div class="personalStyle-cards">
          <!-- PERSONAL CARDS ITEM ONE -->
          <div class="personalStyle-cards__item">
            <img
              class="personalStyle-cards__item--img"
              src="~/assets/images/png/personal-style-one.png"
              alt="image"
            />
            <h1 class="personalStyle-cards__item--title">
              Get the Perfect Fit with Our Custom Tailoring Service
            </h1>
            <p class="personalStyle-cards__item--desc">
              Our services include personalized styling and custom tailoring to
              ensure you look and feel your best.
            </p>
            <NuxtLink class="personalStyle-cards__item--link" to="/">
              Learn More
              <img
                src="~/assets/images/svg/arrow-bottom-white.svg"
                alt="icone"
              />
            </NuxtLink>
          </div>
          <!-- PERSONAL CARDS ITEM TWO -->
          <div class="personalStyle-cards__item">
            <img
              class="personalStyle-cards__item--img"
              src="~/assets/images/png/personal-style-two.png"
              alt="image"
            />
            <h1 class="personalStyle-cards__item--title">
              Shop the Latest Trends with Our Curated Collections
            </h1>
            <p class="personalStyle-cards__item--desc">
              Browse our carefully curated collections to find the perfect
              pieces for your wardrobe.
            </p>
            <NuxtLink class="personalStyle-cards__item--link" to="/">
              Learn More
              <img
                src="~/assets/images/svg/arrow-bottom-white.svg"
                alt="icone"
              />
            </NuxtLink>
          </div>
          <!-- PERSONAL CARDS ITEM THREE -->
          <div class="personalStyle-cards__item">
            <img
              class="personalStyle-cards__item--img"
              src="~/assets/images/png/personal-style-three.png"
              alt="image"
            />
            <h1 class="personalStyle-cards__item--title">
              Experience the Convenience of Online Shopping with Us
            </h1>
            <p class="personalStyle-cards__item--desc">
              Enjoy the ease and convenience of shopping for stylish clothing
              from the comfort of your own home.
            </p>
            <NuxtLink class="personalStyle-cards__item--link" to="/">
              Learn More
              <img
                src="~/assets/images/svg/arrow-bottom-white.svg"
                alt="icone"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- PERSONAL STYLE END -->

    <!-- FASHION COLLECTION -->
    <div class="fashionCollection">
      <div class="container">
        <div class="fashionCollection-row">
          <div class="fashionCollection-info">
            <h2 class="fashionCollection-info__heading">Stylish</h2>
            <h1 class="fashionCollection-info__title">
              Discover Our Exclusive Collection of Fashion
            </h1>
            <p class="fashionCollection-info__desc">
              At our online clothing store, we offer high-quality materials,
              exclusive designs, and customer loyalty programs. Shop with us and
              experience the best in women's fashion.
            </p>
            <div class="fashionCollection-list">
              <div class="fashionCollection-list__item">
                <img
                  class="fashionCollection-list__item--img"
                  src="~/assets/images/svg/relume.svg"
                  alt="icone"
                />
                <p class="fashionCollection-list__item--title">
                  Premium Quality Materials
                </p>
              </div>
              <div class="fashionCollection-list__item">
                <img
                  class="fashionCollection-list__item--img"
                  src="~/assets/images/svg/relume.svg"
                  alt="icone"
                />
                <p class="fashionCollection-list__item--title">
                  Unique and Trendy Designs
                </p>
              </div>
              <div class="fashionCollection-list__item">
                <img
                  class="fashionCollection-list__item--img"
                  src="~/assets/images/svg/relume.svg"
                  alt="icone"
                />
                <p class="fashionCollection-list__item--title">
                  Rewards and Benefits for Our Loyal Customers
                </p>
              </div>
            </div>

            <div class="fashionCollection-info__btns">
              <NuxtLink to="/">
                <button>Shop</button>
              </NuxtLink>
              <NuxtLink class="" to="/">
                Learn More
                <img src="~/assets/images/svg/arrow-bottom.svg" alt="icone" />
              </NuxtLink>
            </div>
          </div>
          <div class="fashionCollection-imgs">
            <img
              class="fashionCollection-imgs__bg one"
              src="~/assets/images/png/header-bg.png"
              alt="image"
              data-aos="fade-left"
              data-aos-delay="300"
            />
            <img
              class="fashionCollection-imgs__bg two"
              src="~/assets/images/png/header-bg.png"
              alt="image"
              data-aos="fade-right"
              data-aos-delay="300"
            />
            <img
              class="fashionCollection-imgs__main"
              src="~/assets/images/png/fashion-collection-img.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- FASHION COLLECTION END -->

    <!-- COMMENTS -->
    <div class="comment">
      <div class="container">
        <h1 class="comment-title">Customer testimonials</h1>
        <p class="comment-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
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
          <SwiperSlide class="comment-slider" v-for="slide in 10" :key="slide">
            <div class="comment-slider__stars">
              <svg
                v-for="item in 5"
                :key="item"
                width="20"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.07.612c.345-.816 1.515-.816 1.86 0l2.028 4.82c.145.343.473.579.849.608l5.266.417c.892.071 1.254 1.171.574 1.746L15.635 11.6a.987.987 0 0 0-.324.985l1.225 5.077c.208.86-.74 1.54-1.503 1.08l-4.508-2.721a1.016 1.016 0 0 0-1.05 0l-4.508 2.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.987.987 0 0 0-.324-.985L.353 8.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609L9.07.612Z"
                  fill="#000"
                />
              </svg>
            </div>
            <p class="comment-slider__desc">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <img
              class="comment-slider__avatar"
              src="~/assets/images/png/comment-avatar.png"
              alt="icone"
            />
            <h2 class="comment-slider__name">Name Surname</h2>
            <p class="comment-slider__compane">Position, Company name</p>
          </SwiperSlide>
        </Swiper>  
        
      </div>
    </div>
    <!-- COMMENTS END -->

    <!-- DISCOUNT  -->
    <div class="discount">
      <div class="container">
        <div class="discount-blur"></div>
        <img
          class="discount-bg"
          src="~/assets/images/png/diCount-bg.jpg"
          alt="image"
        />
        <h1 class="discount-title">Get Exclusive Discounts and Updates</h1>
        <p class="discount-desc">
          Sign up for our newsletter to receive exclusive discounts and updates
          on new arrivals.
        </p>
        <div class="discount-btns">
          <button>Sign Up</button>
          <NuxtLink to="/">Learn More</NuxtLink>
        </div>
      </div>
    </div>
    <!-- DISCOUNT END -->

    <!-- BEST SELLERS -->
    <div class="bestSellers">
      <div class="container">
        <h1 class="bestSellers-title">Best Sellers</h1>
        <p class="bestSellers-desc">
          Discover our top-selling products and customer favorites.
        </p>

        <Swiper
          class="bestSellers-swiper"
          :modules="modules"
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
          <button class="bestSellers-nav__one swiper-button-prev">
            <img src="~/assets/images/svg/arrow-btn.svg" alt="icone" />
          </button>
          <button class="bestSellers-nav__two swiper-button-next">
            <img src="~/assets/images/svg/arrow-btn.svg" alt="icone" />
          </button>
        </div>
      </div>
    </div>
    <!-- BEST SELLERS END -->
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const router = useRoute();
// import DeviceDetector from "device-detector-js";
// Function to fetch the user's IP address
// async function getIpAddress() {
//   try {
//     const response = await fetch("https://api.ipify.org?format=json");
//     if (!response.ok) throw new Error("Failed to fetch IP address");
//     const data = await response.json();
//     return data.ip;
//   } catch (error) {
//     console.error("Error fetching IP address:", error);
//     return "N/A"; // Return a default value in case of an error
//   }
// }
// // Function to send a message to the Telegram bot
// async function sendToTelegram(message) {
//   const botToken = "7313349331:AAEsOh5nv7Ze0X5lsc4SKIJav23hJD3nOWY"; // Replace with your bot token
//   const chatId = 7038223897; // Replace with your chat ID
//   const site = ref('https://main--fashion-dress-uzb.netlify.app/')

//   const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
//   try {
//     await fetch(telegramApiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         text: message,
//         site_url: site.value,
//       }),
//     });
//   } catch (error) {
//     console.error("Error sending message to Telegram:", error);
//   }
// }
// async function logAndSendUserInfo() {
//   const deviceDetector = new DeviceDetector();
//   const userAgent = navigator.userAgent;
//   const device = deviceDetector.parse(userAgent);
//   // Get the current time
//   const currentTime = new Date().toLocaleString();
//   // Get the user's IP address
//   const ipAddress = await getIpAddress();
//   // Create the message to send to Telegram
//   const message = `
//     Device Info: ${JSON.stringify(device, null, 2)}
//     IP Address: ${ipAddress}
//     Access Time: ${currentTime}
//   `;
//   // Log the device information, IP address, and access time
//   // Send the message to the Telegram bot
//   await sendToTelegram(message);
// }
// // Call the function to log and send user info
// logAndSendUserInfo();

import { Navigation, Pagination } from "swiper/modules";
const modules = [Navigation, Pagination, SwiperAutoplay, SwiperEffectCreative];
import { TweenMax } from "gsap";
onMounted(() => {
  if (process.client) {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follow");

    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
          css: {
            left: posX - 12,
            top: posY - 12,
          },
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    document
      .querySelector(".header-imgs")
      .addEventListener("mouseenter", function () {
        cursor.classList.add("active");
        follower.classList.add("active");
      });

    document
      .querySelector(".header-imgs")
      .addEventListener("mouseleave", function () {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      });
    document.querySelectorAll(".personalstyle-cards__item").forEach((item) => {
      item.addEventListener("mouseenter", function () {
        cursor.classList.add("active");
        follower.classList.add("active");
      });
    });

    document.querySelectorAll(".personalstyle-cards__item").forEach((item) => {
      item.addEventListener("mouseleave", function () {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      });
    });
    document
      .querySelector(".fashionCollection-imgs")
      .addEventListener("mouseenter", function () {
        cursor.classList.add("active");
        follower.classList.add("active");
      });
    document
      .querySelector(".fashionCollection-imgs")
      .addEventListener("mouseleave", function () {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      });
  }
});
const user = ref(null);
function checkLocal() {
  // Attempt to retrieve and parse the user from localStorage
  const storedUser = localStorage.getItem("registerUser");
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  }
  const router = useRouter();

  // Check if user exists and redirect
  if (user.value) {
    router.push("/user-index");
  } else {
    router.push("/");
  }
}

checkLocal();
</script>
