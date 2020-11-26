import type { Collection, ItemData } from '@eloqjs/collection'
import type { PluginFunction } from 'vue'

import type { PluginOptions } from './plugin'

declare class CollectionPlugin {
  static install: PluginFunction<PluginOptions>
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    collect<Item extends ItemData>(collection: Item[]): Collection<Item>
  }

  interface Vue {
    $collect<Item extends ItemData>(collection: Item[]): Collection<Item>
  }
}

declare global {
  interface Window {
    Collection: CollectionPlugin
  }
}

export default CollectionPlugin
