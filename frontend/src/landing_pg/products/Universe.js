import React from 'react'
import { useNavigate } from "react-router-dom";

function Universe() {
    
    const navigate = useNavigate(); // Initialize the hook

    const handleSignupClick = () => {
        navigate('/signup'); // Redirect to /signup when button is clicked
    };
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row mt-5 text-center p-5'>
                <h1 className='mt-5'>The Zerodha Universe</h1>
                <p className='mt-4 mb-5 fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className='col-4'>
                    <img src='media/smallcaseLogo.png' style={{width:"65%"}}></img>
                    <p className='text-small text-muted mt-3'>Thematic investment platform</p>
                </div>
                <div className='col-4 '>
                <img src='media/streakLogo.png' style={{width:"50%"}}></img>
                <p className='text-small text-muted mt-3'>Algo & strategy platform</p>
                </div>
                <div className='col-4 '>
                <img src='media/sensibullLogo.svg' style={{width:"70%"}}></img>
                <p className='text-small text-muted mt-4'>Options trading platform</p>
                </div>
            </div>
            <div className='row text-center p-5'>
    
                <div className='col-4'>
                    <img src='media/zerodhaFundhouse.png'style={{width:"60%"}}></img>
                    <p className='text-small text-muted mt-3'>Asset Management</p>
                </div>
                <div className='col-4 '>
                <img src='media/goldenpiLogo.png'style={{width:"60%"}}></img>
                <p className='text-small text-muted mt-3'>Fundamental research platform</p>
                </div>
                <div className='col-4 '>
                <img src='media/dittoLogo.png'style={{width:"45%"}}></img>
                <p className='text-small text-muted mt-3'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width: "20%", margin: "0 auto"}} onClick={handleSignupClick}>Sign up Now</button>

            </div>
            
        </div>
     );
}

export default Universe;