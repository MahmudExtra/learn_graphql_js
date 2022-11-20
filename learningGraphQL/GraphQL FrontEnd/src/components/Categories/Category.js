import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { LOAD_CATEGORIES, LOAD_CATEGORY } from "../../graphql/Quries";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { DELETE_CATEGORY, UPDATE_CATEGORY } from "../../graphql/Mutations";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Category = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery(LOAD_CATEGORY, {
    variables: { categoryId: id },
  });

  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    variables: { deleteCategoryId: id },
    onCompleted(DeleteData) {
      if (DeleteData) {
        if (DeleteData.deleteCategory) {
          navigate("/categories");
        }
      }
    },
    refetchQueries: [{ query: LOAD_CATEGORIES }],
  });

  const [updateCat] = useMutation(UPDATE_CATEGORY, {
    variables: {
      updateCategoryId: id,
      input: {
        name: name,
      },
    },
    refetchQueries: [{ query: LOAD_CATEGORY, variables: { categoryId: id } }],
    onCompleted() {
      setShow(false);
      navigate(`/category/${id}`);
    },
  });

  return (
    <Container className="mt-4 ">
      <p className="mb-4 text-center">This is a single Category</p>
      <div className="text-center">
        <Card style={{ background: "black" }} className="col-3">
          <Card.Body>
            <Card.Title className="mt-2 mb-3">
              {data?.category?.name}
            </Card.Title>
            <Card.Text>
              Products we have: {data?.category?.products?.length}
            </Card.Text>
            <div className="d-flex flex-column gap-3 w-75 mx-auto">
              <Button variant="success" onClick={handleShow}>
                Update Now
              </Button>
              <Button variant="danger" onClick={deleteCategory}>
                Delete Now
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose} className="text-dark">
        <Form
        // onSubmit={handleSubmit}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update the category name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={updateCat}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Category;
