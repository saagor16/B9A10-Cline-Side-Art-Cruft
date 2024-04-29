import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";

const MyCard = () => {
  const [loading, setLoading] = useState(true);
  const allArtData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (user && allArtData) {
      setLoading(false);
    }
  }, [user, allArtData]);

  if (loading) {
    return <div></div>;
  }

  const myArt = allArtData.filter((art) => art.userEmail === user.email);
  const filteredArt = myArt.filter((art) => {
    switch (filter) {
      case "Yes":
        return art.customization;
      case "No":
        return !art.customization;
      default:
        return true;
    }
  });

  return (
    <div className="mt-10 container mx-auto text-center">
      <div>
        <h2>All Art & Craft Items: {myArt.length}</h2>
      </div>
      <div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded-md mt-5"
        >
          <option value="All">All</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {filteredArt.map((art) => (
          <Card key={art._id} artData={art} />
        ))}
      </div>
    </div>
  );
};

export default MyCard;
