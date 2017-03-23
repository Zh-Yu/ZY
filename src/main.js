import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';
import computers from 'components/computers/computers.vue';


import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
	linkActiveClass: 'active'
});

router.map({
	'/goods':{
		component: goods
	},
	'/ratings':{
		component:ratings
	},
	'/seller':{
		component: seller
	},
	'/computers':{
		component: computers
	}
});

router.start(app,'#app');
router.go('/computers');     //改变哈希地址