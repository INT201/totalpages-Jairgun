const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  page = arrayItems.length/rowsPerPage
  if(totalPages?.arrayItems == undefined) return 1
  else if(totalPages?.rowsPerPage == undefined) return undefined
  else return Math.ceil(page)
}
module.exports = totalPages
