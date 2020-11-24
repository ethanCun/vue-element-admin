<template>
	
	<div class="page3">
		
		<div>
			<div>name: {{name}}</div>
			<div>age: {{age}}</div>
			<div @click="say()">say</div>
		</div>
					
					
		<page></page>	
        <subpage></subpage>					
	</div>
	
	
</template>


<script>
	
	import page from './page2.vue'
	import subpage from './subpage.vue'
	
	export default{
		
		data(){
			
			return{
				
				name: 'zz',
				age: 20
			}
		},
		components:{
			
			page,
			subpage
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