import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const user=useLoaderData();
    return (
        <div>
            <p>User:{user.length}</p>
        </div>
    );
};

export default User;