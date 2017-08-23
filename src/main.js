import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import name from 'components/homepage/component/name.vue';
import disease from 'components/homepage/component/disease.vue';
import pollutants from 'components/homepage/component/pollutants.vue';
import onestation from 'components/homepage/component/onestation.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);



let app = Vue.extend(App);

let router = new VueRouter({        //创建一个路由器实例
	linkActiveClass: 'active'
});

router.map({
	'/information/name':{
		component: name
	},
	'/information/disease':{
		component: disease
	},
	'station/pollutants':{
		component: pollutants
	},
	'onestation/1':{
		component: onestation
	}
});



router.start(app,'#app');   //挂载
// router.go('/name');     //改变哈希地址
router.redirect({
	'/': '/information/name'
})