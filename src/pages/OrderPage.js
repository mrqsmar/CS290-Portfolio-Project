import React from 'react';
import ProductRow from '../components/ProductRow.js'

function OrderPage({ products }) {
    return (
        <div>
            <h2> Order </h2>
            <article>
                <p> The order page is for you to pick the product you desire, and the quantity of each product (up to 10 please).</p>
                <table>
                    <caption>
                        Products to choose from! 
                    </caption>
                    <thead>
                        <th> Company </th>
                        <th> Product </th>
                        <th> Price </th>
                        <th> Quantity </th>
                    </thead>
                    <tbody>
                        {products.map((currProduct, i) =>
                        <ProductRow 
                        product={currProduct}
                        key={i}
                        />
                        )}
                    </tbody>
                </table>
            </article>
        </div>
    );
}

export default OrderPage;
