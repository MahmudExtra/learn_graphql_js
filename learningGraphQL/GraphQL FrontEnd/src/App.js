import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Product from "./components/Products/Product";
import Category from "./components/Categories/Category";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex gap-3 ">
              <Link className="text-white text-decoration-none" to="/">
                Products
              </Link>
              <Link
                className="text-white text-decoration-none"
                to="/categories"
              >
                Categories
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
