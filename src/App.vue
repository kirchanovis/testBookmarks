<template>
  <div id="app" class="app">
    <div class="app__menu">
      <Menu></Menu>
    </div>
    <div class="app__content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: 'App',
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic');
.app {
  font-family: 'Roboto', 'Segoe UI', Tahoma, sans-serif;
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
