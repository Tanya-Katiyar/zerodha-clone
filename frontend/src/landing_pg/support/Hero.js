import React from 'react'

function Hero() {
  return (

    <section className="container-fluid" id="supportHero">

    {/* Custom CSS */}
      <div className="p-3" id="supportWrapper">   
        <h4> Support Portal</h4>
          <a href='' style={{ color:"white", fontSize:"120%"}}>Track Tickets</a>
      </div>

    <div id="supportWrapper2">
      <div className="row p-3 mb-5 mt-5" > 
      <div className="col-7 fs-5 "> 
        <h4> Search for an answer or browse help topics to create a ticket</h4><br></br>
        <input placeholder='Eg. How do I activate F&O, why is ...'></input> <br></br><br></br>
        <a href="">Track account opening </a> 
        <a href=""> Track segment activation </a> 
        <a href=""> Intraday margins </a>
        <a href=""> Kite user manual </a>
      </div> 
      <div className="col-5 fs-5 p-3 mb-5"> 
        <h4>Featured</h4> <br></br>
        <ol>
          <li> <a href=''>Surveillance measure on scrips - August 2024</a></li>
          <li><a href=''>Latest Intraday leverages and Square-off timings </a></li>
        </ol>
      
      </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;