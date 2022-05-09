import React, { useState } from 'react';
import Banner from './Banner';
import Items from './Items';
import useItems from './useItems';
import ItemCard from './ItemCard';
import { Navigate } from 'react-router-dom';




const Home = () => {
    const [items, setItems] = useItems();
    const [clicked, setClicked] = useState(true);
    const [pressed, setPressed] = useState(true);


    if (!clicked) {
        return <Navigate to='/items' />
    }
    if (!pressed) {
        return <Navigate to='/manage' />
    }


    return (

        <div>
            <div>

                <Banner></Banner>
                {items.slice(0, 6).map(item => (<ItemCard key={item.id} item={item} ></ItemCard>))}


            </div>

            <div className=' flex justify-center mb-11  ' >
                <button className=' bg-primary text-white p-2   ml-11 mt-11 ' onClick={() => setClicked(false)} >See All Items</button>
            </div>
            <div className=' flex justify-center mb-11  ' >
                <button className=' bg-primary text-white p-2   ml-11 mt-11 ' onClick={() => setPressed(false)} >Manage Inventory</button>
            </div>

        </div>




    );
};

export default Home;