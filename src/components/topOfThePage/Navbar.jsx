import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsBagCheckFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { BsBagHeartFill } from "react-icons/bs";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";



//////////
////////
///////*


/*
        update user schema and add details to database from clerk
*/



///////
//////
///////




const ResponsiveNavbar = ({cart, setCart, wishlist, setWishlist}) => {
    const { isSignedIn } = useUser(); // Clerk hook for authentication status

    return (
        <Navbar expand="lg" className="bg-body-tertiary p-2" sticky="top">
            <Container fluid className="d-flex justify-content-between align-items-center">
                <Navbar.Brand href="#">Shopwan</Navbar.Brand>
                <div className="flex-grow-1 d-flex justify-content-center">
                    <Form className="d-flex" size="sm">
                        <Form.Control
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                            className="rounded-pill"
                        />
                        <Button variant="outline-secondary" size="sm" className="rounded-pill ms-2">
                            <IoSearch size={20} />
                        </Button>
                    </Form>
                </div>
                <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse id="navbarResponsive" className="justify-content-end">
                    {isSignedIn ? (
                        <div className="d-flex align-items-center gap-3">
                            <UserButton afterSignOutUrl="/" />
                            <BsBagCheckFill size={30} onClick={() => setCart(cart ? false : true)} />
                            <BsBagHeartFill size={30} onClick={() => setWishlist(wishlist ? false : true)} />
                        </div>
                    ) : (
                        <div className="d-flex align-items-center gap-2">
                            <SignInButton>
                                <Button variant="primary">Login</Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button variant="secondary">Signup</Button>
                            </SignUpButton>
                        </div>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ResponsiveNavbar;
