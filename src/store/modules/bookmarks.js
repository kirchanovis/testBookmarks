import bookmarks from '../../api/bookmarks'
import {size} from 'lodash'

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
  updateLink({commit}, link){
      commit('UPDATE_LINK', link)
  },
}

// mutations
const mutations = {
  SET_LINKS(state, links) {
    state.links = links
  },
  ADD_LINK(state, link) {
    const nextId  = size(state.links)
    state.links.push({...link, id: nextId})
  },
  UPDATE_LINK(state, link){
    state.links.splice(link.id, 1)
    state.links.push(link);
  },
  DELETE_LINK(state, index){
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