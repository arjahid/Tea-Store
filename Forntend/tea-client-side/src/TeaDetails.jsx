import React from 'react';
import Heade from './components/Heade';
import { useLoaderData } from 'react-router-dom';

const TeaDetails = () => {
    const tea = useLoaderData();
    const { name, price, description, photo } = tea;
    return (
        <div>
            <Heade></Heade>
            <div className="bg-green-200 p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-10">
                <h1 className="text-3xl mr-7 font-bold mb-4">{name}</h1>
                <h2 className="text-xl mr-7 text-gray-700 mb-4">${price}</h2>
              
                <img src={photo} alt={name} className="w-full h-auto rounded-lg shadow-md" />
                <p className="text-gray-600 mb-4 pt-4">{description}</p>
            </div>
        </div>
    );
};

export default TeaDetails;