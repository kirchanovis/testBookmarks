<template>
  <form class="form" @submit="addLinkSubmit">
    <div class="form__title">Добавть закладку</div>
    <div class="form__clear"></div>
    <div class="form__input input">
      <input class="input__text" type="text" v-model="form.title" >
      <label class="input__label">Подпись</label>
      <div class="input__error">{{titleErrors[0]}}</div>
    </div>
    <div class="form__input input">
      <input class="input__text" type="text" v-model="form.url">
      <label class="input__label">Ссылка</label>
      <div class="input__error">{{urlErrors[0]}}</div>
    </div>
    <div class="form__clear"></div>
    <div class="form__button">
      <button class="button">Сохранить</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'BookmarksAdd',
  props: {
    form: {
      type: Object,
      required: false
    },
    titleErrors: {
      type: Array ,
      required: false
    },
    urlErrors: {
      type: Array,
      required: false
    }
  },
  methods:{
    addLinkSubmit (e) {
      this.$emit('submit');
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss">
$colorLink:#3367d6;
$bgColorForm: #fff;
.form{
  background-color: $bgColorForm;
  margin: 25px 25%;
  padding: 15px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Roboto', 'Segoe UI', Tahoma, sans-serif;
  font-size: 16px;
  &__title{
    flex: 0 0 calc(50% - 50px);
    text-align: left;
    padding: 0 25px;
  }
  &__input{
    flex: 0 0 calc(50% - 50px)
  }
  &__clear{
    flex: 0 0 50%;
  }
  &__button{
    flex: 0 0 calc(50% - 50px);
    text-align: right;
    padding: 0 25px;
  }
}
.input{
  margin: 25px;
  position: relative;
  margin-bottom: 30px;
  text-align: left;
  &__text{ 
    color: #333;
    font-size: 14px;
    padding: 10px 10px 10px 0;
    position: relative;
    display: block;
    border: none;
    width: 100%;
    border-bottom: 1px solid #d5d5d5;
    &:focus {
      outline: none;
    }
    &:focus + label,
    &:valid + label {
      top: -10px;
      font-size: 12px;
      color: $colorLink;
    }
  }
  &__label{
    color: #999;
    font-size: 14px;
    position: absolute;
    pointer-events: none;
    top: 10px;
    transition: 0.2s ease all;
    width: 100%;
  }
  &__error{
    color: #d50000;
    font-size: 14px;
  }
}
.button{
  background: $colorLink;
  border: 0;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(146, 146, 146, 0.4);
  color: #FFF;
  font-size: .75rem;
  padding: .5rem 2.5rem;
  text-transform: uppercase;
  font-weight: bold;
  &:hover{
    cursor: pointer;
    background: #517fe2;
  }
}
</style>
