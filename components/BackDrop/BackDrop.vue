<template>
  <div class="backdrop">backdrop</div>
</template>
<script>
export default {
  name: 'tl-back-drop',
  data () {
    return {
      cover: false
    }
  }
}
</script>
<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0px;
}
</style>


