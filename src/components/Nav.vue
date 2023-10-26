<template>
  <div class="wrap">
    <div class="borderr"></div>
  <div class="container">
    <nav>
      <router-link class="txt" to="/">Home</router-link>
      <router-link class="txt" to="/chat">Chat</router-link>
      <router-link class="txt" to="/api">Guide</router-link>
    </nav>
  </div>
  
  <div class="borderl"></div>
</div>
</template>

<script>

export default {
  name: 'TheNav',

}
</script>

<style>

  nav {
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: right;
    padding: 30px;
  }

  .container {
    background-color: rgb(110, 93, 66);
    border-radius: 15px;
    height: 100px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .txt{
    color: white;
    text-decoration-line: none;
    font-size: 25px;
  }

  .borderr {
    align-items: right;
    float: right;
    width: 100px;
    height: 120vh;
    background-color: rgb(136, 109, 91);
}

  .wrap {
    display: flex;
    height: 150px;
    width: 100%;
  }

  .borderl {
    align-items: left;
    float: left;
    width:100px;
    height: 120vh;
    background-color:  rgb(136, 109, 91);
}


</style>
