<template>
  <div id="app">
    <header>
      <span class="top_profile_name">{{ userName }}</span>
      <img class="top_profile_img" :src="photo" :alt="userName" />
    </header>

    <div id="nav">
      <router-link to="/neighbors/">Главная</router-link> |
      <router-link to="/neighbors/list">Список соседей</router-link>
    </div>
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
  padding-right: 10px;
}
.top_profile_img {
  border-radius: 30px;
  width: 28px;
  height: 28px;
}
body {
  padding: 0;
  margin: 0;
}
header {
  background-color: #3f8ae0;
  height: 42px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  font-size: 12.5px;
  color: white;
  font-weight: 700;
  font-family: arial;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
