
const UpdatePage = () => {
    return (
        <div>
          <div className="max-w-4xl mx-auto p-5">
            <h2 className="text-2xl font-bold mb-6 text-center">Add Craft Item</h2>
            <form className="space-y-5">
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
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
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
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block font-medium">User Email:</label>
                        <input
                            type="email"
                            name="userEmail"
                            className="block w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block font-medium">User Name:</label>
                        <input
                            type="text"
                            name="userName"
                            className="block w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                </div>
                <div className="px-2">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">
                        Add
                    </button>
                </div>
            </form>
        </div>  
        </div>
    );
};

export default UpdatePage;