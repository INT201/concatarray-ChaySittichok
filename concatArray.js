const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
if((array1 == null || undefined) && (array2 == null || undefined)){
  return undefined
}
else if(array1 == null || undefined ){
  return array2
}
else if(array2 == null || undefined ){
  return array1
}
else if((array1 == [])&&(array2 == [])){
  return '[]'
}

}
module.exports = concatArray
