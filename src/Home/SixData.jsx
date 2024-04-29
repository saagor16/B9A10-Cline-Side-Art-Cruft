/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const SixData = ({artData}) => {
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

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl space-y-5">
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
            {description}{" "}
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
            <Link to={`/single/${_id}`} className="btn btn-primary w-full">View Details</Link>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default SixData;