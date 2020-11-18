<template>
  <div class="listPage">
    <table class="t_neighbor">
      <tr>
        <th v-for="t_title in t_titles" :key="t_title.id">{{ t_title }}</th>
      </tr>
      <tr v-for="neighbor in neighbors" :key="neighbor.id">
        <td>{{ neighbor.id }}</td>
        <td>{{ neighbor.first_name }}</td>
        <td>{{ neighbor.last_name }}</td>
        <td>{{ neighbor.housing }}</td>
        <td>{{ neighbor.front_door }}</td>
        <td>{{ neighbor.stage }}</td>
        <td>{{ neighbor.apartment_number }}</td>
        <td>{{ neighbor.owner }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
// import people from "../assets/people";
// import list from "../components/List";
import api from "../api";
export default {
  name: "App",
  components: {
    // list,
    // myform
  },
  data() {
    return {
      // listData: "",
      // parseData: [],
      // error: "",
      t_titles: [
        "Ссылка",
        "Имя",
        "Фамилия",
        "Корпус",
        "Подьезд",
        "Этаж",
        "Квартира",
        "Собственник",
      ],
      neighbors: [],
    };
  },
  async created() {
    let arr = await api.getneighbors();
    let id = 0;
    arr.data.map((item) => {
      let neighbor = {};
      this.$set(neighbor, "id", item.id);
      this.$set(neighbor, "first_name", item.first_name);
      this.$set(neighbor, "last_name", item.last_name);
      this.$set(neighbor, "housing", item.housing);
      this.$set(neighbor, "front_door", item.front_door);
      this.$set(neighbor, "stage", item.stage);
      this.$set(neighbor, "apartment_number", item.apartment_number);
      this.$set(neighbor, "owner", item.owner);
      this.neighbors.push(neighbor);
    });
  },

  methods: {
    // parse: async function() {
    //   try {
    //     this.parseData = JSON.parse(this.listData);
    //     this.error = "распаршено";
    //   } catch (err) {
    //     this.error = "не корректный формат";
    //   }
    // },
    upload: async function() {
      try {
        await api.updateNeihbors(this.parseData);
        this.error = "загружено";
      } catch (err) {
        this.error = "ошибка при записи в базу";
      }
    },
  },
};
</script>
<style scoped>
.t_neighbor {
  width: 100%;
}

table {
  font-size: 14px;
  border-spacing: 0;
  text-align: center;
}
th {
  background: #3f8ae0;
  color: white;
  text-shadow: 0 1px 1px #2d2020;
  padding: 10px 20px;
}
th,
td {
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
}
th:first-child,
td:first-child {
  text-align: left;
}
th:first-child {
  border-top-left-radius: 10px;
}
th:last-child {
  border-top-right-radius: 10px;
  border-right: none;
}
td {
  padding: 10px 20px;
  background: #cfdff1;
}
tr:last-child td:first-child {
  border-radius: 0 0 0 10px;
}
tr:last-child td:last-child {
  border-radius: 0 0 10px 0;
}
tr td:last-child {
  border-right: none;
}
</style>
