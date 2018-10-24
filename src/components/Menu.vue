<template>
  <div class="menu" >
    <div class="menu__item">
      <router-link class="menu__link menu__link_select" :to="'/'">Главная</router-link>
    </div>
    <div class="menu__item">
      <router-link class="menu__link " :to="'/bookmarks'">Закладки</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style lang="scss">
$colorLink:#3367d6;
$colorText:#5a5a5a;
.menu {
  padding: 0 15px;
  user-select: none;
  text-align: left;
  font-size: 81.25%;
  &__item{
    padding: 10px 0;
  }
  &__link{
    color: $colorText;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    height: 100%;
    &_active{
      color: $colorLink;
    }
    &:hover{
      color:$colorLink;
    }
  }
}

</style>
