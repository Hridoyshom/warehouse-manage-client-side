import React from 'react';
import { Image } from 'react-bootstrap';

const ItemCard = ({ item }) => {
    return (
        <div className='shadow-lg rounded-2xl w-50px  bg-slate-200  p-4  mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ' >
            <p><span className='font-bold' >Name</span>:{item.name}</p>

            <p><span className='font-bold' >Rating</span>:{item.Des}</p>
            {/* <img className='' src={item.img} alt="" /> */}
        </div>
    );
};

export default ItemCard;