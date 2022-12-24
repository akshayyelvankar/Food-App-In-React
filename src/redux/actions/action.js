// Add item into cart
export const ADD=(item)=>{
      return{
         type:"ADD_CART",
         payload:item
      }
}

//Delete Cart
export const RMV=(id)=>{
      return{
            type:"RMV_CART",
            payload:id
      }
}

//Remove one item in Cart
export const DEC=(item)=>{
      return{
          type:"RMV_ONE",
          payload:item
      }
}