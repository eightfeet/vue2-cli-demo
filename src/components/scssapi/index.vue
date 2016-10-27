<template>
  <div>
    <h1 class="al-c pdt1">Css Api</h1>
    <div class="pd1">
      <div class="">
        <div class="clearfix">
          <div class="fl ww fz-s gray-4">这里按照emmet语法习惯，做了一些常用的公共样式，一般的布局都可以用这些样式解决</div>
          <div class="fl al-r w3 lh">search&nbsp;&nbsp;</div>
          <div class="fr al-l w7">
            <input type="text" class="lh pdl1" v-model="searchStr" @keyup="handlerSearchStr" placeholder="search">
          </div>
        </div>
        <template v-for="item in api">
          <h3 class="pdb1 pdt1" :class="item.s?'show':'hide'">{{item.node}}</h3>
          <ul class="nls">
            <li v-for="el in item.countent" :class="el.s?'show':'hide'">
              <p class="pd1 fw-b red-0">{{el.name}}</p>
              <p class="pdb-5" style="color:#bbb">{{el.type}}</p>
              <div style="border-left:2px solid orange" class="pdt1 pdb1 pdl-5 pdr-5 bg-white-0">
                <p :class="el.name.replace('$','').replace('.','')">for example</p>
              </div>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import apidata from './apidata';
export default {
  data () {
    return {
      msg: '用户中心!',
      api: [],
      searchStr: null
    };
  },
  mounted () {
    this.api = apidata;
  },
  methods: {
    handlerSearchStr () {
      let s = this.searchStr;
      if (!s.length || s.length === 0) {
        for (let i = 0; i < this.api.length; i++) {
          this.api[i].s = true;
          let t = this.api[i].countent;
          for (let i = 0; i < t.length; i++) {
            t[i].s = true;
          }
        }
        return;
      }

      for (let i = 0; i < this.api.length; i++) {
        this.api[i].s = false;
        let t = this.api[i].countent;
        for (let i = 0; i < t.length; i++) {
          if (t[i].name.indexOf(s) !== -1 || t[i].type.indexOf(s) !== -1) {
            t[i].s = true;
          } else {
            t[i].s = false;
          }
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
