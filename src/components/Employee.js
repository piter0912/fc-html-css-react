import React from 'react';
const Employee = (props) => {

    const {order, name, lastName, position, description, imgSrc} = props.data;

    return ( 
        <div className={`employee ${order}_employee`}>
            <img className={`${order}_employee_photo`} src={imgSrc} alt={`${order} employee`}></img>
            <div className="employee_data">
                <p><strong>{`${name} ${lastName} (${position})`}</strong></p>
                <p>{description}</p>
            </div>
        </div>
     );
}
 
export default Employee;