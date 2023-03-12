export default {
  actions: {
    async fetchGetPhotoReportInfo(ctx, id){

      const url = `${this.getters.getAPIUrl}/getPhotoReportInfo/${id}`
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
      const photo_report = answer.data

      ctx.commit('updateActivePhotoReport', photo_report)
    },
  },
  mutations: {
    updateActivePhotoReport(state, photo_report){
      state.active_photo_report = photo_report
    },
    removeActivePhotoReport(state){
      state.active_photo_report = null
    },

    updatePhotoReports(state, photo_reports){
      state.photo_reports = photo_reports
    }
  },
  state: {
    active_photo_report: null,
    photo_reports: [],
  },
  getters: {
    getAllPhotoReports: (state) => {
      return state.photo_reports
    },

    getActivePhotoReport: (state) => {
      return state.active_photo_report
    },
  },
}
