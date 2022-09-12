const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  page = arrayItems.length/rowsPerPage
  if(arrayItems == undefined || null) return 1
  else if(rowsPerPage == undefined || null) return undefined
  else return Math.ceil(page)
}
module.exports = totalPages
