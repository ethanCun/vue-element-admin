<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<!-- 
	导入自定义的样式
 -->
<style>
    @import "./assets/css/main.css";
    /* @import "./assets/css/color-dark.css"; */     /*深色主题*/
    @import "./assets/css/theme-green/color-green.css";   /*浅绿色主题*/
    .el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {
    color: #bfcbd9;
    cursor: not-allowed;
    background-image: none;
    background-color: #eef1f6;
    border-color: #d1dbe5;
}
</style>
