<template>
  <div class="listPage">
    <input type="text" v-model="listData" /><button @click="parse">
      подгрузить строкой
    </button>
    <button @click="upload">
      записать
    </button>
    {{ error }}
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
      listData: "",
      parseData: [],
      error: "",
    };
  },
  methods: {
    parse: async function() {
      try {
        this.parseData = JSON.parse(this.listData);
        this.error = "распаршено";
      } catch (err) {
        this.error = "не корректный формат";
      }
    },
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
