import { Collection, ItemData } from '@eloqjs/collection'

export interface PluginOptions {
  fresh?<T extends ItemData>({
    collection,
    include
  }: {
    collection: Collection<T>
    include: string[]
  }): Promise<T[] | Collection<T>>
  primaryKey?<T extends ItemData>({
    collection
  }: {
    collection: Collection<T>
  }): string
  toQuery?<T extends ItemData>({
    collection,
    item
  }: {
    collection: Collection<T>
    item: T
  }): T
}
