import React from 'react'

function Right( {imageURL, productName, description, learnMore}) {
    return ( 
        <div className='container border-top mt-5 mb-5'>
            <div className='row mt-5'>
                <div className='col-5 fs-5 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p className='mt-5 ' style={{lineHeight:"1.8"}}>{description}</p>
                    <div>
                    <a href={learnMore} style={{textDecoration:'none'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-7 '>
                    <img src={imageURL} style={{width:"90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Right;