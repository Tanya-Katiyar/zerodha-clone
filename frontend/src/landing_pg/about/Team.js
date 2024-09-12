import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mb-3 ">
        <h1 className="fs-2 text-center ">
          People
        </h1>
      </div>
      <div className="row fs-5 p-5 text-muted"
        style={{ lineHeight: "1.8" }}>
        <div className="col-5 text-center">
            <img src = "media/nithinKamath.jpg" alt="founder" style={{borderRadius:"100%", width: "75%"}} />
            <h4 className="mt-4 mb-3">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
        </div>
        <div className="col-7 ">
          <p className="mb-4">
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="mb-4">
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

          </p>

          <p className="mb-4">
          Playing basketball is his zen.
          </p> 
          <p> Connect on <a href=""  style={{textDecoration: 'none'}}>Homepage</a> /  
          <a href="" style={{textDecoration: 'none'}}>TradingQnA</a> / 
          <a href="" style={{textDecoration: 'none'}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
