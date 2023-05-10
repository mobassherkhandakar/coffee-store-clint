import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CaffeCard = ({ caffee, setCaffees, caffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = caffee;
  console.log(caffee);
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-error",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://coffee-store-server-mobassherkhandakar.vercel.app/caffees/${id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
                const remmeing = caffees.filter(caffee=> caffee._id !== _id)
                setCaffees(remmeing)
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="" src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between items-center gap-5">
          <div className="ms-5">
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <p>{taste}</p>
            <p>{supplier}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-5">
              <button className="btn btn-active">Viwe</button>
              <Link to={`/updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
              </Link>
              <button onClick={() => handleDelete(_id)} className="btn bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaffeCard;
