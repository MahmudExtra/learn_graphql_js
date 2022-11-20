import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCT } from "../../graphql/Quries";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(LOAD_PRODUCT, {
    variables: { productId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :) </p>;
  if (!data) return <p>No data</p>;
  const { product } = data;

  return (
    <Container className="mt-4 ">
      <p className="mb-4 text-center">This is the single product details</p>
      <div className="">
        <Card style={{ background: "black" }} className="col-3">
          <Card.Img variant="top" src={product?.image} />
          <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <Card.Text>{product?.description}</Card.Text>
            <Card.Text>{product?.quantity}</Card.Text>
            <Card.Text>{product?.onSale}</Card.Text>
            <Button variant="danger">Delete Now</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Product;
