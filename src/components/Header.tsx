import { Container, Nav, Navbar, Button, NavbarBrand } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Header() {
    return (
        <>
            <Navbar className="navbar navbar-light bg-light shadow-sm mb-3">
                <Container >
                    <NavbarBrand to="/" as={NavLink} style={{ width: "70px", display: "inline-block" }}>
                        <img src="../public/img/logo.png" className="img-fluid" alt="Logo" />
                    </NavbarBrand>
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/products" as={NavLink}>Store</Nav.Link>
                        <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                    </Nav>
                    <Button className="btn btn-secondary">Login</Button>
                </Container>
            </Navbar>
        </>
    )
}