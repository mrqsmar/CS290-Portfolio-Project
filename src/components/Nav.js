import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookReader, FaShoppingBag, FaCarSide, } from 'react-icons/fa';
import { AiOutlinePicture } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { ImHome2 } from 'react-icons/im';

function Nav() {
    return (
        <nav className="App-navigation">
            <Link to="/"><i><ImHome2 /></i>Home</Link>
            <Link to="/cars"><i><FaCarSide /></i>Car List</Link>
            <Link to="../Topics"><i><FaBookReader /></i>Topics</Link>
            <Link to="../Gallery"><i><AiOutlinePicture /></i>Gallery</Link>
            <Link to="../Staff"><i><BsPeopleFill /></i>Staff</Link>
            <Link to="../Order"><i><FaShoppingBag /></i>Order</Link>
        </nav>
    );
}
export default Nav;