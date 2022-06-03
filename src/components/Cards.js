import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap';

function Cards({ bikes }) {

  const dispatch = useDispatch();
  const cart = useSelector(store => store)

  const handleClick = (bike) => {
    cart.find(e => e.ref === bike.ref) 
      ? dispatch({ type: 'removeFromCart', bike })
      : dispatch({ type: 'addToCart', bike })
  };

  const cardItemsData = bikes.map((bikes) => {
    return (
      <Col sm="6" md="4" key={bikes.key} className="card_padding">
        <Card className="card">
          <CardImg alt={bikes.ref} src={bikes.src} top width="100%"/>
          <CardBody>
            <div>
              <CardTitle>{bikes.name}</CardTitle>
              <CardText>{bikes.price + " €"}</CardText>
            </div>
            <Button onClick={() => handleClick(bikes)} className="card_btn">
              {cart.find(e => e.ref === bikes.ref) ? 'Retirer du panier' : 'Ajouter au panier'}
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  });

  return <Row className="cards_container">{cardItemsData}</Row>;
}

export default Cards;