import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableHeader from '../components/TableHeader.js';
import { FaCarSide } from 'react-icons/fa';

export const EditPage = ({ car }) => {

    const [year, setYear] = useState(car.year);
    const [make, setMake] = useState(car.make);
    const [model, setModel] = useState(car.model);
    const [trim, setTrim] = useState(car.trim);
    const [mileage, setMileage] = useState(car.mileage);
    const [datePurchased, setDatePurchased] = useState(car.datePurchased.slice(0,10));

    const redirect = useNavigate();

    const editCar = async () => {
        const response = await fetch(`/cars/${car._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                year: year,
                make: make,
                model: model,
                trim: trim,
                mileage: mileage,
                datePurchased: datePurchased
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 200) {
            alert(`Successfully edited adding the car!`);
        } else {
            const errorMessage = await response.json();
            redirect("/cars");
            alert(`Failed to edit car updates. Status ${response.status}. ${errorMessage.Error}`);
        }
    };

        return (
            <>
                <h2><i><FaCarSide /></i>Edit a Car</h2>
                <p>Use the icon to Update a Row for the Car Log</p>
                <table id="cars">
                    <caption>Edit a Car</caption>
                    <TableHeader />
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><label for="caryear" class="required">
                            <input type="number" value={year} id="caryear" name="year"
                            onChange={e => setYear(e.target.value)} required autoFocus
                            />
                            </label></td>
                        <td><label for="camake" class="required">
                            <input type="text" value={make} id="camake" name="make"
                            onChange={e => setMake(e.target.value)} required /></label>
                        </td>
                        <td><label for="camodel" class="required">
                            <input type="text" value={model} id="camodel" name="model"
                            onChange={e => setModel(e.target.value)} required /></label>
                        </td>
                        <td><label for="catrim" class="required">
                            <input type="text" value={trim} id="catrim" name="trim"
                            onChange={e => setTrim(e.target.value)} required /></label>
                        </td>
                        <td><label for="camileage" class="required">
                            <input type="number" value={mileage} id="camileage" name="mileage"
                            onChange={e => setMileage(e.target.value)} required /></label>
                        </td>
                        <td><label for="cadatePurchased" class="required">
                            <input type="datePurchased" value={datePurchased} id = "cadatePurchased" name="datePurchased" 
                            onChange={e => setDatePurchased(e.target.value)} pattern="\d[2]-\d{2}-\d{2}" required />
                            </label>
                        </td>
                        <td><button class="saved" type="submit" onClick={editCar}>Save</button></td>
                    </tr>
                        </tbody>
                </table>
            </>
        )}
        export default EditPage;