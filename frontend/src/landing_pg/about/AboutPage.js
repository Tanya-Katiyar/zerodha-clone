/*this is the structure or wrapper page of all the components of about page*/

import React from 'react';
import Hero from './Hero';
import Team from './Team';


function AboutPage() {
    return ( 
        <>
            <Hero />
            <Team />
        </>
     );
}

export default AboutPage;