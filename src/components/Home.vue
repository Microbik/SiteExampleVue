<template>
  <div>
    <div v-if='Logged'>
      <div><h1>Welcome, {{this.username}} </h1></div>
      <button @click="logout">Выйти</button>
  
    </div>
    <div v-else>
      <label>Регистрация</label>
      <input type="text" v-model="username"/>
      <button @click="login">Продолжить</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheHome',
  data(){
    return{
      Logged: false,
      username: ''
    }
  },

  created(){
    if(localStorage.getItem('Logged')){
      this.Logged=true,
      this.username=localStorage.getItem("username")
    }
  
  },
  methods: {
    login(){
      if(this.username !== ''){
        console.log (this.username);
        localStorage.setItem('Logged', true)
        localStorage.setItem('username', this.username)
        this.Logged=true

      }else{
      console.log('Введите данные')
    }
  },
  logout(){
    this.Logged=false,
    this.username=''
    localStorage.removeItem('Logged')
    localStorage.removeItem('username')
  }
}}

    
</script>

<style>

</style>
