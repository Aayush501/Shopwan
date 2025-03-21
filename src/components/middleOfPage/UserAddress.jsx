import React, { useState, useEffect, useCallback } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import AddressForm from "./AddressForm";

const apiUrl = import.meta.env.VITE_FETCH_USER_ADDRESSES;
console.log(apiUrl);

const UserAddress = ({ user }) => {

    console.log("USER: " + user);
    console.log(user.primaryEmailAddress.emailAddress);

    const [addresses, setAddresses] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Fetch user addresses with useCallback to prevent unnecessary re-creation
    const fetchAddresses = useCallback(async () => {
        if (!user?.primaryEmailAddress?.emailAddress) return;
        try {
            const response = await axios.get(`${apiUrl}/${user.primaryEmailAddress.emailAddress}`);
            setAddresses(response.data.addresses);
        } catch (error) {
            console.error("Error fetching addresses:", error);
        }
    }, [user?.primaryEmailAddress?.emailAddress]);

    // Fetch addresses on component mount & when user changes
    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses]);

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
                <Button variant="success" onClick={() => setShowForm(true)}>
                    Want to add another address?
                </Button>
            </div>
            {/* Pass fetchAddresses function properly */}
            <AddressForm 
                show={showForm} 
                handleClose={() => setShowForm(false)} 
                fetchAddresses={fetchAddresses} // ✅ Now correctly defined
                userEmail={user?.primaryEmailAddress?.emailAddress} 
            />
        </Container>
    );
};

export default UserAddress;
