<template>
  <div class="lll" v-if="username">
    <h2 class="l">Chat</h2>
    <div class="chatt" v-for = 'message in messages' :key="message.id">
      {{ message.user }}: {{ message.text }}
    </div>
    <div class="chatt" v-show="emptyMsg">Сообщений нет
    </div>
    <div>
      <input placeholed="Enter message" v-model='newMessage'/>
      <button class='btn1' @click="sendMessage">Send</button>
      <button class='btn2' @click="deleteMessage">Delete</button>
    </div>
  </div>
  <div v-else><router-link to="/" class="ll">Sign Up to use chat!</router-link></div>
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
    localStorage.setItem('username',this.$route.query.username.slice)
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
.ll{
  color:rgb(255, 255, 255);
  text-decoration-line: none;
  font-size: 50px;
}

.l{
  color:rgb(255, 255, 255);
  text-decoration-line: none;
  font-size: 50px;
  background-color: rgb(194, 177, 102);
  width: 50vh;
  border-radius: 15px;
  text-align: center;
  margin-left: 15px;
}

.btn1 {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 35px;
  margin: 15px 15px 15px 15px;
  outline: none;
  border: none;
  border-radius: 4px;
  height: 36px;
  position: relative;
  background-color: rgb(192, 201, 151);
  font-size: 20px;
  cursor: pointer;
}

.btn2 {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 35px;
  margin: 0 15px 15px 0;
  outline: none;
  border: none;
  border-radius: 4px;
  height: 36px;
  background-color: rgb(192, 201, 151);
  font-size: 20px;
  cursor: pointer;
}

.chatt {
  color:black;
  font-size: 20px;
  margin-left: 15px;
  font-family: Arial, Helvetica, sans-serif;
}

.lll{
  background-color: rgba(175, 154, 97, 0.705);
  border-radius: 15px;
}
</style>
