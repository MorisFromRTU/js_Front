<template>
  <div id="app">
    <component :is="layout">
     <router-view/>
    </component>
  </div>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout';
  import AuthLayout from '@/layouts/AuthLayout';

  export default{
    name: 'App',
    components: {
      MainLayout, AuthLayout
    },
    computed:{
      layout(){
        return this.$route.meta?.layout || 'main-layout'
      }
    }
  }
</script>

<style>
/* .link{
  font-size: 18px;
  color: #ffffff;
  }
a{
color: #ffffff;
  }
  
body {
  margin: 0;
      background-image: url(./assets/russia.jpg);
    background-position: no-repeat center center;
    background-size: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.cards {
  display: flex;
  flex-direction: row;
}
img {
  border-radius: 15px 100px 15px 100px;
  border: 5px solid #000000;
  margin-top: -4px;
  margin-left: -300px;
  position:relative
} */
</style>
