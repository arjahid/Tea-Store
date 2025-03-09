import React from 'react';
import Heade from './Heade';
import Swal from 'sweetalert2'

const AddTea = () => {
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const type=form.type.value;
        const price=form.price.value;
        const photo=form.photo.value;
        const description=form.description.value;
        const tea={name,type,price,description,photo};
        console.log(tea);
        fetch('http://localhost:7000/addtea',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(tea)
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Successfully added Tea!",
                    icon: "success",
                    draggable: true
                  });
                form.reset();
            }
        })
        .catch(error=>console.log(error));
    }
    return (
        <div>
            <Heade></Heade>
            <div className="bg-green-300 p-8 rounded-lg shadow-lg max-w-md w-full flex justify-center items-center flex-col mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-6">Add Tea</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Tea Name:</label>
                        <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter tea name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Tea Type:</label>
                        <input type="text" id="type" name="type" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter tea type" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
                        <input type="number" id="price" name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter price" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Url:</label>
                        <input type="text" id="price" name="photo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter photo url" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
                        <textarea id="description" name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter description"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Tea</button>
                        <button type="reset" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTea;