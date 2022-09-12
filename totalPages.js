const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  let page = (arrayItems.length)/rowsPerPage
  if(totalPages?.arrayItems == undefined) return 1
  else if(totalPages?.arrayItems == undefined) return undefined
  else return Math.ceil(page)
}
module.exports = totalPages
