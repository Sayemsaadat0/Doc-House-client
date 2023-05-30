import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const { googleLogin } = useAuth()
const handlegooogleLogin = () =>{
    googleLogin()
    .then(result =>{
        const loggeduser = result.user 
        console.log(loggeduser)
        navigate('/')
    })
    .catch(error=>console.log(error))
}

    return (
        <div>
            <div className=' '>
                <button onClick={handlegooogleLogin}>  login with gooogle
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;