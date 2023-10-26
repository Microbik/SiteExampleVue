<template>
  <div v-if="username">
    <h2>Chat</h2>
    <div v-for = 'message in messages' :key="message.id">
      {{ message.user }}: {{ message.text }}
    </div>
    <div v-show="emptyMsg">Сообщений нет
    </div>
    <div>
      <input placeholed="введите сообщение" v-model='newMessage'/>
      <button @click="sendMessage">Отправить</button>
      <button @click="deleteMessage">Удалить</button>
    </div>
  </div>
  <div v-else><router-link to="/">Регистрация</router-link></div>
</template>

<script>

export default {
  name: 'TheChat',
  data(){
    return{
      messages: [],
      newMessage: '',
      emptyMsg: true,
      username: localStorage.getItem('username')
    }
  },

  computed(){
    localStorage.setItem('username',this.$route.query.username)
  },

  methods: {
    sendMessage(){
      if(!this.username){
        this.username='Анон'
      }
      if(this.newMessage!==''){
        this.emptyMsg=false
        this.messages.push({id: new Date().getTime(), text: this.newMessage, user: this.username})
        this.saveChatRecords()
        this.newMessage = ''
      }else{
        alert('Введите сообщение')
      }
    },
    saveChatRecords(){
      const records=this.messages
      console.log(records)
      localStorage.setItem(`messages_${this.username}`, JSON.stringify(records))
    },
    loadChatRecords(){
      const records=JSON.parse(localStorage.getItem(`messages_${this.username}`))
      if(records){
        this.messages = records,
        this.emptyMsg = false
      }
    },
    deleteMessage(){
      this.messages = []
      localStorage.removeItem(`messages_${this.username}`, JSON.stringify(this.message))
      this.emptyMsg=false
    }
  },
  created(){
    this.loadChatRecords()
  }
}
</script>

<style>

</style>
