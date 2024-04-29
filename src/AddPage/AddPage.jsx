import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddPage = () => {
  const { user } = useContext(AuthContext);
  const handleAdd = (event) => {
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
    const userEmail = user.email;
    const userName = user.displayName;

    const newArt = {
      itemName,
      imageUrl,
      subcategoryName,
      processingTime,
      description,
      price,
      rating,
      customization,
      stockStatus,
      userEmail,
      userName,
    };
    console.log(newArt);

    fetch("http://localhost:5000/art", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Card Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Craft Item</h2>
      <form onSubmit={handleAdd} className="space-y-5">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block font-medium">Item Name:</label>
            <input
              type="text"
              name="itemName"
              className="block w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block font-medium">Image URL:</label>
            <input
              type="url"
              name="imageUrl"
              className="block w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block font-medium">Subcategory Name:</label>
            <input
              type="text"
              name="subcategoryName"
              className="block w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block font-medium">Processing Time:</label>
            <input
              type="text"
              name="processingTime"
              className="block w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="w-full px-2 mb-4">
            <label className="block font-medium">Short Description:</label>
            <textarea
              name="description"
              className="block w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block font-medium">Price:</label>
            <input
              type="number"
              name="price"
              className="block w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block font-medium">Rating:</label>
            <input
              type="number"
              name="rating"
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
              className="block w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block font-medium">Stock Status:</label>
            <select
              name="stockStatus"
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
