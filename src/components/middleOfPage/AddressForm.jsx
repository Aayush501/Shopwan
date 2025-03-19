import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const apiUrl = import.meta.env.VITE_ADD_USER_ADDRESSES;

const AddressForm = ({ show, handleClose, fetchAddresses, userEmail }) => {
  const [formData, setFormData] = useState({ street: "", city: "", state: "", country: "", postalCode: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}`, formData, {
        params: { userID: userEmail }, // ✅ Pass userID (or email if mapped in backend) as query param
      });
  
      fetchAddresses(); // Refresh the addresses after adding a new one
      handleClose(); // Close the modal after successful submission
      setFormData({ street: "", city: "", state: "", country: "", postalCode: "" }); // Reset form
    } catch (error) {
      console.error("Error adding address:", error);
    }
 };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Where is your home located?</Form.Label>
            <Form.Control type="text" name="street" value={formData.street} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Which city do you live in?</Form.Label>
            <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Which state do you belong to?</Form.Label>
            <Form.Control type="text" name="state" value={formData.state} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Which country is your home in?</Form.Label>
            <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter your postal code</Form.Label>
            <Form.Control type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit">Save Address</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddressForm;
