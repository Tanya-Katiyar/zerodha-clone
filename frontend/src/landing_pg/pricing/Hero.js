import React from 'react'

function Hero() {
    return (
        <div className="container border-bottom">
            <div className="row p-5 mt-5 mb-5 border-bottom text-center">
                <h1 className="fs-2 mb-4">
                    Pricing
                </h1>
                <h3 className="mb-4 fs-4 text-muted">
                    Free equity investments and flat ₹20 intraday and F&O trades
                </h3>
            </div>
            <div className="row p-5 mt-5 fs-5 text-muted" style={{ lineHeight: "1.8" }}>
                <div className="col-4">
                    <img src='media/pricingEquity.svg' />
                    <h2 className='mb-5 text-center'>Free equity delivery</h2>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                  <img src='media/intradayTrades.svg' />
                    <h2 className='mb-5 text-center'>Intraday and F&O trades</h2>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                  <img src='media/pricingEquity.svg' />
                    <h2 className='mb-5 text-center '>Free direct MF</h2>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;