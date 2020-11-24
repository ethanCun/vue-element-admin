<template>
	
	<div class="page2">
		<div>name: {{name}}</div>
		<div>age: {{age}}</div>
		<div @click="say()">say</div>
	</div>
	
	
</template>


<script>
	
	
	export default{
		
		data(){
			
			return{
				
				name: 'zz',
				age: 20
			}
		},
		components:{
			
		},
		methods:{
			
			say(){
				
				alert("say")
			}
		}
	}
	
</script>


<style scoped="scoped">
	
	
</style>