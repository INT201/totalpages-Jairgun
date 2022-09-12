const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  let page = (arrayItems.length)/rowsPerPage
  if(rowsPerPage == undefined || null) return 1
  else if(arrayItems == undefined || null) return undefined
  else page == Infinity? 1 : Math.ceil(page)
}
module.exports = totalPages
