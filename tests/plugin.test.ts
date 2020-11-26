import { Collection } from '@eloqjs/collection'
import { createLocalVue } from '@vue/test-utils'

import VueCollection from '../src'

describe('Install Vue Collection', () => {
  it('should register `collect` on `Vue`', () => {
    const Vue = createLocalVue()
    Vue.use(VueCollection)

    expect(Vue.collect).toBeInstanceOf(Function)
    expect(Vue.collect([])).toBeInstanceOf(Collection)
  })

  it('should register `$collect` on `Vue.prototype`', () => {
    const Vue = createLocalVue()
    Vue.use(VueCollection)

    expect(Vue.prototype.$collect).toBeInstanceOf(Function)
    expect(Vue.prototype.$collect([])).toBeInstanceOf(Collection)
  })

  it('should be able to configure `collect`', () => {
    const Vue = createLocalVue()
    Vue.use(VueCollection, {
      primaryKey: () => 'slug'
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(Vue.collect([]).primaryKey()).toBe('slug')
  })
})
