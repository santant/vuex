<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1></h1>
    <h2>vue demo</h2>
    <button @click="add">增加</button>
    <!--<button @click="jianshao">减少</button>
    <button @click="clickOdd">偶数增加</button>
    <button @click="clickyibu">异步函数</button>-->
    <div id="">
    		现在数字为<span>{{count}}</span>
    </div>
    <!--<b>汉子为{{texts}}</b>-->
  </div>
</template>

<script>
//得到vue的两个方法 mapGetters获取	,mapActions提交
import {mapGetters, mapActions} from 'vuex'

export default {
	
  name: 'app',
computed:mapGetters([ //获得数据 mapGetters
      'count'
//    'texts'
     
]),
  methods:mapActions([ //用mapActions(提交方法)来管理
  	'add'
//	'jianshao',
//	'clickOdd',
//	'clickyibu'
  ])
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .a_wenjuan{
  	>span{
  		color: red;
  	}
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
