import { useLoaderData, Link } from "react-router-dom";

const AllArt = () => {
  const artData = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-2xl font-bold text-center mb-6">
        All Art & Craft Items
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">No.</th>
              <th className="px-4 py-2 text-left">ItemName</th>
              <th className="px-4 py-2 text-left">Stock</th>

              <th className="px-4 py-2 text-left">customization</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">rating</th>
              <th className="px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {artData.map((item, index) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.itemName}</td>
                <td className="px-4 py-2">{item.stockStatus}</td>

                <td className="px-12 py-2 ">{item.customization}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">{item.rating}</td>
                <td className="px-4 py-2 text-center">
                  <Link
                    to={`/single/${item._id}`}
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArt;
