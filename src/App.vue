<template>
  <div>
    <!-- <h1>{{msg}}</h1>
    <img src="./img/avatar.jpg">
    <input type="text" v-model="msg">-->
    <grid :cols="3">
      <grid-item :label="'grid'" :icon="'src/assets/img/actionsheet.png'"></grid-item>
      <grid-item :label="'grid'" :icon="'src/assets/img/Alert.png'"></grid-item>
      <grid-item :label="'grid'" :icon="'src/assets/img/gridview.png'"></grid-item>
      <grid-item :label="'grid'" :icon="'src/assets/img/gridview.png'"></grid-item>
    </grid>
  </div>
</template>

<script>
import getData from './util';
import grid from '@component/Grid.vue';
import gridItem from '@component/Grid-Item.vue';
export default {
  name: 'app',
  components: {
    grid,
    gridItem
  },
  data () {
    return {
      msg: 'this is my first define vue&webpack'
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const data = await getData()
      this.msg = data
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
body {
  margin: 0;
  padding: 0;
}
</style>

