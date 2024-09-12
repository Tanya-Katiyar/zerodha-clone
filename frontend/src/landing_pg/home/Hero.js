import React from 'react'
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>   
                {/* <div className='col'>  the more number of cols the more vertical partitions will be created within this 'row' */}
                <img src = 'media/homeHero.png' alt = 'Hero' className='mb-5' />
                <h1 className='mt-5'>Invest in Everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-4' style={{width: "20%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}
 
export default Hero;