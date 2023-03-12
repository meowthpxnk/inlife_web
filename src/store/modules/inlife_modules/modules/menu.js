export default {
  actions: {
    async fetchMenuDishes(ctx, category_id){

      const url = `${this.getters.getAPIUrl}/getMenuDishesByCategory/${category_id}`
      console.log(url)
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

      const semi_categories = data

      ctx.commit('updateSemiCategories', semi_categories)
      // ctx.commit('updateDishes', dishes)
    },
  },
  mutations: {
    updateDishes(state, dishes){
      state.dishes = dishes
    },
    updateSemiCategories(state, semi_categories){
      state.semi_categories = semi_categories
    },
    removeSemiCategories(state){
      // console.log(dishes)
      state.semi_categories = []
    },
    removeDishes(state, dishes){
      console.log(dishes)
      state.dishes = []
    },

    updateMenuCategories(state, categories){
      state.categories = categories
    },
  },
  state: {
    semi_categories: [],
    dishes:[],
    categories: []
  },
  getters: {
    getMenuCategories: (state) => {
      return state.categories
    },
    getMenuDishes: (state) => {
      return state.dishes
    },
    getMenuDishesByCategoryId: (state) => (category_id) => {
      return state.dishes.filter(dish => dish.category_id === category_id)
    },
    isDishesEmpty: (state) => {
      return state.dishes.length === 0
    },
    getSemiCategories: (state) => {
      return state.semi_categories
    }
  },
}
