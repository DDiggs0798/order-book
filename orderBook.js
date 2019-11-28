function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []
  
  
  if (!existingBook.length) {       // this if statement fixes problem 1
    updatedBook = existingBook.concat(incomingOrder)
    return updatedBook
  }
 //console.log(existingBook.length)
 
 if (existingBook.length) {
    let corrType = existingBook.filter((item) => {    //adds order when NO corresponding type #2
      return item.type !== incomingOrder.type
    })
    let pullMatches = existingBook.filter((item) => {  
      return item.quantity !== incomingOrder.quantity
  })
  let largeOrder = pullMatches.reduce((existingBook, incomingOrder) => {
    return incomingOrder.quantity + existingBook.quantity
  },0)
    console.log(largeOrder)
    //console.log(pullMatches)
    
    if (!corrType.length) {                         //adds order when NO corresponding type #2
      return existingBook.concat(incomingOrder)
    } else if (corrType.length) {                   // adds an order to the book when the books type does NOT match. #3
      return existingBook.concat(incomingOrder)
    } else if (pullMatches.length) {                // fulfills order and removes matching order of SAME quantity.
      return existingBook.concat(incomingOrder)
     }  else if (largeOrder.length) {               // fulfills an order and reduces matching order of Larger quantity.
      return existingBook.concat(incomingOrder)
     }
     

     
   


  }


  return updatedBook
}




module.exports = reconcileOrder
