import { Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import { Link } from 'react-router-dom';

type ProductCardProps = {
    id: number,
    title: string,
    price: number,
    category: string,
    image: string,
    rating: {}
}
export function ProductCard({ id, title, price, category, image, rating }: ProductCardProps) {
    return (
        <> <Link exact to={`/product/${id}`}>
            <Card className="h-100">
                <Card.Img variant="top" src={image} height="300px" style={{ objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-item-baseline mb-4">
                        <span><h5>{title}</h5></span>
                        <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                    </Card.Title>
                    <Card.Subtitle className="d-flex justify-content-between align-item-baseline mb-4">
                        <span>{category}</span>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </Link>
        </>
    )
}