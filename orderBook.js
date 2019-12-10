function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []
  let existingType = existingBook.map(function (item) {return item.type})
  let existingQuantity = existingBook.map (function (item) {return item.quantity})
  let existingPrice = existingBook.map (function (item) {return item.price})
  
  if (existingBook.length == 0) {
    updatedBook = existingBook.concat(incomingOrder) 
   }
    

   if (existingType == incomingOrder.type) {
    updatedBook = existingBook.concat(incomingOrder)
   } 


   if ( (existingType != incomingOrder.type) && (existingPrice != incomingOrder.price) ) {
      updatedBook = existingBook.concat(incomingOrder)
   } 


   if ( (existingType != incomingOrder.type) && (existingQuantity > incomingOrder.quantity) && (existingPrice == incomingOrder.price) ) {
    incomingOrder.quantity = (existingQuantity - incomingOrder.quantity)
    incomingOrder.type = ("buy")
    updatedBook = updatedBook.concat(incomingOrder)
   }
   

   if ( ( existingType != incomingOrder.type) && (existingQuantity < incomingOrder.quantity) && (existingPrice == incomingOrder.price) ) {
    incomingOrder.quantity = (incomingOrder.quantity - existingQuantity)
    updatedBook = updatedBook.concat(incomingOrder)
   } 

   
   if ((existingPrice != incomingOrder.price) && (existingBook.price > incomingOrder.price)) {
      updatedBook = existingBook.concat(incomingOrder)
   }




   return updatedBook
  }





module.exports = reconcileOrder
