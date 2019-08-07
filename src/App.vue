<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  created () {
  },
  methods: {
  }
};
</script>
<style lang="scss" scope>
@import './style/common.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  h1 {
    color: green;
  }
}
body {
  margin: 0;
  padding: 0;
  background: #f5f5f5;
  height: 100%;
}
</style>

