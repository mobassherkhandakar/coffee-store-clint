
  import React from "react";
  import Header from "../Header/Header";
  import { fromJSON } from "postcss";
  import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
  
  const Updatecaffe = () => {
    const loadCaffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, photo,category,details } = loadCaffee;


    const handleUpdate = (e) => {
      e.preventDefault();
      const from = e.target;
      const name = from.name.value;
      const quantity = from.quantity.value;
      const supplier = from.supplier.value;
      const taste = from.taste.value;
      const category = from.category.value;
      const details = from.details.value;
      const photo = from.photo.value;
      const newCaffee = {
        name,
        quantity,
        supplier,
        taste,
        category,
        details,
        photo,
      };
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          fetch(
            `https://coffee-store-server-mobassherkhandakar.vercel.app/caffees/${_id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newCaffee),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire("Saved!", "", "success");
              }
              from.reset()
            });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    };
  
    return (
      <>
        <Header />
  
        <div className="bg-[#F4F3F0] p-24">
          <h1 className="text-4xl mb-4 text-center text-purple-600">
            Update a Coffee Store
          </h1>
          <form onSubmit={handleUpdate}>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={name}
                    name="name"
                    placeholder="Coffee Name"
                    className="input input-bordered input-success w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={quantity}
                    name="quantity"
                    placeholder="Available Quantity"
                    className="input input-bordered input-error w-full"
                  />
                </label>
              </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Supplier Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Supplier Name"
                    className="input input-bordered input-success w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={taste}
                    name="taste"
                    placeholder="Taste"
                    className="input input-bordered input-error w-full"
                  />
                </label>
              </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Category"
                    className="input input-bordered input-success w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    defaultValue={details}
                    placeholder="Details"
                    className="input input-bordered input-error w-full"
                  />
                </label>
              </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={photo}
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered input-warning w-full"
                  />
                </label>
              </div>
            </div>
            <input type="submit" value="Update Coffee" className="btn btn-block" />
          </form>
        </div>
      </>
    );
  };
  
  export default Updatecaffe;
  