import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import '../App.css'
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Products } from "./pages/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { ProductDetail } from "./pages/ProductDetail"


function App() {
  return (
    <>
      <Header />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path='/product/:productId' element={<ProductDetail />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
