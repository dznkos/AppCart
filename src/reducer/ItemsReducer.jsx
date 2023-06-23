import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";


export const itemsReducer = (state = [], action) => {
  
  switch (action.type) {
    case AddProductCart:
        return [
          ...state,
          {
            product: action.payload,
            quantity: 1
          }
        ];  
    case UpdateQuantityProductCart:
      return state.map(p => {
        if (p.product.id === action.payload.id) {
          return{
            ...p,
            quantity: p.quantity + 1
          };
        }
        return p;
      })
    
    case DeleteProductCart:
      return state.filter((i) => i.product.id !== action.payload);

    default:
      return state;
  } 
  
  
}
