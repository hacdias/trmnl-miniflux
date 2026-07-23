function transform(input) {
  const entries = (input.entries || []).map((entry) => {
    const feed = entry.feed || {}
    const category = feed.category || {}
    return {
      title: entry.title,
      published_at: entry.published_at,
      feed: {
        title: feed.title,
        category: { title: category.title },
      },
    }
  })

  return { entries }
}
