import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import { ProductCard } from '../components/ProductCard'

export function Products() {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}><ProductCard {...item} /></Col>
                ))}
            </Row>
        </>
    )
}