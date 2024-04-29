import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/singleArt/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const itemName = form.itemName.value;
    const imageUrl = form.imageUrl.value;
    const subcategoryName = form.subcategoryName.value;
    const processingTime = form.processingTime.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const info = {
      itemName,
      imageUrl,
      subcategoryName,
      processingTime,
      description,
      price,
      rating,
      customization,
      stockStatus,
    };
    fetch(`http://localhost:5000/updateArt/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Card Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-5">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Update Craft Item:{product.itemName}
        </h2>
        <form onSubmit={handleUpdate} className="space-y-5">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block font-medium">Item Name:</label>
              <input
                type="text"
                name="itemName"
                defaultValue={product.itemName}
                placeholder="itemName"
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block font-medium">Image URL:</label>
              <input
                type="url"
                name="imageUrl"
                defaultValue={product.imageUrl}
                placeholder="imageUrl"
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block font-medium">Subcategory Name:</label>
              <input
                type="text"
                name="subcategoryName"
                defaultValue={product.subcategoryName}
                placeholder="subcategoryName"
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block font-medium">Processing Time:</label>
              <input
                type="text"
                name="processingTime"
                defaultValue={product.processingTime}
                placeholder="processingTime"
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label className="block font-medium">Short Description:</label>
              <textarea
                name="description"
                defaultValue={product.description}
                placeholder="description"
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block font-medium">Price:</label>
              <input
                type="number"
                name="price"
                defaultValue={product.price}
                placeholder="price"
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block font-medium">Rating:</label>
              <input
                type="number"
                name="rating"
                defaultValue={product.rating}
                placeholder="rating"
                min="1"
                max="5"
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block font-medium">Customization:</label>
              <select
                name="customization"
                defaultValue={product.customization}
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block font-medium">Stock Status:</label>
              <select
                name="stockStatus"
                defaultValue={product.stockStatus}
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                required
              >
                <option value="">Select</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
          </div>
          <div className="px-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
