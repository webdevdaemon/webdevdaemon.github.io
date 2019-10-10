/** @param {String|Number|Object|Null} anything */

export const slugify = anything =>
  `${anything}`
    .toLowerCase()
    .trim()
    .split(/\W+/)
    .join('-')

// const quokka-test = {
//   a: slugify(`a beauty blog post`),
//   b: slugify('go' + ' ' + 'to' + "   store, " + `now${5 * Math.random()}`),
//   c: slugify(new Date()),
//   d: slugify(null),
// }
