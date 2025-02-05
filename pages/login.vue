<template>
    <div class="login">
        <div class="container">
            <div class="login-row">
                <div class="login-form">
                    <h1 class="login-form__title">Войти</h1>
                    <div class="login-form__item">
                        <input type="text" v-model="name" placeholder="Name">
                    </div>
                    <div class="login-form__item login-form__item-password">
                        <input type="password" placeholder="Password" v-model="password" class="password_input">
                        <div class="login-show-password">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M6 23H3q-.825 0-1.412-.587T1 21v-3h2v3h3zm12 0v-2h3v-3h2v3q0 .825-.587 1.413T21 23zm-6-4.5q-3 0-5.437-1.775T3 12q1.125-2.95 3.563-4.725T12 5.5t5.438 1.775T21 12q-1.125 2.95-3.562 4.725T12 18.5m0-3q1.45 0 2.475-1.025T15.5 12t-1.025-2.475T12 8.5T9.525 9.525T8.5 12t1.025 2.475T12 15.5m0-2q-.625 0-1.062-.437T10.5 12t.438-1.062T12 10.5t1.063.438T13.5 12t-.437 1.063T12 13.5M1 6V3q0-.825.588-1.412T3 1h3v2H3v3zm20 0V3h-3V1h3q.825 0 1.413.588T23 3v3z"/></svg>
                        </div>
                        <div class="login-hidden-password">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M11.25 21.975Q9.3 21.825 7.613 21t-2.938-2.162t-1.963-3.1T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v.475q-.425-.275-.987-.537t-1.038-.438q-.2-3.15-2.488-5.325T12 4q-1.4 0-2.637.45T7.1 5.7l6.125 6.125q-.475.2-.912.463t-.863.562L5.7 7.1q-.8 1.025-1.25 2.263T4 12q0 2.475 1.338 4.438T8.8 19.325q.45.7 1.125 1.425t1.325 1.225M17 20q1.475 0 2.738-.675T21.75 17.5q-.75-1.15-2.013-1.825T17 15t-2.738.675T12.25 17.5q.75 1.15 2.013 1.825T17 20m0 2q-2.4 0-4.288-1.263T10 17.5q.825-1.975 2.713-3.238T17 13t4.288 1.263T24 17.5q-.825 1.975-2.713 3.238T17 22m0-3q-.625 0-1.062-.437T15.5 17.5t.438-1.062T17 16t1.063.438t.437 1.062t-.437 1.063T17 19"/></svg>
                        </div>
                    </div>
                    <button class="login-form__btn" @click="saveLogin()">Войти</button>
                    <div class="login-form__bottom">
                        <div class="login-form__check">
                            <input type="checkbox" id="check">
                            <label for="check">Запомнить меня</label>
                        </div>
                        <NuxtLink to="/">Забыли пароль?</NuxtLink>
                    </div>
                </div>
                <div class="login-img">
                <img class="login-img__bg" src="~/assets/images/png/login-bg.jpg" alt="bg">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

onMounted(()=>{
    const show_btn = document.querySelector('.login-show-password')
    const hidden_btn = document.querySelector('.login-hidden-password')
    const input_Password = document.querySelector('.password_input')

    show_btn.addEventListener("click", ()=>{
        input_Password.type = "text"
        show_btn.style.display = "none"
        hidden_btn.style.display = "inline-block"
    })
    
    hidden_btn.addEventListener("click", ()=>{
        input_Password.type = "password"
        show_btn.style.display = "inline-block"
        hidden_btn.style.display = "none"
    })
    

})

const name = ref("")
const password = ref("")

function saveLogin() {
  const login_info = JSON.parse(localStorage.getItem('registerUser')) || {}

  login_info.userName = name.value
  login_info.userPassword = password.value
  login_info.phone = login_info.phone 

  localStorage.setItem('registerUser', JSON.stringify(login_info))
}

</script>

<style lang="scss" scoped>

</style>