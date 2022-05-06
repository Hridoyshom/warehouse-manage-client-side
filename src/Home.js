import React from 'react';
import Banner from './Banner';
import Items from './Items';
import useItems from './useItems';
import ItemCard from './ItemCard';




const Home = () => {
    const [items, setItems] = useItems();
    return (
        <div>

            <Banner></Banner>
            {items.slice(0, 6).map(item => (<ItemCard key={item.id} item={item} ></ItemCard>))}


        </div>
    );
};

export default Home;