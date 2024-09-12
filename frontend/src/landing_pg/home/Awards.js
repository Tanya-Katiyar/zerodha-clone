
import React from 'react'  // used imr + tab to use react snippets

function Awards() {    //ffc+tab
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg' alt = 'broker' />
                </div>

                <div className='col-6 p-5 mt-3'>
                    <h1> Largest stock broker in India </h1>
                    <p className='mb-5'> 1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row mb-5'>
                        <div className='col-6'>
                            <ul>
                                <li> <p>Futures and Options</p></li>
                                <li> <p>Commodity derivatives</p> </li>
                                <li> <p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'> 
                            <ul>
                                <li> <p>Stocks & IPOs </p></li>
                                <li> <p>Direct mutual funds</p></li>
                                <li> <p> Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src='media/pressLogos.png' alt='press logos' style = {{width: "90%"}}/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards ;