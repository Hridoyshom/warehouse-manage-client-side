import React from 'react';
import { toast } from 'react-toastify';

const AddItem = () => {
    const handleAdditem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const Img = event.target.Img.value;
        const Des = event.target.Des.value;
        const Price = event.target.Price.value;
        const Quantity = event.target.Quantity.value;
        const Supplier = event.target.Supplier.value;

        const items = { name, Img, Des, Price, Quantity, Supplier }

        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('item added successfully')
                event.target.reset();
            })

    }
    return (
        <div>
            <h1>You can add items Here</h1>
            <form onSubmit={handleAdditem} >
                <input type="text" name="name" placeholder='Name' required />
                <br />

                <br />
                <input type="text" name="Des" placeholder='Description' required />
                <br />
                <input type='url' name='Img' placeholder='Image'></input>
                <br />
                <input type="number" name='Price' placeholder='Price' />
                <br />
                <input type="number" name='Quantity' placeholder='Quantity' />
                <br />

                <input type="text" name="Supplier" placeholder='Supplier' required />
                <br />
                <input type="submit" value="Add item"></input>

            </form>

        </div>
    );
};

export default AddItem;