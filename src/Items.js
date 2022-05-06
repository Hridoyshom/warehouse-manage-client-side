import React, { useEffect, useState } from 'react';
import useItems from './useItems';
import ItemCard from './ItemCard';

const Items = () => {
    const [items, setItems] = useItems();


    return (
        <div className='px-4 pt-20 pb-24 mx-auto md:px-2' >
            <p className=' text-center text-3xl font-bold text-grey ' >Customer Review</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center ' >
                {items.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Items;