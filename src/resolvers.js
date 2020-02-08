export const Query = {
  stories: async (_, args, ctx) => {
    const { type, first, last } = args
    let { skip } = args
    let ids = await ctx.db.findIdsByType(type)
    if (!skip) {
      skip = 0
    }
    if (first) {
      ids = ids.slice(skip, first)
    } else if (last) {
      ids = ids.reverse()
      ids = ids.slice(skip, last)
      ids = ids.reverse()
    } else {
      ids = ids.slice(skip)
    }
    const items = await ctx.db.findItems(ids)
    return items
  },
}

export default {
  Query,
}
