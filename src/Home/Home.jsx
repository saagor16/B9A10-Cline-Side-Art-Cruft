import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SixData from "./SixData";
import Gallery from "./Gallery";
import Starts from "./Starts";
import Gift from "./Gift";

const Home = () => {
  const short = useLoaderData();
  const shortSlice = short.slice(0, 6);
  console.log(shortSlice);

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-10 container mx-auto text-center">
        <h2 className="text-2xl font-bold">Art and Cruft:Textile Tapestry</h2>
        <p className="font-semibold mt-5 mb-10"> This unique showcase delves into how contemporary artists and designers reinterpret age-old techniques with modern-day waste—or create stunning, thought-provoking works. Visitors will experience a range of pieces, from hand-woven tapestries incorporating electronic waste to digitally printed fabrics that challenge our perceptions of beauty and utility.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {shortSlice.map((art) => (
          <SixData key={art._id} artData={art} />
        ))}
      </div>
      <div className="mt-10 container mx-auto text-center">
        <h2 className="text-2xl font-bold">Weaving Futures: Artistry and Innovation in Textile Design</h2>
      </div>
      <div className="container mx-auto mt-10">
        <Gallery></Gallery>
      </div>
      <div className="container mx-auto mt-10">
        <Gift></Gift>
      </div>
      <div className="container mx-auto mt-10">
        <Starts></Starts>
      </div>
    </div>
  );
};

export default Home;
