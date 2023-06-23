import { products } from "../data/productos";

export const getProducts = () => {

  return products;
}

export const calculateTotal = (items) => {
  return items.reduce( (acum, curr) => acum + curr.product.price *  curr.quantity, 0 );
}