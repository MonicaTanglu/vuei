<template>
  <div >
    <h1>{{msg}}</h1>
    <img src="./img/avatar.jpg">
    <input type="text" v-model="msg">
  </div>
</template>

<script>
import getData from "./util";
export default {
  name: "app",
  data() {
    return {
      msg: "this is my first define vue&webpack"
    };
  },
  created() {
    console.log('sagsjah')
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  h1 {
    color: green;
  }
}
</style>

