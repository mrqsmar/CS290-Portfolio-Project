import React from 'react';
import { Link } from 'react-router-dom';
import { TiDocumentAdd } from 'react-icons/ti';

function TableHeader() {
    return (
        <thead>
            <tr>
                <th title ="Clicking the delete icon will remove the row">Delete</th>
                <th title ="Editing the page will be on a separate screen">Edit</th>
                <th title ="What is the year of your vehicle?">Year</th>
                <th title ="Who built your car?">Make</th>
                <th title ="What model is the car?">Model</th>
                <th title ='Which trim line did you buy'>Trim</th>
                <th title ="Tell me how many miles your car has!">Mileage</th>
                <th title ="When did you purchase the vehicle">Date Purchased</th>
                <th><Link to="../add-car"><i><TiDocumentAdd color="" title="Add Document"/></i></Link></th>
            </tr>
        </thead>
    );
}
export default TableHeader;