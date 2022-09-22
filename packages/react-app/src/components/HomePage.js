import { HomeBox, Parent } from './HomePage.style';
import { useNavigate } from 'react-router-dom';
import React from 'react';
const HomePage = () => {
    const navigate = useNavigate();
    const register = () => {
        navigate('/register');
    };
    const portal = () => {
        navigate('/addproduct');
    };
    return (
        <>
            <div className="split left" onClick={register}>
                <div className="centered">
                    <h2>Register</h2>
                </div>
            </div>

            <div className="split right" onClick={portal}>
                <div className="centered">
                    <h2>Existing Account</h2>
                </div>
            </div>
        </>


    )
}
export default HomePage;