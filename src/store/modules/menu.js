export default {
  actions: {
    // async fetchMenuItems(ctx, link){
    //   const method = "getMenu/" + link
    //   const requestURL = api_url + method
    //   const responce = await fetch(requestURL,{
    //     method: "GET",
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //   })
    //   const menuItems = await responce.json()
    //
    //   // console.log(menuItems.dump.error)
    //   if (menuItems.dump.error){
    //     document.location.href = "/restaurants"
    //   }
    //
    //   var r = document.querySelector(':root');
    //   r.style.setProperty('--color-main-app', menuItems.dump.restaurant.color);
    //
    //
    //   const favicon = document.querySelector("link[rel~='icon']")
    //   favicon.href = api_url + menuItems.dump.restaurant.logo
    //
    //   console.log(menuItems)
    //
    //   document.title = menuItems.dump.restaurant.title
    //
    //   const menu = menuItems.dump
    //
    //   const categories = menu.categories
    //   const dishes = menu.dishes
    //
    //   const banners = menu.banners
    //   const restaurant = menu.restaurant
    //
    //   const another_restaurants = menu.another_restaurants
    //
    //   ctx.commit("updateCategories", categories)
    //   ctx.commit("updateDishes", dishes)
    //   ctx.commit("updateBanners", banners)
    //   ctx.commit("updateRestaurant", restaurant)
    //   ctx.commit("updateAnotherRestaurants", another_restaurants)
    //
    //   return { categories: menu.categories }
    // },
  },
  mutations: {
    // updateAnotherRestaurants(state, another_restaurants){
    //   state.another_restaurants = another_restaurants
    //   console.log(another_restaurants)
    // },
  },
  state: {
    // another_restaurants: [],
  },
  getters: {
    // getFreeDeliveryPrice: (state) => {
    //   return state.restaurant.free_delivery_price
    // },
  },
}
