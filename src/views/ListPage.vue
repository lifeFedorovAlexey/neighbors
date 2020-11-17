<template>
  <div class="listPage">
    <!-- <div>
      <input
        type="number"
        placeholder="поиск по номеру квартиры"
        v-model="houseId"
        class="search"
      />
    </div> -->
    <button @click="check">sdfsdfr</button>
    <!-- <list :data="people" :id="houseId" /> -->
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
      houseId: "",
    };
  },
  methods: {
    check: async function() {
      console.log(await api.getAuth());
    },
  },
};
</script>
