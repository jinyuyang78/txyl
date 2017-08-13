<template>
  <div class="star">
 		<div class="content">
   			<ul>
				<li class="full" v-for="v in arr">
		          <a href="#">
		            <div class="simg"><img :src="v.img"></div>
		            <h2>{{v.h1}}</h2>
		            <p>
		              {{v.p}}
		            </p>
		          </a>
		        </li>
   			</ul>
   		</div>
   		<div class="more">
	      <span class="gomore" @click="more">{{morest}}</span>
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
        <div class="links">
          <a href="#">反馈</a>
          <a href="#" class="links_a">举报中心</a>
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
    	 morest:'点击查看更多',
	  	 arr:[
	        {
	            li:1,
	            img:'./src/assets/20.jpg',
	            h1:'郭富城买豪宅定居上海？经纪人：他生活重心在香港',
	            p:'郭富城方媛（资料图）腾讯娱乐讯据香港媒体报道，郭富...'
	        },
	         {
	            li:1,
	            img:'./src/assets/21.jpg',
	            h1:'张柏芝为两个儿子保持单身：不代表我没人要',
	            p:' 张柏芝为Lucas庆生腾讯娱乐讯据香港媒体报道，最...'
	        },
	        {
	            li:1,
	            img:'./src/assets/22.jpg',
	            h1:'82岁李敖暴瘦插鼻胃管 此前病危7天才脱险',
	            p:' 李敖近照曝光腾讯娱乐讯据台湾媒体报道，82岁作家李...'
	        },
	        {
	            li:1,
	            img:'./src/assets/23.jpg',
	            h1:'《还珠》剧情遭调侃 含香硬生生被紫薇“吵”死',
	            p:' 网友调侃《还珠格格》《还珠格格》主创腾讯娱乐讯据台...'
	        },
	        {
	            li:1,
	            img:'./src/assets/24.jpg',
	            h1:'娱乐早报：周杰伦儿子英文名曝光',
	            p:' 周杰伦儿子英文名曝光大吐苦水：养小孩好累周杰伦公布...'
	        },
	        {
	            li:1,
	            img:'./src/assets/24.jpg',
	            h1:'周杰伦儿子英文名曝光 大吐苦水：养小孩好累',
	            p:' 周杰伦依据资料图周杰伦参加篮球活动腾讯娱乐讯8月3...'
	        },
	        {
	            li:1,
	            img:'./src/assets/1.jpg',
	            h1:'《战狼2》总票房破18亿，不到5小时又一亿进账',
	            p:'截至8月2日上午16：30，《战狼2》累计票房'
	        },
	         {
	            li:1,
	            img:'./src/assets/2.jpg',
	            h1:'所谓娱乐第931期'
	        },
	         {
	            li:1,
	            img:'./src/assets/3.jpg',
	            h1:'导演范立欣被曝骚扰女性被拘留 本人挂断电话拒回应'
	        },
	         {
	            li:1,
	            img:'./src/assets/4.jpg',
	            h1:'曹云金大方承认与唐菀恋情 笑称：奔着结婚去'
	        },
	         {
	            li:1,
	            img:'./src/assets/5.jpg',
	            h1:'孕妇孙怡凌晨晒美照要加餐 董子健却称她是大胖子',
	            p:'8月3日凌晨一点多，孙怡微博晒出一张自拍美照，...'
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
	            p:'8月2日，新晋奶爸再次上线在IG上分享了一张非...'
	        },
	        {
	            li:1,
	            img:'./src/assets/10.jpg',
	            h1:'林志玲谈爱情：排队排这么久 该要有得到的机会了',
	            p:'林志玲资料图腾讯娱乐讯据台湾媒体8月2日报道，...'
	        },
	        {
	            li:1,
	            img:'./src/assets/11.jpg',
	            h1:'大S带孩子海岛度假 网友：虎背熊腰好妈妈',
	            p:'近日，大S录制节目时因为麦克风以及灯光等问题，...'
	        },
	        {
	            li:1,
	            img:'./src/assets/14.jpg',
	            h1:'“八王爷”邢昭林：撩妹嘛，男孩总该会点儿《战狼2》总票房破18亿，不到5小时又一亿进账',
	            p:'腾讯娱乐专稿（文/李栗 责编/小飚）划重点：1...'
	        },
	        {
	            li:1,
	            img:'./src/assets/15.jpg',
	            h1:'林更新怒斥偷拍狗仔：看谍战戏都没你们来的过瘾',
	            p:'近日徐峥打跟踪女记者的事情在网上引起热议，徐峥...'
	        },
	        {
	            li:1,
	            img:'./src/assets/16.jpg',
	            h1:'邓超哄孩子招数多'
	        },
	        {
	            li:1,
	            img:'./src/assets/17.jpg',
	            h1:'窦靖童独自现身  黑衣酷帅玩快闪',
	            p:'2017年8月2日讯，北京，日前，窦靖童独自一...'
	        }
	      ]
    }
  },
  methods:{
  	gotop:function(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    more:function(){
      this.morest='加载中...';
      this.$http({
        url:'./src/star.txt',
        method:'GET',
      }).then(function(res){
        let json = eval('('+res.bodyText+')');
        let star = json.star;
        for(var i=0;i<star.length;i++){
          this.arr.push(star[i]);
        }
        this.morest='点击查看更多';
      },function(){})
    }
  }
}
</script>

<style lang="scss">

</style>
