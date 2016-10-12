<template>
  <div class="hello">
    <h1 class="pdt1 al-c">{{ msg }}</h1>
    <!-- 时间过滤器 -->
    <div class="al-c pdt1">更新时间：{{ date | dateTimeFormatter(null, 'cn')}}</div>
  </div>
</template>

<script>
import msgService from 'services/msgService';
export default {
  data () {
    return {
      msg: '首页信息！',
      date: null
    };
  },
  mounted () {
    msgService
      .fetchCity(10)
      .then((msg) => {
        console.log(msg);
      });
    msgService
      .add({name: 111, sd: 222}).then((msg) => {
        console.log(msg);
      });
    this.date = window.Date.parse(new Date());
    window.setInterval(() => {
      this.date = window.Date.parse(new Date());
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
