<template>
<div v-if="show" class="modal-wrapper active">
    <div class="modal-overlay"></div>
    <div class="modal-container">
        <div class="modal">
            <div class="modal__close">
                <img class="action__img" @click="closeModal()" src="/static/assets/delete.svg">
            </div>
            <form @submit="updateLinkSubmit">
                <div class="modal__body">
                    <div class="modal__title">Редактировать закладку</div>
                    <div class="modal__input input">
                        <input class="input__text" type="text" v-model="form.title">
                        <label class="input__label">Подпись</label>
                        <div class="input__error">{{titleErrors[0]}}</div>
                    </div>
                    <div class="modal__input input">
                        <input class="input__text" type="text" v-model="form.url">
                        <label class="input__label">Ссылка</label>
                        <div class="input__error">{{urlErrors[0]}}</div>
                    </div>
                    <input class="input__hidden" type="hidden" v-model="form.id">
                </div>
                <div class="modal__footer">
                    <button class="button">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'BookmarksModal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    form: {
      type: Object,
      required: false,
    },
    titleErrors: {
      type: Array,
      required: false,
    },
    urlErrors: {
      type: Array,
      required: false,
    },
  },
  methods: {
    updateLinkSubmit(e) {
      this.$emit('submit');
      e.preventDefault();
    },
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style lang="scss">
// modal
$colorLink:#3367d6;
$bgColorForm: #fff;
.modal-wrapper {
    display: table;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    z-index: 99;
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0;
        visibility: hidden;
        z-index: 1;
    }
    .modal-container {
        display: table-cell;
        vertical-align: middle;
        position: relative;
        z-index: 2;
        opacity: 0;
        visibility: hidden;
    }
    &.active {
        opacity: 1;
        visibility: visible;
        .modal-overlay {
            opacity: 0.5;
            visibility: visible;
        }
        .modal-container {
            opacity: 1;
            visibility: visible;
        }
        .modal {
            transform: translateY(0px);
            opacity: 1;
            visibility: visible;
        }
    }
}
.modal {
    background: #fff;
    max-width: 600px;
    max-height: 600px;
    box-shadow: 0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12);
    margin: auto;
    display: block;
    border-radius: 5px;
    visibility: hidden;
    position: relative;
    &__body {
        display: block;
        padding: 4rem 3rem;
    }
    &__footer {
        display: block;
        padding: 0 2rem 1rem;
        text-align: right;
    }
    &__close{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 16px;
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
