import React from 'react'

function Education() {
    return ( 
        <div className='container mt-5 p-2'>
            <div className='row'>
                <div className='col-5'>
                    <img src='media/education.svg' alt='varsity' style={{width: "90%"}} />
                </div>

                <div className='col-1'></div>

                <div className='col-6 p-2'>
                    <h1 className='fs-2 mb-5 mt-5'>Free and open market education</h1>
                    <p className='text-muted fs-5'> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className='fs-4' href='' style={{textDecoration:"none"}} > Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    
                    <p className='text-muted mt-5 fs-5' > TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className='fs-4' href='' style={{textDecoration:"none"}} > TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
            </div>
        </div>
    );
}

export default Education;