<template>
  <div class="centered-message">
    Пустая страница
  </div>
</template>

<script>


export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss">
.centered-message{
  align-items: center;
  color: #6e6e6e;
  display: flex;
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  height: 100%;
  justify-content: center;
}
</style>
