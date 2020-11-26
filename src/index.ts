import { collect, Collection } from '@eloqjs/collection'
import { VueConstructor } from 'vue'

import type { PluginOptions } from '../types/plugin'

const VueCollection = {
  install(Vue: VueConstructor, options?: PluginOptions): void {
    if (!options) {
      options = {}
    }

    Collection.config = options

    Vue.collect = Vue.prototype.$collect = collect
  }
}

// Install by default if using the script tag
// istanbul ignore next
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCollection)
}

export default VueCollection
