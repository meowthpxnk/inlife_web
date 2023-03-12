export default{
  actions:{
    async fetchInlifeInfo(ctx){
      const url = `${this.getters.getAPIUrl}/getInlifeInfo`
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
      const data = answer.data

      ctx.commit('updateMenuCategories', data.menu.categories)
      ctx.commit('updateEvents', data.events)
      ctx.commit('updatePhotoReports', data.photo_reports)
    }
  }
}
