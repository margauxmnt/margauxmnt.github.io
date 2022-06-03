import { useSelector } from 'react-redux';
import { Table as Tab } from 'reactstrap'
import TableList from './TableList';

function Table() {

  const cartList = useSelector(store => store);

  let content;

  cartList.length === 0
    ? (content = <p className="table_empty">Aucun article dans le panier</p>)
    : (content = cartList.map((e) => {
        return (
          <TableList key={e.ref} bike={e}/>
        );
      }));

  return (
    <div className="tab_details">
      {cartList.length === 0 
      ? (content) 
      : (
        <Tab>
          <thead>
            <tr>
              <th>DÉTAILS</th>
              <th></th>
              <th className='table_responsive'>PRIX</th>
              <th>QTÉ</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          {content}
          <tfoot>
            <tr>
              <th>TOTAL</th>
              <th></th>
              <th className='table_responsive'></th>
              <th></th>
              <th>{cartList.map(e => e.userQuantity ? e.price * e.userQuantity : e.price).reduce((prev, curr) => prev + curr, 0)} €</th>
            </tr>
          </tfoot>
        </Tab>
      )}
    </div>
  );
}

export default Table;