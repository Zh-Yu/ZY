import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import name from 'components/homepage/component/name.vue';
import disease from 'components/homepage/component/disease.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    


import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);



let app = Vue.extend(App);

let router = new VueRouter({
	linkActiveClass: 'active'
});

router.map({
	'/name':{
		component: name
	},
	'/disease':{
		component: disease
	}
});

router.start(app,'#app');
router.go('/name');     //改变哈希地址