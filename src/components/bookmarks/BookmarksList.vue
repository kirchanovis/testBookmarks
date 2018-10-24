<template>
  <div class="bookmarks">
    <div class="websites">
      <div v-for="link in links" :key="link.id" class="websites__item website">
        <div class="website__left">
          <i class="website__icon" :style="{ backgroundImage: `url(${baseurl(link.url)}/favicon.ico)` }"></i>
          <a class="website__title" title="" target="_blank" :href="link.url" >
            {{link.title}}
          </a>
          <span class="website__domain">{{link.url}}</span>
        </div>
        <div class="website__right action">
          <div class="action__item">
            <img class="action__img" @click="deleteLink(link.id)" src="/static/assets/delete.svg" title="Удалить" alt="удалить">
          </div>
          <div class="action__item">
              <img class="action__img" @click="editLink(link.id)" src="/static/assets/edit.svg" title="Редактировать" alt="редактировать">
          </div>
          <div class="action__item">
            <img class="action__img" @click="copyLink(link.url)" src="/static/assets/copy.svg" title="Копировать ссылку" alt="Копировать ссылку">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BookmarksList',
  props: {
    links: {
      type: Array,
      required: false,
    },
  },
  methods: {
    baseurl(url) {
      const pathArray = url.split('/');
      const protocol = pathArray[0];
      const host = pathArray[2];
      return protocol + '//' + host;
    },
    editLink(id) {
      this.$emit('editLink', id);
    },
    deleteLink(id) {
      this.$emit('deleteLink', id);
    },
    copyLink(url) {
      this.$emit('copyLink', url);
    },
  },
};

</script>

<style lang="scss">
$bgColorWebsite: #fff;
$textColorWebsiteDomain: #5f6368;
$textColorWebsiteTitle: #000;
.bookmarks{
  position: relative;
}
.websites{
  font-family: 'Roboto', 'Segoe UI', Tahoma, sans-serif;
  background-color: $bgColorWebsite;
  margin: 25px 25%;
  padding: 15px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
  &__item{
    text-align: left;
    margin: 15px 0;
  }
}
.website{
  display: flex;
  &__icon{
    padding-right: 16px;
    margin: 5px;
    vertical-align: -1px;
    background-repeat: no-repeat;
    background-size: 16px 16px;
  }
  &__title{
    text-decoration: none;
    color: $textColorWebsiteTitle;
    font-size: 14px;
    padding: 5px;
  }
  &__domain{
    font-size: 13px;
    color: $textColorWebsiteDomain;
  }
  &__left{
    flex: 1;
  }
  &__right{
    flex: 0 0 70px;
  }
}
.action{
  display: flex;
  &__item{
    flex:1;
  }
  &__img{
    cursor: pointer;
    width: 14px;
    & path{
      fill:#5f6368
    }
  }
}
</style>
