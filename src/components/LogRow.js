import React from 'react';
import { RiDeleteBin4Fill, RiFileEditFill } from 'react-icons/ri';

function LogRow({ car, onEdit, onDelete }) {

    return (
        <tr>
            <td><i><RiDeleteBin4Fill onClick={() => onDelete(car._id)} title="Clicking the delete icon kills the row" /></i></td>
            <td><i><RiFileEditFill onClick={() => onEdit(car)} title="Editing will update a new row" /></i></td>
            <td title="What is the year of the car you purchased?" >{car.year}</td>
            <td title="Who built your car?">{car.make}</td>
            <td title="What is the model of your car?">{car.model}</td>
            <td title="What is the trim line?">{car.trim}</td>
            <td title="What is the mileage on the vehicle?">{car.mileage}</td>
            <td title="When did you purchase the vehicle?">{car.datePurchased.slice(0,10)}</td>
            <td></td>
        </tr>
    );
}

export default LogRow;