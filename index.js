import tab from './src/index.vue'

const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.component(tab.name, tab)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  tab
}
