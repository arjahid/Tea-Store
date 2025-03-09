import React from "react";
import Heade from "./Heade";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllTea = () => {
  const tea = useLoaderData();

  console.log("tea", tea);
  const handleDelete = (_id) => {
    console.log("delte", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7000/tea/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            {
              console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                willClose: () => {
                  window.location.reload();
                },
              });
            }
          });
      }
    });
  };
  return (
    <div className="">
      <Heade></Heade>
      <p>Total tea aviable:{tea.length}</p>
      <div className="grid grid-cols-3 gap-4 bg-green-400">
        {tea.map((t) => (
          <div
            key={t._id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-green-200 m-4"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 mr-7">{t.name}</div>
              <div>
                <img
                  className="w-full"
                  src={t.photo}
                  alt="Sunset in the mountains"
                />
              </div>

              <p className="text-gray-700 font-bold font-serif text-base pb-3 pt-3 mr-7">
                Price:{t.price}
              </p>
              <div className="mr-7">
                {" "}
                <NavLink to={`/updatetea/${t._id}`}>
                  <button className="btn btn-accent mr-2">Edit</button>
                </NavLink>
                <NavLink>
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="btn btn-accent"
                  >
                    Delete
                  </button>
                </NavLink>
               <NavLink to={`/teadetails/${t._id}`}><button className="btn btn-accent ml-2">View</button></NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTea;
