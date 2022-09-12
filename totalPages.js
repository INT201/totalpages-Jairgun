const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  let page = arrayItems.length / rowsPerPage
  if(rowsPerPage == null || undefined){console.log(1)}
  else if(arrayItems == null || undefined){console.log(undefined)}
  else console.log(Math.ceil(page))
}
module.exports = totalPages
