export default build =>
    build.query({
        query: q => `/search/${q}`,
    });