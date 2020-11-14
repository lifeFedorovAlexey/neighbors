<template>
  <div id="app">
  <div > 
    <input type="number" placeholder="поиск по номеру квартиры" v-model="houseId" class="search">
  </div> 
    <list :data="people" :id="houseId"/>
    <!-- <myform />  -->
  </div>
</template>

<script>

import people from './assets/people'
import list from './components/List'

// import myform from './components/Myform'


export default {
  name: 'App',
  components: {
    list
    // myform
  },
  data() {
    return {
      people,
      houseId:""
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 60px;
}

ol{
  margin: 0;
  padding: 0;
}
.search{
  box-shadow: inset 0 0 5px 1px #45494d6e;
    border-radius: 100px 100px 100px 100px;
    border-color: #ffffff00;
    outline: none !important;
    margin: 10px;
    padding: 10px;
    width: 50%;
}
</style>
