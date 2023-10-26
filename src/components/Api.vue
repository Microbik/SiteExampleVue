<template>

<div v-for="(el) in plData.classes" :key="el">
  <div> <b>Class: </b>{{el}}</div>
</div>
<div v-for="(el) in plData.races" :key="el">
  <div> <b>Race: </b>{{el}}</div>
</div>
</template>

<script>

export default {
  name: 'TheApi',
  data(){
    return {
      plData: []
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
  })

  },

  
}
</script>

<style>

</style>
