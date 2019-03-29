<template>
  <a href="javascript:;" class="vuei-grid-item" :style="style">
    <div class="vuei-grid-item-icon">
      <slot name="icon">
        <img :src="icon" alt>
      </slot>
    </div>
    <p class="vuei-grid-item-label">
      <slot name="label">
        <span v-html="label"></span>
      </slot>
    </p>
  </a>
</template>

<script>
export default {
  name: "gridItem",
  props: ["icon", "label", "link"],
  mounted () {
    //   this.$slots.icon
  },
  created () {
    this.$parent.countColumn()
  },
  computed: {
    isLast () {
      return !((this.index + 1) % this.$parent.column)
    },
    style () {
      const column = this.$parent.column
      if (!column) return
      const style = {}
      style.width = `${100 / column}%`
      return style
    }
  },
  methods: {},
  data () {
    return {
      index: 0,
      hasIconSlot: false,
      hasLabelSlot: false
    };
  }
};
</script>

<style lang="scss">
.vuei-grid-item {
  text-decoration: none;
  float: left;
  text-align: center;
  .vuei-grid-item-icon {
    img {
      max-width: 30px;
      max-height: 30px;
    }
  }
  .vuei-grid-item-label {
    font-size: 16px;
  }
}
</style>
