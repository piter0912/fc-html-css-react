import React from 'react';
const Employee = (props) => {
    return ( 
        <div className={`employee ${props.order}_employee`}>
            <div className={`${props.order}_employee_photo`}></div>
            <div className="employee_data">
                <p><strong>{props.name}</strong></p>
                <p>{props.description}</p>
            </div>
        </div>
     );
}
 
export default Employee;