import {HomeBox,Parent} from './HomePage.style';
import { useNavigate } from 'react-router-dom';
import React from 'react';
const HomePage=()=>{
    const navigate = useNavigate();
    const register = ()=> {
        navigate('/register');
    };
    const portal = ()=> {
        navigate('/portal');
      };
    return(
        <Parent>
            <HomeBox onClick={register}> 
                Register Company
            </HomeBox>
            <HomeBox onClick={portal}>
                Already Registered
            </HomeBox>
        </Parent>
    )
}
export default HomePage;