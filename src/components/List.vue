<template>
  <div class="list">
    <ol>
      <li class="card" v-for="item in sortedHouses" :key="item.id">
        <a :href="item.id">{{ item.first_name }} {{ item.last_name }}</a>
        <p>Квартира:{{ item.house == 0 ? "нет" : item.house }}</p>

        <p v-show="item.showMore">Собственник:нет информации</p>
        <p v-show="item.showMore">
          Подьезд:{{ item.house == 0 ? "нет информации" : getInput(item) }}
        </p>
        <p v-show="item.showMore">Этаж:нет информации</p>
        <p v-show="item.showMore">Корпус:нет информации</p>

        <button @click="triggerShow(item)" class="show">
          {{ !item.showMore ? "Подробнее" : "Скрыть" }}
        </button>
      </li>
    </ol>
  </div>
</template>

<script>
// import houses from "../assets/houses";
export default {
  name: "list",
  props: {
    data: Array,
    id: String,
  },
  data() {
    return {
      persons: this.data,
    };
  },
  computed: {
    // sortedHouses: function(){
    //   let result = this.filterByHouse();
    //   return result.sort(function(a, b) {
    //       if(a.house==""){
    //         a.house= 0
    //       }else{
    //         a.house = Number(a.house)
    //       }
    //       if(b.house==""){
    //         b.house = 0
    //       }else{
    //         b.house = Number(b.house)
    //       }
    //       return a.house - b.house;
    //     })
    // },
  },

  methods: {
    triggerShow(item) {
      this.$set(item, "showMore", item.showMore ? false : true);
    },

    filterByHouse() {
      if (this.id !== "") {
        return this.persons.filter(
          (person) => String(person.house).indexOf(this.id) != -1
        );
      }
      this.persons = this.persons.map((item) => {
        this.$set(this.persons, "showMore", false);
        return item;
      });

      return this.persons;
    },
    // getHouse(item){

    //   let house = houses.filter(house => house.name.indexOf(item.last_name)!=-1)
    //   console.log(house)

    //   if(house.length>1){
    //     house = house.filter(house => house.name.indexOf(item.first_name)!=-1)
    //   }
    //   house = house.map(item=>{return item.house})
    //   item.house = house.join()
    //   return item.house
    // },
    getInput(item) {
      item.input = "неизвестно";
      if (item.house > 0 && item.house < 156) {
        item.input = 1;
      }

      if (item.house > 155 && item.house < 237) {
        item.input = 2;
      }

      if (item.house > 236 && item.house < 436) {
        item.input = 3;
      }

      if (item.house > 435 && item.house < 497) {
        item.input = 4;
      }

      if (item.house > 496 && item.house < 558) {
        item.input = 5;
      }

      if (item.house > 557 && item.house < 619) {
        item.input = 6;
      }

      if (item.house > 618 && item.house < 679) {
        item.input = 7;
      }

      if (item.house > 678 && item.house < 740) {
        item.input = 8;
      }

      return item.input;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-grid;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}

.show {
  background-color: #4eb562;
  border: none;
  border-radius: 10px;
  padding: 5px;
  color: white;
  box-shadow: 0 0 4px 1px #454941;
  outline: none !important;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  padding: 10px;
  margin: 12px;
  width: 230px;

  transition: 0.15s all ease-in-out;
}

.card:hover {
  transform: scale(1.1);
}
</style>
