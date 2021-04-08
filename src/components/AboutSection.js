import React from 'react';
import Employees from './Employees';

const About = () => {
    return ( 
        <section id="about" className="center">
            <h1 className="about_head">Nasi specjaliści</h1>
            <Employees />
        </section>
     );
}
 
export default About;