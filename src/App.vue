<style lang="less">
  @import "assets/style/main.less";
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
    <div class="al-c pdt5">
      <img src="./assets/images/logo.png" alt="" style="width:8rem">
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import nave from 'components/nave';
export default {
  components: { nave },

  data () {
    return {
      // userService, // 实现 userService 挂载 data 的可追踪
      userData: null // 须与 userService.data【手动】同步 小项目替代vuex
    };
  },
  mounted () {

  }
};
</script>
