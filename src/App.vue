<template>
  <div id="app">
  	<transition name="fade"  mode="out-in">
			<router-view></router-view>
	</transition>
  	
  	
   
  </div>
</template>

<script>
 
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
	/*切换路由的动画*/
	.fade-enter-active,
	.fade-leave-active {
		transition: all .2s ease;
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
</style>
