<template>
  <div id="app">

    <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <span class="top_profile_name">{{ userName }}</span>
        <img class="top_profile_img" :src="photo" :alt="userName" />
        <b-nav-item to="/neighbors/" exact exact-active-class="active">Главная</b-nav-item>
        <b-nav-item to="/neighbors/list" exact exact-active-class="active">Список соседей</b-nav-item>
     
      </b-nav>
    </b-card-header>

    <router-view />
  </div>
</template>
<script>
import api from "./api";
export default {
  name: "App",
  components: {
    // myform
  },
  data() {
    return { photo: "", userName: "" };
  },
  async created() {
    let userInfo = await api.getUserInfo();

    this.photo = userInfo.data.photo;
    this.userName = userInfo.data.givenName;
  },
};
</script>

<style>
.top_profile_name {
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 8px;
}
.top_profile_img {
  border-radius: 30px;
  width: 28px;
  height: 28px;
  margin-top: 8px;
  margin-right: 15px;
}
</style>
