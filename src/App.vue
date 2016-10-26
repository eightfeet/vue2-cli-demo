<style lang="scss">
  @import "assets/style/main.scss";
  .fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
  }
  .fade-enter {
    opacity: 0;
    transform:translate(20px, 0);
  }
  .fade-leave-active {
    opacity: 0;
    transform:translate(20px, 0);
  }
</style>
<template>
  <div>
    <nave></nave>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import nave from 'components/nave';
import attachFastclick from 'fastclick';
export default {
  components: { nave },

  data () {
    return {
      // userService, // 实现 userService 挂载 data 的可追踪
      userData: null // 须与 userService.data【手动】同步 小项目替代vuex
    };
  },
  mounted () {
    attachFastclick.attach(window.document.body);
  }
};
</script>
