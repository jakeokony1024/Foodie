export default build =>
    build.query({
        query: q => `/search-preview/${q}`,
    })