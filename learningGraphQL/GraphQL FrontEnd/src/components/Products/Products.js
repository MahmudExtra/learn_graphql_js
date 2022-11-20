import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from "../../graphql/Quries";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { loading, data, error } = useQuery(LOAD_PRODUCTS);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :) </p>;
  if (!data) return <p>No data</p>;

  return (
    <Container>
      <p className="text-center mt-4 mb-3">this is the all products list</p>
      <div className="row gap-2 justify-content-center">
        {products &&
          products.map((product, index) => (
            <Card
              key={index}
              style={{ background: "black", width: "20rem" }}
              className="col-3"
            >
              <Card.Img variant="top" src={product?.image} />
              <Card.Body>
                <Card.Title>Name: {product?.name}</Card.Title>
                <Card.Text>Descriptions: {product?.description}</Card.Text>
                <Card.Text>Quantity: {product?.quantity}</Card.Text>
                <Card.Text>OnSale: {product?.onSale}</Card.Text>
                <Card.Text>Category: {product?.category?.name}</Card.Text>

                <Button variant="primary">
                  <Link
                    to={`/product/${product?.id}`}
                    className="text-white text-decoration-none"
                  >
                    See Details
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default Products;
