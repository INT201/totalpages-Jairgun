const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if(rowsPerPage == undefined || null) return 1
  else if(arrayItems == undefined || null) return undefined
  else page = (arrayItems.length)/rowsPerPage
  return page == Infinity? 1 : Math.ceil(page)
}
module.exports = totalPages
