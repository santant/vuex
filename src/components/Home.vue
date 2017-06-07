<template>
	<div id="home">
		<div id="">
			 <h3>welcome vuex-demo</h3>
		    <input type="button" value="增加" @click="add">
		    <div>
		      现在数字为: {{count}}
		    </div>
		    homes		    
		</div>
						
	</div>
	</div>
</template>

<script>
	 import Api from '../API.js'
//	 import filter from '../filter.js'

	 
	 import {mapGetters, mapActions} from 'vuex'
	 export default{
	 	//拿到数据
	    computed:mapGetters([
	      'count'
	    ]),
	    //提交方法
	    methods:mapActions([
	      'add'
	    ])
	}
</script>

<style type="text/css" lang="less">
	/*@import '../assets/less/style.less';*/

	
	
</style>