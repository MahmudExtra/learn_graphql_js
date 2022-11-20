import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { LOAD_CATEGORIES, LOAD_CATEGORY } from "../../graphql/Quries";

const Categories = () => {
  const { loading, data, error } = useQuery(LOAD_CATEGORIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :) </p>;
  if (!data) return <p>No data</p>;

  //   const {data}= useQuery(LOAD_CATEGORY);

  return (
    <Container>
      <p className="text-center my-3">
        all the categories are available here!{" "}
      </p>
      <Container className="d-flex justify-content-evenly">
        {data?.categories?.map((category, index) => (
          <Card
            key={index}
            style={{ background: "black", width: "20rem" }}
            className="col-3 text-center"
          >
            <Card.Body>
              <Card.Title>Name: {category?.name}</Card.Title>
              <Card.Text>
                Total Products available: {category?.products?.length}
              </Card.Text>
              <Button variant="primary" className="mt-3">
                <Link
                  to={`/category/${category?.id}`}
                  className="text-white text-decoration-none"
                >
                  See Details
                </Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Container>
  );
};

export default Categories;
