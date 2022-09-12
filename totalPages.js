const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if(totalPages?.rowsPerPage == undefined) return 1
  else if(totalPages?.arrayItems == undefined) return undefined
  else page = (arrayItems.length)/rowsPerPage
   return page == Infinity? 1 : Math.ceil(page)
}
module.exports = totalPages
