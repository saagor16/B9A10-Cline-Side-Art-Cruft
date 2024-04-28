import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";

const MyCard = () => {
  const [loading, setLoading] = useState(true);
  const allArtData = useLoaderData();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && allArtData) {
      setLoading(false);
    }
  }, [user, allArtData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const myArt = allArtData.filter(art => art.userEmail === user.email);

  

  return (
    <div className="mt-10 container mx-auto text-center">
      <div>All Art & Craft Items: {myArt.length}</div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {myArt.map((art) => (
          <Card key={art._id} artData={art} />
        ))}
      </div>
    </div>
  );
};

export default MyCard;
