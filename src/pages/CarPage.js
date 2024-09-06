import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogTable from '../components/LogTable';
import { FaCarSide } from 'react-icons/fa';

function CarPage({ setCar }) {
    
    const redirect = useNavigate();

    const [cars, setCars] = useState([]);

    const loadCars = async() => {
        const response = await fetch('/cars')
        const cars = await response.json();
        setCars(cars);
    }

    const onEditCar = async() => {
        setCar(cars);
        redirect("/update");
    }

    const onDeleteCar = async _id => {
        const response = await fetch(`/cars/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/cars');
            const cars = await getResponse.json();
            setCars(cars);
        } else {
            console.error(`Failed to delete row with id:${_id} (status code = ${response.status}`)
        }
    }

    useEffect(() => {
        loadCars();
    }, []);

    return (
        <>
        <h2><i><FaCarSide /></i>Log of Purchased Cars</h2>
            <p> Click the add, delete or edit icons to update the car log</p>
            <LogTable
            cars={cars}
            onEdit={onEditCar}
            onDelete={onDeleteCar}
            />
        </>
    );
}
export default CarPage;
