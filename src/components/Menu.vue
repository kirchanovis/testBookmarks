<template>
  <div class="menu" >
    <a href="/" class="men__link menu__link_select" >
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
menu {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 8px;
  user-select: none;
  &__link{
    color: $colorText;
  }
}

</style>
