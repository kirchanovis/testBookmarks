<template>
  <div id="app" class="app">
    <div class="app__menu">
      <h1>Меню</h1>
      <Menu></Menu>
    </div>
    <div class="app__content">
      <h1>Контент</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components: {
    Menu
  },
};
</script>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  &__menu{
    flex: 0 0 100px;  
  }
  &__content{
    flex:1;
  }
}
</style>
