import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { UPDATE_CATEGORY } from "../../graphql/Mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export default function UpdateCat({ show, setShow, id }) {
  const [name, setName] = useState("");
  //   const navigate = useNavigate();
  const [updateCat, { loading, data: UpdateData, error }] = useMutation(
    UPDATE_CATEGORY,
    {
      variables: {
        updateCategoryId: id,
        input: {
          name: name,
        },
      },
    }
  );
  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error :) </p>;
  //   if (!UpdateData) return <p>No data</p>;

  //   if (UpdateData) {
  //     if (UpdateData.updateCategory) {
  //       setShow(false);
  //         navigate(`/category/${id}`);
  //     }
  //   }

  const handleClose = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();
    // updateCat();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="text-dark">
        <Form onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
