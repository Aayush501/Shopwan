import React, { useState, useEffect, useCallback } from "react";
import { Card, Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import axios from "axios";

const fetchApiUrl = import.meta.env.VITE_FETCH_USER_ADDRESSES;
const addApiUrl = import.meta.env.VITE_ADD_USER_ADDRESSES;

const UserAddressPage = ({ user }) => {
    console.log("USER:", user);
    console.log("EMAIL:", user?.primaryEmailAddress?.emailAddress);

    const [addresses, setAddresses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ street: "", city: "", state: "", country: "", postalCode: "" });

    // Fetch user addresses
    const fetchAddresses = useCallback(async () => {
        if (!user?.primaryEmailAddress?.emailAddress) return;
        try {
            const response = await axios.get(`${fetchApiUrl}/${user.primaryEmailAddress.emailAddress}`);
            setAddresses(response.data.addresses);
        } catch (error) {
            console.error("Error fetching addresses:", error);
        }
    }, [user?.primaryEmailAddress?.emailAddress]);

    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses]);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${addApiUrl}`, formData, {
                params: { userID: user?.primaryEmailAddress?.emailAddress },
            });
            fetchAddresses(); // Refresh addresses
            setShowForm(false); // Close modal
            setFormData({ street: "", city: "", state: "", country: "", postalCode: "" }); // Reset form
        } catch (error) {
            console.error("Error adding address:", error);
        }
    };

    return (
        <Container className="my-4">
            <h2 className="text-center mb-4">Your Saved Addresses</h2>
            <Row>
                {addresses.length > 0 ? (
                    addresses.map((address, index) => (
                        <Col md={6} lg={4} key={index} className="mb-4">
                            <Card className="shadow-lg p-3 rounded" style={{ background: "#e3f2fd" }}>
                                <Card.Body>
                                    <Card.Title>Address {index + 1}</Card.Title>
                                    <Card.Text>
                                        <strong>Street:</strong> {address.street} <br />
                                        <strong>City:</strong> {address.city} <br />
                                        <strong>State:</strong> {address.state} <br />
                                        <strong>Country:</strong> {address.country} <br />
                                        <strong>Postal Code:</strong> {address.postalCode}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p className="text-center">No saved addresses yet.</p>
                )}
            </Row>
            <div className="text-center mt-4">
                <Button variant="success" onClick={() => setShowForm(true)}>Want to add another address?</Button>
            </div>

            {/* Address Form Modal */}
            <Modal show={showForm} onHide={() => setShowForm(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" name="street" value={formData.street} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" name="state" value={formData.state} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="success" type="submit">Save Address</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default UserAddressPage;