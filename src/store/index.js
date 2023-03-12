import { createStore } from "vuex";
import hamburger_menu from './modules/hamburger_menu'
import api_url from './modules/api_url'
import loader from './modules/loader'

import inlife_modules from './modules/inlife_modules'

const modules = {
  hamburger_menu,
  api_url,
  loader,
}


for (let name in inlife_modules){
  modules[name] = inlife_modules[name]
}

export default createStore({
  modules: modules
});
