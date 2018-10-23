const bookmarks = [
  {"id": 1, "title": "Google", "url": 'https://www.google.com/'},
  {"id": 2, "title": "Введение — Vue.js", "url": "https://ru.vuejs.org/v2/guide/"},
  {"id": 3, "title": "GitHub", "url": "https://github.com/"}
]

export default {
  getBookmarks (cb) {
    setTimeout(() => cb(bookmarks), 100)
  }
}