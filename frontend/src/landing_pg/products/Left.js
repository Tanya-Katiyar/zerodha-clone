import React from 'react'

function Left( {imageURL, productName, description, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container  mt-5 mb-5'>
            <div className='row mt-5'>
                <div className='col-8 p-3 mt-5'>
                    <img src={imageURL} style={{width:"75%"}} />
                </div>
                <div className='col-4 fs-5 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p className='mt-5 ' style={{lineHeight:"1.8"}}>{description}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:'none'}}> Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft: "50px", textDecoration:'none'}}> Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}> <img src='media/googlePlayBadge.svg' /></a>
                    <a href={appStore}> <img src='media/appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;