<template>
  <div>
    <BookmarksAdd></BookmarksAdd>
    <BookmarksList></BookmarksList>
  </div>
</template>

<script>
import BookmarksAdd from './bookmarks/BookmarksAdd'
import BookmarksList from './bookmarks/BookmarksList'
export default {
  name: 'Bookmarks',
  components: {
    BookmarksAdd,
    BookmarksList
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
