import { Col, Row, Container, Button } from 'react-bootstrap'
import storeItem from '../data/item.json'
import { formatCurrency } from '../utilities/formatCurrency'

export function ProductDetail() {
    return (
        <>
            <h1>Product Details</h1>
            <Container>
                <Row>
                    <Col><img src={storeItem.image} className="img-fluid" alt="" /></Col>
                    <Col>
                        <h2>{storeItem.title}</h2>
                        <span className="ms-6">{formatCurrency(storeItem.price)}</span>
                        <div className=" justify-content-between align-item-baseline mb-4">
                            <h4>SPECIFICATIONS</h4>
                            <ul>
                                <li>{storeItem.category}</li>
                                <li>{storeItem.description}</li>
                            </ul>
                            <Button className="btn btn-primary">Add To Cart</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}