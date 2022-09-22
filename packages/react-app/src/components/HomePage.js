import {HomeBox,Parent} from './HomePage.style';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Register from './Register';
const HomePage=()=>{
    const navigate = useNavigate();
    const register = async ()=> {
        navigate('/register', { replace: true });
    };
    const login = async ()=> {
        navigate('/login', { replace: true });
      };
    return(
        <Parent>
            <HomeBox onClick={register}> 
                Register Company
            </HomeBox>
            <HomeBox onClick={login}>
                Already Registered
            </HomeBox>
        </Parent>
    )
}
export default HomePage;