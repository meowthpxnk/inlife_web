export default {
  actions: {
    async fetchGetEventInfo(ctx, id){
      const url = `${this.getters.getAPIUrl}/getEventInfo/${id}`
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const answer = await response.json()
      if (!(answer.ok)){
        throw new Error (answer.error)
      }
      const event = answer.data

      ctx.commit("updateActiveEvent", event)
    }
  },
  mutations: {
    updateActiveEvent(state, event){
      state.active_event = event
    },
    removeActiveEvent(state){
      state.active_event = null
    },

    updateEvents(state, events){
      state.events = events
    }
  },
  state: {
    active_event: null,
    events: [],
  },
  getters: {
    getAllEvents: (state) => {
      return state.events
    },
    getEventById: (state) => {
      console.log(state)
      return null
    },
    getActiveEvent: (state) => {
      return state.active_event
    }
  },
}
