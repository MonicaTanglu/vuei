<template>
  <div class="vuei-grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'grid',
  props: {
    cols: {
      type: Number
    }
  },
  methods: {
    countColumn () {
      this.childrenSize = this.$children.length
      console.log(this.cols, this.$children.length)
      this.$children.forEach((element, index) => {
        element.index = index
      });
    }
  },
  computed: {
    column () {
      
      return this.cols || this.childrenSize
    }
  },
  data () {
    return {
      childrenSize: 3
    }
  }
}
</script>

<style lang="scss">
.vuei-grid {
    // font-size: 0px;
//   display: flex;
//   align-items: center;
}
</style>
