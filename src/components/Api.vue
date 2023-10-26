<template>
  <div class="loading" v-if="load">Загрузка</div>
  <div v-else>
    <div class=wrapper1>
      <div class="data1" v-for="(el) in plData.classes" :key="el">
        <div> <b>Class: </b>{{el}}</div>
      </div>
    </div>
    <div class=wrapper2>
      <div class="data2" v-for="(el) in plData.races" :key="el">
        <div> <b>Race: </b>{{el}}</div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'TheApi',
  data(){
    return {
      plData: [],
      load: true
    }
  },

  mounted(){

    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c2e5ecc8b1msh5f1578ea53f697fp1c7ea7jsne2a4faa8fbdf',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

  fetch(url,options)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    this.plData=res
    this.load=false
  })

  },

  
}
</script>


<style>

.wrapper1 {
  width: 80vh;
  float: left;
  height: 70vh;

}

.wrapper2{
  width: 28vh;
  float: right;
  height: 70vh;
}


.loading{
  background-color: rgb(115, 190, 118);
  border-radius: 15px;
  font-size: 100px;
}

.data1{
  background-color: rgb(93, 81, 180, 0.6);
  border-radius: 15px;
  width: 30vh;
  font-size: 30px;
  height: 50px;
  margin-bottom: 1vh;
}

.data2{
  background-color: rgb(173, 66, 66, 0.6);
  border-radius: 15px;
  width: 30vh;
  height: 50px;
  font-size: 30px;
  margin-bottom: 1vh;
}
  
</style>