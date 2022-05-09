import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const ManageInventory = () => {
    const [click, setClick] = useState(true);

    if (!click) {
        return <Navigate to='/additem' />
    }

    return (
        <div>
            <div className=' flex justify-center mb-11  ' >
                <button className=' bg-primary text-white p-2   ml-11 mt-11 ' onClick={() => setClick(false)} >ADD Item</button>
            </div>
        </div>
    );
};

export default ManageInventory;