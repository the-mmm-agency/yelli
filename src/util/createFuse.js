import Fuse from 'fuse.js'

const createFuse = object =>
  new Fuse(object, {
    shouldSort: true,
    threshold: 0.5,
    tokenize: true,
    location: 0,
    distance: 100,
    maxPatternLength: 16,
    minMatchCharLength: 1,
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
  })

export default createFuse
