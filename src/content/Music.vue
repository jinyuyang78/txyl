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
	            img:'./src/assets/40.jpg',
	            h1:'杨坤霸气开唱 领口微张好身材尽显',
	            p:'腾讯娱乐讯 近日，杨坤现身赣州体育中心参加中国鹭溪...'
	        },
	         {
	            li:1,
	            img:'./src/assets/41.jpg',
	            h1:'张咪时尚大片曝光 造型性感酷似猫女',
	            p:' 腾讯娱乐讯 日前，性感歌后张咪曝光了一组时尚大片，...'
	        },
	        {
	            li:1,
	            img:'./src/assets/42.jpg',
	            h1:'邓紫棋献声《楚乔传》 片尾曲《心之焰》首发',
	            p:'腾讯娱乐讯 今日，由G.E.M.邓紫棋献声的女性权...'
	        },
	        {
	            li:1,
	            img:'./src/assets/43.jpg',
	            h1:'水木年华吐槽被侵权 力挺大音节版权保护活动',
	            p:' 腾讯娱乐讯 日前，由中国大学生音乐节发起的”为了音...'
	        },
	        {
	            li:1,
	            img:'./src/assets/44.jpg',
	            h1:'葛仲珊再度提名金曲奖 获邀拍摄微电影！',
	            p:' 腾讯娱乐讯 全球最火“Grow Up. 像你的样”...'
	        },
	        {
	            li:1,
	            img:'./src/assets/45.jpg',
	            h1:'黄淑惠阔别12年回归 内地首场音乐会开始预售',
	            p:' 腾讯娱乐讯 马来西亚知名唱作人Aki黄淑惠，阔别歌...'
	        },
	        {
	            li:1,
	            img:'./src/assets/46.jpg',
	            h1:'《战狼2》总票房破18亿，不到5小时又一亿进账',
	            p:'截至8月2日上午16：30，《战狼2》累计票房'
	        },
	         {
	            li:1,
	            img:'./src/assets/47.jpg',
	            h1:'所谓娱乐第931期'
	        },
	         {
	            li:1,
	            img:'./src/assets/48.jpg',
	            h1:'导演范立欣被曝骚扰女性被拘留 本人挂断电话拒回应'
	        },
	         {
	            li:1,
	            img:'./src/assets/49.jpg',
	            h1:'曹云金大方承认与唐菀恋情 笑称：奔着结婚去'
	        },
	         {
	            li:1,
	            img:'./src/assets/50.jpg',
	            h1:'孕妇孙怡凌晨晒美照要加餐 董子健却称她是大胖子',
	            p:'8月3日凌晨一点多，孙怡微博晒出一张自拍美照，...'
	        },
	        {
	            li:1,
	            img:'./src/assets/51.jpg',
	            h1:'吴京的“战狼式”撩妹：嘴皮子贼6，上节目反套路',
	            i1:0,
	            i2:'0'
	        },
	        {
	            li:1,
	            img:'./src/assets/52.jpg',
	            h1:'张柏芝带病为儿子庆生 谢霆锋被批“爸爸去哪儿了”',
	            p:'张柏芝带病为儿子庆生 谢霆锋被批“爸爸去哪儿了”',
	            i1:0,
	            i2:'16'
	        },
	        {
	            li:1,
	            img:'./src/assets/53.jpg',
	            h1:'陈冠希也成炫娃狂魔 这次晒的是女儿的布娃娃',
	            p:'8月2日，新晋奶爸再次上线在IG上分享了一张非...'
	        },
	        {
	            li:1,
	            img:'./src/assets/54.jpg',
	            h1:'林志玲谈爱情：排队排这么久 该要有得到的机会了',
	            p:'林志玲资料图腾讯娱乐讯据台湾媒体8月2日报道，...'
	        },
	        {
	            li:1,
	            img:'./src/assets/55.jpg',
	            h1:'大S带孩子海岛度假 网友：虎背熊腰好妈妈',
	            p:'近日，大S录制节目时因为麦克风以及灯光等问题，...'
	        },
	        {
	            li:1,
	            img:'./src/assets/56.jpg',
	            h1:'“八王爷”邢昭林：撩妹嘛，男孩总该会点儿《战狼2》总票房破18亿，不到5小时又一亿进账',
	            p:'腾讯娱乐专稿（文/李栗 责编/小飚）划重点：1...'
	        },
	        {
	            li:1,
	            img:'./src/assets/57.jpg',
	            h1:'林更新怒斥偷拍狗仔：看谍战戏都没你们来的过瘾',
	            p:'近日徐峥打跟踪女记者的事情在网上引起热议，徐峥...'
	        },
	        {
	            li:1,
	            img:'./src/assets/58.jpg',
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
