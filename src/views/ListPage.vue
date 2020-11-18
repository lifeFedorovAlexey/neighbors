<template>
  <div class="listPage">
    <b-col lg="6" class="my-1">
      <b-form-group class="mb-0">
        <b-input-group size="sm">
          <b-form-input
            v-model="filter"
            type="search"
            id="filterInput"
            placeholder="Искать"
          ></b-form-input>
          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''"
              >Очистить</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>

    <b-table
      :items="neighbors"
      :fields="fields"
      :filter="filter"
      :filter-included-fields="filterOn"
      striped
      responsive="sm"
    >
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? "Скрыть" : "Показать" }}
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Имя:</b></b-col>
            <b-col
              ><b-form-input
                v-model="row.item.first_name"
                :placeholder="row.item.first_name"
              ></b-form-input
            ></b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Имя:</b></b-col>
            <b-col
              ><b-form-input
                v-model="row.item.last_name"
                :placeholder="row.item.last_name"
              ></b-form-input
            ></b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>№ корпуса:</b></b-col>
            <b-col
              ><b-form-input
                v-model="row.item.housing"
                :placeholder="row.item.housing"
              ></b-form-input
            ></b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>№ подъезда:</b></b-col>
            <b-col
              ><b-form-input
                v-model="row.item.front_door"
                :placeholder="row.item.front_door"
              ></b-form-input
            ></b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>№ этажа:</b></b-col>
            <b-col
              ><b-form-input
                v-model="row.item.stage"
                :placeholder="row.item.stage"
              ></b-form-input
            ></b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>№ квартиры:</b></b-col>
            <b-col
              ><b-form-input
                v-model="row.item.apartment_number"
                :placeholder="row.item.apartment_number"
              ></b-form-input
            ></b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Собственник</b></b-col>
            <b-col
              ><b-form-input
                v-model="row.item.owner"
                :placeholder="row.item.owner"
              ></b-form-input
            ></b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>ID вконтакте</b></b-col>
            <b-col
              ><b-form-input
                v-model="row.item.vkid"
                :placeholder="row.item.vkid"
              ></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Ссылка вконтакте</b></b-col>
            <b-col
              ><a
                :href="(row.item.id = 'https://vk.com/' + row.item.vkid)"
                target="_blank"
                class="text-right"
                >Проверить ссылку</a
              >
            </b-col>
          </b-row>

          <b-button size="sm mr-2" @click="row.toggleDetails">Скрыть</b-button>
          <b-button size="sm mr-2" @click="updateNeighbor(row.item)"
            >Обновить</b-button
          >
        </b-card>
      </template>
    </b-table>
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
      search: "",
      fields: [
        { key: "apartment_number", label: "№" },
        { key: "fio", label: "Имя" },
        { key: "show_details", label: "Действия" },
      ],
      neighbors: [],
      filter: null,
      filterOn: ["apartment_number", "fio"],
    };
  },
  async created() {
    let arr = await api.getNeighbors();
    arr.data.map((neighbor) => {
      neighbor.isActive = false;
      neighbor.fio = neighbor.first_name + " " + neighbor.last_name;
      neighbor.vkid = neighbor.id.slice(15);
      this.neighbors.push(neighbor);
    });
  },

  methods: {
    updateNeighbor: async function(neighbor) {
      try {
        await api.updateNeighbor(neighbor);
      } catch (err) {
        console.log(err);
      }
    },
    upload: async function() {
      try {
        await api.updateNeihbors(this.parseData);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {},
};
</script>
<style></style>
