<template>
  <div id="box">
      <header class="clear-fix">
          <h1 class="logo fl">
              <a href="#"></a>
          </h1>
          <div class="header_r fr">
              <span class="Navigation" @click="show"></span>
          </div>
      </header>
      <div class="channel" v-show="a">
          <ul>
             <li><a href="#">首页</a></li>
             <li><a href="#">新闻</a></li>
             <li><a href="#">财经</a></li>
             <li><a href="#">娱乐</a></li>
             <li><a href="#">体育</a></li>
             <li><a href="#">证券</a></li>
             <li><a href="#">军事</a></li>
             <li><a href="#">科技</a></li>
             <li><a href="#">数码</a></li>
             <li><a href="#">时尚</a></li>
             <li><a href="#">汽车</a></li>
             <li><a href="#">游戏</a></li>
             <li><a href="#">房产</a></li>
             <li><a href="#">星座</a></li>
             <li><a href="#">视频</a></li>
          </ul>
      </div>
      <div class="nav">
        <ul>
          <li><router-link to="/disport">娱乐</router-link></li>
          <li><router-link to="/star">明星</router-link></li>
          <li><router-link to="/Film">电影</router-link></li>
          <li><router-link to="/Music">音乐</router-link></li>
          <li :class="{back:b}" @click="ring"><a href="./src/ring.html">贵圈</a></li>
        </ul>
      </div>
      <div>
        <router-view></router-view> 
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a:false,
      b:false
    }
  },
  methods:{
    show:function(){
        this.a=!this.a;
    },
    ring:function(){
      this.b=!this.b;
    }
  },
  mounted(){
    (function(win,doc){
      function change(){
      doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px';
      }
      change();

      win.addEventListener('resize',change,false);
      })(window,document);
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
