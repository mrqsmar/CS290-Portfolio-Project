import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableHeader from '../components/TableHeader.js';
import { FaCarSide } from 'react-icons/fa';

export const CreatePage = () => {
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [trim, setTrim] = useState('');
    const [mileage, setMileage] = useState('');
    const [datePurchased, setDatePurchased] = useState();

    const redirect = useNavigate();

    const addCar = async () => {
        const newCar = { year, make, model, trim, mileage, datePurchased };

        const response = await fetch('/cars', {
             method: 'POST',
             body: JSON.stringify(newCar),
             headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201){
            alert(`Yay! Successfully added a car to the row in the log.`);
        } else {
            alert(`Unfortunately, because of a missing input, the row did not add, error = ${response.status}`);
        }
        redirect("/cars");
    };

    return (
            <>
            <h2><i><FaCarSide /></i>Log a New Car!</h2>
            <article>
                <p><b>Add All the Cars that were Purchased</b></p>
            <table id="cars">
                <caption>Add a Car for the Log.</caption>
                <TableHeader />
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><label for="cayear" class="required">
                            <input type="number" value={year} id="cayear" name="year"
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
                            <input type="date" id = "caDatePurchased" name="datePurchased" 
                            onChange={e => setDatePurchased(e.target.value)} pattern="\d{2}-\d{2}-\d{2}" required />
                            </label>
                        </td>
                        <td><button class="saved" type="submit" onClick={addCar}>Save</button></td>
                    </tr>
                </tbody>
            </table>
            </article>
            </>
    )}
    export default CreatePage;
