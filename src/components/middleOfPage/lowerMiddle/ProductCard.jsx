import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaCartArrowDown } from "react-icons/fa";
import { AiFillCarryOut } from "react-icons/ai";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({ postData }) => {
    return (
        <Card className="product-card">
            <Card.Img variant="top" src={postData.images[0]} alt="Product Image" className="product-image" />
            <Card.Body>
                <Card.Title className="product-title">{postData.name}</Card.Title>
                <Card.Text className="product-description">{postData.description}</Card.Text>
                <Card.Text className="d-flex align-items-center price">
                    <HiDocumentCurrencyRupee size={20} fill='#B771E5' />
                    {postData.price}
                </Card.Text>
                <Button variant="primary" className="d-flex gap-2 btn-sm">Rating</Button>
            </Card.Body>
            <Card.Body className="d-flex justify-content-between action-buttons">
                <Button variant="primary" className="d-flex gap-2 btn-sm">
                    BUY <AiFillCarryOut fill="yellow" className="icon" />
                </Button>
                <Button variant="primary" className="d-flex gap-2 btn-sm">
                    ADD TO CART <FaCartArrowDown fill="yellow" className="icon" />
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
