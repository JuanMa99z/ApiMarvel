
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
function CardMarvel({card}) {

    

    return (

        <>
        <Col xs={12} sm={6} md={4} lg={3} className='containerCard'>
      <Card className="CardMain">
        <Card.Img className="CardItem img-fluid"src={`${card.thumbnail.path}.${card.thumbnail.extension}`} />
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
        </>
    )
}

export default CardMarvel;

