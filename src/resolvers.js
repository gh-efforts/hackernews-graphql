export const Query = {
  stories: async (_, args, ctx) => {
    const { type, first, last, skip } = args
    const ids = await ctx.db.findIdsByType(type, first, last, skip)
    const items = await ctx.db.findItems(ids)
    return items
  },
}

export default {
  Query,
}
