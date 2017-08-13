<template>
  <div class="disport">
   		<div class="gallery">
   			<a href="#">
   				<div class="img">
   					<img src="../assets/0.jpg">
   				</div>
   				<h2>林更新豪宅内景曝光  比宇文玥还壕</h2>
   			</a>
   		</div>
   		<div class="content">
   			<ul>
   				<li class="full" v-for="v in arr" v-if="v.li==1">
              <a href="#">
                <div class="simg"><img :src="v.img"></div>
                <h2>{{v.h1}}</h2>
                <p>
                  {{v.p}}
                  <span class="count">
                      <i class="flag" v-if="v.i1==1"></i>
                      <i class="ccomm">
                        {{v.i2}}
                      </i>
                  </span>
                </p>
              </a>
          </li>
          <li class="photo" v-else="v.li==0">
            <a href="#">
              <h2>{{v.h2}}</h2>
              <div class="thumb"><img :src="v.img"></div>
              <p>
                {{v.p}}
                  <span class="count">
                      <i class="flag" v-if="v.i1==1"></i>
                      <i class="ccomm">{{v.i2}}</i>
                  </span>
              </p>
            </a>
          </li>
   			</ul>
   		</div>
      <div class="more">
        <span class="gomore" @click="more">{{mores}}</span>
      </div>
      <div class="info">
        <div class="search">
          <div class="innerSearch">
            <i class="searchIcon"></i>
            <input type="text" class="searchInp" :placeholder="placeholder" @click="hide">
            <i class="seachBtn"></i>
          </div>
        </div>
      </div>  
      <div class="footNav">
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
      <div class="footer">
        <div class="foot_use">
          <span class="login">[登录]</span>
          <span class="destroy">[注销]</span>
        </div>
        <div class="links">
          <a href="#">反馈</a>
          <a href="#" class="links_a">举报中心</a>
          <a href="#" class="links_a">电脑版</a>
        </div>
        <p class="copy">Copyright © 1998 - 2017 Tencent. 腾讯科技（北京）有限公司 All Rights Reserved</p>
        <div class="gotop" @click="gotop"></div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        timer:null,
        mores:'点击查看更多',
        arrP:['飞机迫降撞死两人','朝鲜谴责美国制裁','中国或开菲佣服务'],
        placeholder:'飞机迫降撞死两人',
        arr:[
        {
            li:1,
            img:'src/assets/1.jpg',
            h1:'《战狼2》总票房破18亿，不到5小时又一亿进账',
            p:'截至8月2日上午16：30，《战狼2》累计票房',
            i1:1,
            i2:'3695'
        },
         {
            li:1,
            img:'./src/assets/2.jpg',
            h1:'所谓娱乐第931期',
            i1:0,
            i2:'25'
        },
         {
            li:1,
            img:'./src/assets/3.jpg',
            h1:'导演范立欣被曝骚扰女性被拘留 本人挂断电话拒回应',
            i1:0,
            i2:'74'
        },
         {
            li:1,
            img:'./src/assets/4.jpg',
            h1:'曹云金大方承认与唐菀恋情 笑称：奔着结婚去',
            i1:0,
            i2:'74'
        },
         {
            li:1,
            img:'./src/assets/5.jpg',
            h1:'孕妇孙怡凌晨晒美照要加餐 董子健却称她是大胖子',
            p:'8月3日凌晨一点多，孙怡微博晒出一张自拍美照，...',
            i1:0,
            i2:'2'
        },
        {
          li:0,
          h2:'【存照】明星秀绝技 个个能当江湖艺人',
          img:'./src/assets/6.jpg',
          p:'【存照】明星秀绝技 个个能当江湖艺人',
          i1:0,
          i2:'264'
        },
        {
            li:1,
            img:'./src/assets/7.jpg',
            h1:'吴京的“战狼式”撩妹：嘴皮子贼6，上节目反套路',
            i1:0,
            i2:'0'
        },
        {
            li:1,
            img:'./src/assets/8.jpg',
            h1:'张柏芝带病为儿子庆生 谢霆锋被批“爸爸去哪儿了”',
            p:'张柏芝带病为儿子庆生 谢霆锋被批“爸爸去哪儿了”',
            i1:0,
            i2:'16'
        },
        {
            li:1,
            img:'./src/assets/9.jpg',
            h1:'陈冠希也成炫娃狂魔 这次晒的是女儿的布娃娃',
            p:'8月2日，新晋奶爸再次上线在IG上分享了一张非...',
            i1:0,
            i2:'0'
        },
        {
            li:1,
            img:'./src/assets/10.jpg',
            h1:'林志玲谈爱情：排队排这么久 该要有得到的机会了',
            p:'林志玲资料图腾讯娱乐讯据台湾媒体8月2日报道，...',
            i1:0,
            i2:'3'
        },
        {
            li:1,
            img:'./src/assets/11.jpg',
            h1:'大S带孩子海岛度假 网友：虎背熊腰好妈妈',
            p:'近日，大S录制节目时因为麦克风以及灯光等问题，...',
            i1:0,
            i2:'491'
        },
        {
          li:0,
          h2:'牛莉穿透视装秀身材 撩裙露美腿',
          img:'./src/assets/12.jpg',
          p:'牛莉穿透视裙 大秀性感好身材',
          i1:0,
          i2:'6'
        },
        {
          li:0,
          h2:'伊能静房子装修温馨 回应家中为何有很多杯子',
          img:'./src/assets/13.jpg',
          p:'伊能静房子装修温馨 并回应家中为何有...',
          i1:0,
          i2:'336'
        },
        {
            li:1,
            img:'./src/assets/14.jpg',
            h1:'“八王爷”邢昭林：撩妹嘛，男孩总该会点儿《战狼2》总票房破18亿，不到5小时又一亿进账',
            p:'腾讯娱乐专稿（文/李栗 责编/小飚）划重点：1...',
            i1:0,
            i2:'268'
        },
        {
            li:1,
            img:'./src/assets/15.jpg',
            h1:'林更新怒斥偷拍狗仔：看谍战戏都没你们来的过瘾',
            p:'近日徐峥打跟踪女记者的事情在网上引起热议，徐峥...',
            i1:0,
            i2:'221'
        },
        {
            li:1,
            img:'./src/assets/16.jpg',
            h1:'邓超哄孩子招数多',
            i1:0,
            i2:'9'
        },
        {
            li:1,
            img:'./src/assets/17.jpg',
            h1:'窦靖童独自现身  黑衣酷帅玩快闪',
            p:'2017年8月2日讯，北京，日前，窦靖童独自一...',
            i1:0,
            i2:'920'
        },
        {
          li:0,
          h2:'鲍蕾庆41岁生日 陆毅和女儿齐献吻',
          img:'./src/assets/18.jpg',
          p:'鲍蕾庆41岁生日 陆毅和女儿齐献吻',
          i1:0,
          i2:'843'
        },
        {
            li:1,
            img:'./src/assets/19.jpg',
            h1:'林志玲素颜照被指认不出 晒深沟辣腿美照反击',
            i1:0,
            i2:'399'
        }
        ]
    }
  },
  methods:{
    hide:function(){
      var _this = this;
      _this.placeholder='';
      clearInterval(_this.timer);
    },
    gotop:function(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    more:function(){
      this.mores='加载中...';
      this.$http({
        url:'./src/more.txt',
        method:'GET',
      }).then(function(res){
        let json = eval('('+res.bodyText+')');
        let more = json.more;
        for(var i=0;i<more.length;i++){
          this.arr.push(more[i]);
        }
        this.mores='点击查看更多';
      },function(){})
    }
  },
  mounted(){
    var _this=this;
    var n=0;
      _this.timer=setInterval(function(){
         _this.placeholder=_this.arrP[n];
         n++;
         if(n==_this.arrP.length){
            n=0;
         }
      },3000);
  }
}
</script>

<style lang="scss">

</style>
