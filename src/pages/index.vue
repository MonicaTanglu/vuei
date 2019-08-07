<template>
  <div style="height:100%;">
    <div class="layout-top">
      <h3>VUEI</h3>
      <span>1.0.0</span>
    </div>
    <div class="layout-content">
      <div class="menu">
        <ul class="zg-menu">
          <li :class="selected === 'start'?'selected':''" @click="setSelected('start')">
            <router-link to="/start">快速上手</router-link>
          </li>
          <li>
            <div>组件</div>
            <ul>
              <li>
                <router-link to="/button">button 按钮</router-link>
              </li>
              <li>
                <router-link to="/button">button 按钮</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/study">创建npm库</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    setSelected (type) {
      this.selected = type
    }
  }
}
</script>

<style lang="scss" scope >
@import '../style/common.scss';
.layout-top {
  padding-left: 40px;
  height: 54px;
  box-shadow: 0 2px 8px #f0f1f2;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 2;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0;
  }
}

ul {
  list-style-type: none;
  li {
    ul {
      transition: height 0.3s;
    }
  }
}
.zg-menu {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-feature-settings: 'tnum';
  font-variant: tabular-nums;
  color: $contentColor;
  list-style: none;
  background: #fff;
  outline: 0;
  transition: background 0.3s, width 0.2s;
  zoom: 1;
  border-right: 1px solid #e8e8e8;
  li {
    // width: calc(100% - 55px);
    width: 190px;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 40px;
    margin: 4px 0px 8px 0px;
    padding: 0 16px 0 40px;
    position: relative;
    cursor: pointer;
    ul {
      padding-left: 0px;
      li {
        padding-left: 20px;
      }
    }
    a {
      text-decoration: none;
      color: $contentColor;
      display: block;
    }
    &.selected:after {
      content: ' ';
      border-right: 3px solid $primary;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
    }

    &.selected {
      color: $primary;
      background-color: lighten($primary, 35%);
    }
  }
}
.menu {
  position: fixed;
  top: 56px;
  left: 0;
  max-height: 100vh;
  bottom: 0;
  overflow-y: hidden;
  background: #fff;
}
.menu:hover {
  overflow-y: scroll;
}

.layout-content {
  display: flex;
  height: 100%;
  .content {
    padding: 10px;
    position: relative;
    left: 250px;
    margin: 10px;
    top: 56px;
  }
}
router-link:hover {
  color: $primary;
}
</style>
