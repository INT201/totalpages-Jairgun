const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if(rowsPerPage == null || undefined){
    console.log(1)
}
else if(arrayItems == null || undefined){
    console.log(undefined)
}
else{
    page = arrayItems.length/rowsPerPage
    if(page = Infinity){
        return 1
    }
    console.log(Math.ceil(page))
}
}
module.exports = totalPages
