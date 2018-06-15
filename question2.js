function decodeString(s) {
  //get the string contained within brackets
  let str = s.slice(1).substring(1, s.length-2)
  //assign blank string
  let decodedString = ""
  
  if (!str.includes('[')){ //string does not contain a bracket
    return str.repeat(+s[0])
  }
  else if (str.includes('[')){ //string contains a bracket, split on the first bracket into array and iterate over it decodedString 
    let strArray = str.split('[')
    for (i = 0; i < +s[0]; i++) {
        decodedString += strArray[0].slice(0, -1)
        for (j = 0; j < strArray[0][strArray.length-1]; j++){
          let outerLetters = strArray[0].slice(0, -1)
          let inner = strArray[1].slice(0, -1)
          decodedString += inner
        let decodeNumber = strArray[0][strArray.length-1]
        }
      }
  }
  else {
      decodeString(str)   //run recursive function to find nested array
  }
  return decodedString
}