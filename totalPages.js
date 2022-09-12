const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if(totalPages?.arrayItems == undefined) return 1
  else if(totalPages?.rowsPerPage == undefined) return undefined
  else page = arrayItems.length/rowsPerPage
       return Math.ceil(page)
}
module.exports = totalPages
