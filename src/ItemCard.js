import React from 'react';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ item }) => {
    const navigate = useNavigate();
    const navigateToInventory = _id => {
        navigate(`/inventory`)
    }
    return (
        <div className='shadow-lg rounded-2xl w-50px  bg-slate-200  p-4  mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ' >
            <p><span className='font-bold' >Name</span>:{item.name}</p>

            <p><span className='font-bold' >Description</span>:{item.Des}</p>
            <p><span className='font-bold' >Price</span>:{item.Price}</p>
            <p><span className='font-bold' >Quantity</span>:{item.Quantity}</p>
            <p><span className='font-bold' >Supplier</span>:{item.Supplier}</p>

            <img className='' src={item.img} alt="" />
            <button onClick={() => navigateToInventory(item._id)} className='btn btn-primary' >Update</button>
        </div>
    );
};

export default ItemCard;