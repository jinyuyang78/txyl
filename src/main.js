import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter);
Vue.use(VueResource);
// 娱乐
import disport from './content/disport.vue'
// 明星
import star from './content/star.vue'
// 电影
import Film from './content/Film.vue'
// 音乐
import Music from './content/Music.vue'
const router = new VueRouter({
	routes:[
		{path:'/disport',component:disport},
		{path:'/star',component:star},
		{path:'/Film',component:Film},
		{path:'/Music',component:Music},
		{path:'*',redirect:'/disport'}
	]
})


new Vue({
	router:router,
	  el: '#app',
	  render: h => h(App)
})
