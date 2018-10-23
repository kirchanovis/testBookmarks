import bookmarks from '../../api/bookmarks'

// initial state
// shape: [{ id, quantity }]
const state = {
  links: [],
}

// getters
const getters = {
  viewLinks: (state) => {
    return state.links.map( (link) => {
      return {...link, icon: `${link.url}/favicon.ico`}
    })
  },
}

// actions
const actions = {
  getLinks({commit}) {
    bookmarks.getBookmarks(links => {
      commit('SET_LINKS', links)
    })
  },
  addLink({commit}, link){
      commit('ADD_LINK', link)
  },
  deleteLink({commit}, index){
      commit('DELETE_LINK', index)
  },
  updateLink({commit}, obj){
      commit('UPDATE_LINK', {user : obj.link, index: obj.index})
  },
}

// mutations
const mutations = {
  SET_LINKS(state, links) {
    state.links = links
  },
  ADD_USER(state, link) {
    state.links.push(link)
  },
  UPDATE_USER(state, {link, index}){
      state.links.splice(index, 1)
      state.links.push(link);
  },
  DELETE_USER(state, index){
      state.links.splice(index, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}