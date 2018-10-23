<template>
  <div class="menu" >
    <a href="/" class="menu__link menu__link_select" >
      Главная
    </a>
    <a href="/" class="menu__link" >
      Закладки
    </a>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss">
$colorLink:#3367d6;
$colorText:#5a5a5a;
.menu {
  padding-top: 8px;
  user-select: none;
  text-align: left;
  font-family: Roboto, 'Segoe UI', Tahoma, sans-serif;
  font-size: 81.25%;
  &__link{
    color: $colorText;
    text-decoration: none;
    &:hover{
      color:$colorLink;
    }
  }
}

</style>
