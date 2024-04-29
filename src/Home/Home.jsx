import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SixData from "./SixData";
import Gallery from "./Gallery";

const Home = () => {
  const short = useLoaderData();
  const shortSlice = short.slice(0, 6);
  console.log(shortSlice);

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {shortSlice.map((art) => (
          <SixData key={art._id} artData={art} />
        ))}
      </div>
      <div className="container mx-auto mt-10">
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
