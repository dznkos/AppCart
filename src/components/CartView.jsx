import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";


export const CartView = ({ handlerDelete, items }) => {

  const [total, setTotal] = useState(0);

  const navigate = useNavigate()

  const onDeleteProduct = (id) => {
    handlerDelete(id);
  }

  useEffect(() => {    
    setTotal( calculateTotal(items) );
    sessionStorage.setItem('cart', JSON.stringify(items));
  }, [items])
  

  const onCatalog = () => {   
    navigate('/catalog');
  }  

  return (
    <>
      <h3>Cart View</h3>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => (
              <tr key={ item.product.id }>
                <td>{ item.product.name }</td>
                <td>{ item.product.price }</td>
                <td>{ item.quantity}</td>
                <td>{ item.quantity * item.product.price}</td>
                <td>
                  <button onClick={()=>onDeleteProduct(item.product.id)} className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-end fw-bold">Total</td>
            <td colSpan="1" className="text-right fw-bold">{ total }</td>
          </tr>
        </tfoot>
      </table>

      <button className="btn btn-success" onClick={onCatalog}>Seguir comprando</button>

    </>
  )
}
