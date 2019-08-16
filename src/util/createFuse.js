import Fuse from 'fuse.js'

const createFuse = object =>
  new Fuse(object, {
    distance: 100,
    keys: [
      {
        name: 'title',
        weight: 0.7,
      },
      {
        name: 'category.name',
        weight: 0.3,
      },
    ],
    location: 0,
    maxPatternLength: 16,
    minMatchCharLength: 1,
    shouldSort: true,
    threshold: 0.5,
    tokenize: true,
  })

export default createFuse
