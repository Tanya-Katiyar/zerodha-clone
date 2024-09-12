import React from 'react'

function Hero() {
  return (

    <section className="container-fluid" id="supportHero">

    {/* Custom CSS */}
      <div className="p-5" id="supportWrapper">   
        <h3> Support Portal</h3>
          <a href='' style={{ color:"white", fontSize:"130%"}}>Track Tickets</a>
      </div>

    <div id="supportWrapper2">
      <div className="row p-5 mb-5" > 
      <div className="col-7 fs-4 mb-5"> 
        <h3> Search for an answer or browse help topics to create a ticket</h3><br></br>
        <input placeholder='Eg. How do I activate F&O, why is ...'></input> <br></br><br></br>
        <a href="">Track account opening </a> 
        <a href=""> Track segment activation </a> 
        <a href=""> Intraday margins </a>
        <a href=""> Kite user manual </a>
      </div> 
      <div className="col-5 fs-4 p-4 mb-5"> 
        <h3>Featured</h3> <br></br>
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