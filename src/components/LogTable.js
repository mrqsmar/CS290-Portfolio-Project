import React from 'react';
import LogRow from './LogRow';
import TableHeader from './TableHeader';

function LogTable({ cars, onDelete, onEdit }) {
    return (
        <table id="cars">
            <caption>Log of Cars Recently Purchased</caption>
            <TableHeader />
            <tbody>
                {cars.map((car, i) =>
                <LogRow
                    car={car}
                    key={i}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />)}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    );
}
export default LogTable;