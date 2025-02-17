import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

const HalfNav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Simulating checking login status (Replace with actual auth check)
        const userToken = localStorage.getItem("userToken");
        setIsLoggedIn(!!userToken);
    }, []);

    return (
        <div>
            {!isLoggedIn ? (
                <>
                    <div className='d-flex'>
                        <CgProfile size={40} style={{marginRight: '30%'}}/>
                        <FaShoppingCart size={40} />
                    </div>
                </>
            ) : (
                <>
                    <div className='d-flex' style={{ gap: '5%' }}>
                        <Form>
                            <Button>Login</Button>
                        </Form>
                        <Form>
                            <Button>Signup</Button>
                        </Form>
                    </div>
                </>
            )}
        </div>
    );
}

export default HalfNav
