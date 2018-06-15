function changePossibilities(amount, denominations) {
    //make array from 0 to amount and fill with 0's
    let numOfWays = (new Array(amount + 1).fill(0))
    //set index 0 to 1
    numOfWays[0] = 1
    //loop through denomination array 
    for (let denom of denominations){
      //loop through from 1 to amount
      for (let i = 1; i < amount + 1; i++ )
        if (denom <= i) { //if denomination is less than the index, iterate number of ways array
          numOfWays[i] += numOfWays[i - denom]
        }
    }
    return numOfWays[amount]
  }