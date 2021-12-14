<template>
    <form @submit.prevent = "onFormSubmit" class="registration-form auth-form">
      <div class="form-field">
            <label for="email">Почта </label>
            <input v-model="email" id="email" type="text" required>
        </div> 

        <!-- <div class="form-field">
            <label for="login">Логин</label>
            <input v-model = "login" id ="login" type="text" required>
        </div>  -->
        
        <div class="form-field">
            <label for="password">Пароль </label>
            <input v-model="password" id ="password" type="text" required>
        </div> 

        <button class="submit-btn" type="submit">Регистрация</button>
        <div class="action-link">
            <span>Уже есть аккаунт? </span>
            <a @click="redirect" class="link-btn">Войти</a>
        </div>
    </form>
</template>

<script>
import {doRegistration} from '@/netClient/authService';
export default ({
  name: 'RegistrationPage',
  data: ()=>({
      email: '',
      // login: '',
      password: '',

  }),
  methods:{
      async onFormSubmit(){
        try {
          const data = await doRegistration(
            // this.login.trim(),
            this.email.trim(),
            this.password.trim())
          console.warn({data});
        } catch (error) {
          console.error({error});
        }
          this.$router.push('/')
      },
      redirect(){
          this.$router.push('/login')
      }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
