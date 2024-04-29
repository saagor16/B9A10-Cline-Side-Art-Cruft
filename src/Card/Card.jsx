/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Card = ({ artData }) => {
  const {
    _id,
    itemName,
    imageUrl,
    subcategoryName,
    processingTime,
    description,
    price,
    rating,
    customization,
    stockStatus,
  } = artData;
  console.log(customization);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Art has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl space-y-5 h-full">
        <h2 className="text-lg font-bold text-gray-900">{itemName}</h2>
        <figure className="px-10 pt-10">
          <img src={imageUrl} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body space-y-5">
          <p className="text-sm text-gray-600">
            <strong>Category:</strong> {subcategoryName}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Description:</strong>
            {description.slice(0, 150)}{" "}
          </p>
          <div className="flex">
            <p className="text-sm text-gray-600">
              <strong>Processing Time:</strong> {processingTime}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Price:</strong> {price}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Rating:</strong> {rating}
            </p>
          </div>{" "}
          <hr />
          <div className="flex">
            <p className="text-sm text-gray-600">
              <strong>Customizable:</strong> {customization}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Status:</strong> {stockStatus}
            </p>
          </div>
          <div className="card-actions flex ">
            <Link to={`/art/${_id}`} className="btn btn-primary w-36">
              Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary w-36"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
