import React from 'react';


function StaffRow({ individual }) {
    return ( 
        
        <tr>
             <td><img src={individual.picture.thumbnail} alt="Random Photography"></img>
             </td>
             <td>
                 <a href="mailto:{individual.email}">
                 {individual.name.first}&nbsp;
                 {individual.name.last}</a>
             </td>
             <td>{individual.phone}</td>
             <td>{individual.location.city}</td>
        </tr>

    )
}

export default StaffRow;
