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
	            img:'./src/assets/25.jpg',
	            h1:'《娘子军传奇》亮相上影节 真枪实弹还原红色经典',
	            p:'腾讯娱乐讯（文/郭千华摄影/薛建宇）6月20日，电...'
	        },
	         {
	            li:1,
	            img:'./src/assets/26.jpg',
	            h1:'1905电影网与1905数字娱乐平台达成战略合作',
	            p:' 腾讯娱乐讯（文/冉蕊视频/秦付强）6月19日下午...'
	        },
	        {
	            li:1,
	            img:'./src/assets/27.jpg',
	            h1:'东方好莱坞联合一响天开斥10亿成立影视基金',
	            p:' 腾讯娱乐讯（文/冉蕊视频/秦付强）6月19日，“东...'
	        },
	        {
	            li:1,
	            img:'./src/assets/28.jpg',
	            h1:'《中国电影产业研究报告》发布 探讨电影工业化',
	            p:' 腾讯娱乐讯 （文/耿飏 图/薛建宇）...'
	        },
	        {
	            li:1,
	            img:'./src/assets/29.jpg',
	            h1:'王大陆遭张天爱甜蜜“腿咚” 大喊：好幸福呀！',
	            p:' 腾讯娱乐讯（文/冉蕊  图/薛建宇  视频/秦付...'
	        },
	        {
	            li:1,
	            img:'./src/assets/30.jpg',
	            h1:'《追踪》双发预告海报 罗晋首度露凶担纲男一',
	            p:' 腾讯娱乐讯 由李霄峰执导，罗晋、聂远、黄觉、姜&#...'
	        },
	        {
	            li:1,
	            img:'./src/assets/31.jpg',
	            h1:'《战狼2》总票房破18亿，不到5小时又一亿进账',
	            p:'截至8月2日上午16：30，《战狼2》累计票房'
	        },
	         {
	            li:1,
	            img:'./src/assets/32.jpg',
	            h1:'所谓娱乐第931期'
	        },
	         {
	            li:1,
	            img:'./src/assets/33.jpg',
	            h1:'导演范立欣被曝骚扰女性被拘留 本人挂断电话拒回应'
	        },
	         {
	            li:1,
	            img:'./src/assets/34.jpg',
	            h1:'曹云金大方承认与唐菀恋情 笑称：奔着结婚去'
	        },
	         {
	            li:1,
	            img:'./src/assets/35.jpeg',
	            h1:'孕妇孙怡凌晨晒美照要加餐 董子健却称她是大胖子',
	            p:'8月3日凌晨一点多，孙怡微博晒出一张自拍美照，...'
	        },
	        {
	            li:1,
	            img:'./src/assets/36.jpg',
	            h1:'吴京的“战狼式”撩妹：嘴皮子贼6，上节目反套路',
	            i1:0,
	            i2:'0'
	        },
	        {
	            li:1,
	            img:'./src/assets/37.jpg',
	            h1:'张柏芝带病为儿子庆生 谢霆锋被批“爸爸去哪儿了”',
	            p:'张柏芝带病为儿子庆生 谢霆锋被批“爸爸去哪儿了”',
	            i1:0,
	            i2:'16'
	        },
	        {
	            li:1,
	            img:'./src/assets/38.jpg',
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
