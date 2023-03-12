export default {
  mutations: {
    openHamburgerMenu(state){
      state.is_open_hamburger_menu = true
    },
    closeHamburgerMenu(state){
      state.is_open_hamburger_menu = false
    },
  },
  state: {
    is_open_hamburger_menu: false,
  },
  getters: {
    isOpenedHamburgerMenu: (state) => {
      return state.is_open_hamburger_menu
    },
  },
}
