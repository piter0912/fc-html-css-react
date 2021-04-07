import React from 'react';
import Employee from './Employee';

const Employees = () => {
    return ( 
        <div className="employees">
            <Employee order="first" name="Marek Zakroczny (Kucharz)" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
              dolore. Itaque optio sapiente quam ut, dolores assumenda ratione,
              recusandae reiciendis, laboriosam voluptas sequi consequatur
              doloribus facilis odit earum. Voluptatum, unde."/>
            <Employee order="second" name="Angelika Marecka (Sprzątaczka)" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              libero natus fugiat odit porro possimus eveniet exercitationem
              aspernatur corrupti aperiam velit suscipit alias ipsa, nesciunt
              similique modi animi! Doloremque, vero."/>
        </div>
     );
}
 
export default Employees;