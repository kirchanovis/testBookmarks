<template>
  <div>
    <BookmarksModal
      :show="showModal"
      :form="editLink"
      :titleErrors="updateTitleErrors"
      :urlErrors="updateUrlErrors"
      @submit="submitUpdateLink"
      @closeModal="closeModal"></BookmarksModal>
    <BookmarksAdd
      :form="addLink"
      :titleErrors="titleErrors"
      :urlErrors="urlErrors"
      @submit="submitNewLink"></BookmarksAdd>
    <BookmarksList
      :links="links"
      @editLink="editLinkClick"
      @deleteLink="deleteLink"
      @copyLink="copyLink"></BookmarksList>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { findIndex } from 'lodash';
import { mapGetters } from 'vuex';
import BookmarksModal from './bookmarks/BookmarksModal';
import BookmarksAdd from './bookmarks/BookmarksAdd';
import BookmarksList from './bookmarks/BookmarksList';

export default {
  name: 'Bookmarks',
  validations: {
    editLink: {
      id: {
        required,
      },
      title: {
        required,
      },
      url: {
        required,
      },
    },
    addLink: {
      title: {
        required,
      },
      url: {
        required,
      },
    },
  },
  components: {
    BookmarksAdd,
    BookmarksList,
    BookmarksModal,
  },
  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.addLink.title.$dirty) return errors;
      if (!this.$v.addLink.title.required) {
        errors.push('Введите Подпись');
      }
      return errors;
    },
    urlErrors() {
      const errors = [];
      if (!this.$v.addLink.url.$dirty) return errors;
      if (!this.$v.addLink.url.required) {
        errors.push('Введите ссылку');
      }
      return errors;
    },
    updateTitleErrors() {
      const errors = [];
      if (!this.$v.editLink.title.$dirty) return errors;
      if (!this.$v.editLink.title.required) {
        errors.push('Введите Подпись');
      }
      return errors;
    },
    updateUrlErrors() {
      const errors = [];
      if (!this.$v.editLink.url.$dirty) return errors;
      if (!this.$v.editLink.url.required) {
        errors.push('Введите ссылку');
      }
      return errors;
    },
    ...mapGetters('bookmarks', {
      links: 'viewLinks',
    }),
  },
  data() {
    return {
      showModal: false,
      editLink: {
        id: '',
        title: '',
        url: '',
      },
      addLink: {
        title: '',
        url: '',
      },
    };
  },
  mounted() {
    this.$store.dispatch('bookmarks/getLinks');
  },
  methods: {
    editLinkClick(id) {
      const index = findIndex(this.links, ['id', id]);
      const link = this.links[index];
      this.editLink.title = link.title;
      this.editLink.url = link.url;
      this.editLink.id = link.id;
      this.showModal = true;
    },
    copyLink(url) {
      this.copyTextToClipboard(url);
    },
    deleteLink(id) {
      this.$store.dispatch('bookmarks/deleteLink', id);
    },
    closeModal() {
      this.showModal = false;
    },
    copyTextToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {},
        () => {},
      );
    },
    submitNewLink() {
      this.$v.addLink.$touch();
      if (!this.$v.addLink.$invalid) {
        this.$store.dispatch('bookmarks/addLink', {
          title: this.addLink.title,
          url: this.addLink.url,
        });
        this.clearForm();
      }
    },
    clearForm() {
      this.$v.addLink.$reset();
      this.addLink.title = '';
      this.addLink.url = '';
    },
    submitUpdateLink() {
      this.$v.editLink.$touch();
      if (!this.$v.editLink.$invalid) {
        this.$store.dispatch('bookmarks/updateLink', {
          title: this.editLink.title,
          url: this.editLink.url,
          id: this.editLink.id,
        });
        this.showModal = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
