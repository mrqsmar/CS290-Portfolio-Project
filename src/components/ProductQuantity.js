import React, { useState } from 'react';
import { TbArrowBigUp, TbArrowBigDown, } from 'react-icons/tb';

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const up = () => setQuantity(quantity === 10 ? quantity: quantity + 1);
    const down = () => setQuantity(quantity === 0 ? 0 : quantity - 1);
    return (
        <>
        <div>
            <TbArrowBigUp onClick={up} />
            <p>{quantity}</p>
            <TbArrowBigDown onClick={down} />
        </div>
        </>
    )

}
export default ProductQuantity;