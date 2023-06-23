import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function CardComic({ comic }) {
    return (

        <>
        <Col xs={12} sm={6} md={4} lg={3} className='containerCard'>
      <Card className="CardMain">
        <Card.Img className="CardItem img-fluid"src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
        <Card.Body>
          <Card.Title>{comic.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
        </>
    )
}
export default CardComic;