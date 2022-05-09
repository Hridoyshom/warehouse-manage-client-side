import React from 'react';

const AddItem = () => {
    const handleAdditem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const des = event.target.des.value;
        const supplier = event.target.supplier.value;

        const items = { name, des, supplier }

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
            })

    }
    return (
        <div>
            <h1>You can add items Here</h1>
            <form onSubmit={handleAdditem} >
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="text" name="des" placeholder='Description' required />
                <br />
                <input type="text" name="supplier" placeholder='Supplier' required />
                <br />
                <input type="submit" value="Add item"></input>

            </form>

        </div>
    );
};

export default AddItem;