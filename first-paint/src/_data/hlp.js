// @ts-check

const sort = (arr, elm) => {
  // sort array by title
  arr.sort((a, b) => {
    if (a[elm] < b[elm]) return -1

    if (a[elm] > b[elm]) return 1

    return 0
  })
}

module.exports = {
  sort
}
