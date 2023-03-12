export default {
    actions: {
    },
    mutations: {
      enableFullLoader(state){
        state.fullLoader = true
      },
      disableFullLoader(state){
        state.fullLoader = false
      },

      enableSemiLoader(state){
        state.semiLoader = true
      },
      disableSemiLoader(state){
        state.semiLoader = false
      }
    },
    state: {
        fullLoader: false,
        semiLoader: false,
    },
    getters: {
      isActiveFullLoader: (state) => {
        return state.fullLoader
      },
      isActiveSemiLoader: (state) => {
        return state.semiLoader
      },
    },
  }
  