import Vue from 'vue'
import Vuex from 'vuex'

//让vue使用vuex
Vue.use(Vuex);



import Api from './Api'



//数据
const state={
	count:10	,
	number:22,
	texts:''
}
//数据数据
const mutations={ //处理数据的变化
	add(state){
		state.count++;
	},
	jianshao(state){
		state.count--;
	},
	clickOdd(state){//如果是偶数就添加
		state.count++;
	}	
}
//获取数据
const getters={
	count(state){
		return state.count;
	},
	number(state){
		return state.number;
	},
	texts(state){
		return state.texts;
	}
}

//定义1个函数
const actions={ //处理你要干什么，异步请求，判断，流程控制
	add:({commit})=>{
		console.log(commit)
		//commit 提交给 mutations
		commit('add')
	},
	clickyibu:({commit,state})=>{ //异步请求函数
//		console.log(commit)
		//测试用api,调用ajax
		Api.testBaidu.jsonpBaidu('vue作者').then((res)=>{
			state.texts = res.bodyText;
		})		
		console.log(Api)
	},
	jianshao:({commit})=>{
		commit('jianshao')
		console.log(commit)
	},
	clickOdd:({
		commit,
		state    //可以拿到数据
	})=>{
		if (state.count%2==0) { //如果是偶数
			commit('clickOdd')
		}
	}	
}

//导出对象
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})

