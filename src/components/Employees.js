import React from 'react';
import Employee from './Employee';
import {employeesData} from '../data/employess';

const Employees = () => {

    return ( 
      
        <div className="employees">
          {employeesData.map(employee => <Employee data={employee} key={employee.order} />)}
        </div>
     );
}
 
export default Employees;