<template>
  <div class="myform">
<div class="form">
  <p v-if="error!=''" class="error">{{error}}</p>


  
  <div>
    <div for="name" class="flabel">Имя</div>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
      class="finput"
      required
    >
  </div>

  <div>
    <div for="surname" class="flabel">Фамилия</div>
    <input
      id="surname"
      v-model="surname"
      type="text"
      name="surname"
      class="finput"
      required
    >
  </div>

  <div>
    <div for="link" class="flabel">Ссылка на VK</div>
    <input
      id="link"
      v-model="link"
      type="text"
      name="link"
      class="finput"
      required
    >
  </div>

  <div>
    <div for="house" class="flabel">Квартира</div>
    <input
      id="house"
      v-model="house"
      type="number"
      name="house"
      class="finput"
      min="0"
      max="2000"
      required
    >
  </div>

  <div>
    <div for="houseInput" class="flabel">Подъезд</div>
    <select
      id="houseInput"
      v-model="houseInput"
      name="houseInput"
      class="fselect"
      required
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
    </select>
  </div>

  <div>
    <div for="stageInput" class="flabel">Этаж</div>
    <select
      id="stageInput"
      v-model="stageInput"
      name="stageInput"
      class="fselect"
      required
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
    </select>
  </div>

    <div>
    <div for="owner" class="flabel">Собственник</div>
    <select
      id="owner"
      v-model="owner"
      name="owner"
      class="fselect"
      required
    >
      <option>Да</option>
      <option>Нет</option>

    </select>
  </div>

  <div>
    <input class="button"
      type="submit"
      @click="download"
      value="Создать"
    >
  </div>

</div>
  </div>
</template>

<script>


export default {
  name: 'myform',
  data() {
    return {
      name: "",
      houseInput:  "",
      surname: "",
      house: "",
      stageInput: "",
      owner: "",
      link: "",
      error:"",
    }
  },
  methods: {
    validate  () {
      if(this.name !="" && this.surname !=""  && this.link !=""  && this.houseInput !=""  && this.house !=""  && this.stageInput !=""  && this.owner !="" ){
        this.error = ""
        return true
      }else{
        return false
      }

     
    },
    download(){
      if(this.validate()){
        console.log(this.validate())

          const data = this.getListForFile(
             ["name","surname","link","houseInput","house","stageInput","owner"],
             [this.name,this.surname,this.link,this.houseInput,this.house,this.stageInput,this.owner]
          );

          let a = document.createElement('a');
          a.href = 'data:attachment/csv,' + "\uFEFF" +  encodeURIComponent(data);
          a.target = '_blank';
          a.download = this.name+"_"+this.surname+'.csv';
          document.body.appendChild(a);
          a.click();
      }else{
        this.error = "Пожалуйста заполните все поля"
      }
      
    },
    getListForFile(columns, list){
      let result = "";
      for (let id in columns){
          result += columns[id]  + ";";
      }
      result += "\n";

      for (let id in list){
        console.log(id)
        
  
          result += list[id] + ";";
        


      }
      return result;
    }
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  padding: 0;
  margin: 0;
}

.myform{
  width: 500px;
  margin: 0 auto;
}
.flabel{

margin:10px;
}

.finput{
width: 200px;
padding: 10px;
}

.fselect{
      width: 225px;
      padding: 10px;
}
.button {
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    width: 225px;
    padding: 10px;
    margin-top: 35px;
}

.button:hover {
    background-color: #4CAF50; /* Green */
    color: white;
}
.form{
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#a90329+0,8f0222+44,6d0019+100;Brown+Red+3D */
background: #a90329; /* Old browsers */
background: -moz-linear-gradient(top,  #a90329 0%, #8f0222 44%, #6d0019 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #a90329 0%,#8f0222 44%,#6d0019 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #a90329 0%,#8f0222 44%,#6d0019 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a90329', endColorstr='#6d0019',GradientType=0 ); /* IE6-9 */



    border-radius: 5px;
    padding: 30px;
        box-shadow: 0 0 12px -1px #0B1905;
}

.error{
  padding: 10px;
    background: #f32323;
    border-radius: 50px;
}
</style>
