import React from 'react'

function Stats() {
    return ( 
        <div className='container mt-5 p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-1'>Trust with confidence</h1>
                    <h2 className='mt-5 fs-3'> Customer-first always</h2> 
                    <p className='text-muted'> That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                    <h2 className='mt-5 fs-3'> No spam or gimmicks</h2> 
                    <p className='text-muted' > No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    <h2 className='mt-5 fs-3'> The Zerodha universe</h2> 
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='mt-5 fs-3'>Do better with money </h2> 
                    <p className='text-muted'> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p></p>
                </div>

                <div className='col-6'>
                    <img src='media/ecosystem.png' alt='ecosystem' style={{width: "90%"}} />
                    <div className='text-center'>
                        <a href='' className='mx-5'> Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}> Try Kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;