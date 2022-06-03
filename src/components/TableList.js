import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';

const TableList = ({bike}) => {

    const [quantity, setQuantity] = useState(1) 
    const dispatch = useDispatch()

    const handleChangeValue = (event) => {
        setQuantity(event.target.value)
        if (parseInt(event.target.value) === 0){
            dispatch({type: 'removeFromCart', bike})
        } else {
          dispatch({type: 'updateQuantity', bike, userQuantity: parseInt(event.target.value)})
        }
    }

    const handleClick = () => {
        dispatch({type: 'removeFromCart', bike})
    }
    
    return (
      <tbody key={bike.ref}>
        <tr>
          <th scope="row">
            <img src={bike.src} alt={bike.ref} className="table_img" />
          </th>
          <td>
            <div className="table_infos">
              <p className="table_title">{bike.name}</p>
              <p className="table_ref">Réf: {bike.ref}</p>
              <p className="table_ref">{bike.color}</p>
            </div>
          </td>
          <td className="table_price table_responsive">{bike.price} €</td>
          <td>
            <input
              className="table_quantity"
              type="number"
              min={0}
              value={bike.userQuantity ? bike.userQuantity : quantity}
              onChange={handleChangeValue}
            ></input>
          </td>
          <td>
            <div className="table_infos">
              <p className="table_price">{bike.userQuantity ? bike.userQuantity * bike.price : bike.price} €</p>
              <Button size="sm" style={{ maxWidth: 80 }} outline color="danger" onClick={handleClick}>
                Supprimer
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    );
};

export default TableList;