import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import PageTitle from "../PageTitle/PageTitle";

const Single = () => {
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
  const {
 
    itemName,
    imageUrl,
    subcategoryName,
    processingTime,
    description,
    price,
    rating,
    customization,
    stockStatus,
  } = product;

  return (
    <div className=" container mx-auto mt-10 p-5">
      <PageTitle title="card-details"></PageTitle>
      <div>
        <div className="flex">
          <button className="btn btn-secondary">View Details:</button>
          <Marquee pauseOnHover={true} speed={40}>
            <Link
              className="mr-12 lg:mr-24 text-orange-500 text-2xl font-extrabold"
              to="/"
            >
              {itemName}
            </Link>
            <Link
              className="mr-12 lg:mr-24 text-orange-500 text-2xl font-extrabold"
              to="/"
            >
              {itemName}
            </Link>
            <Link
              className="mr-12 lg:mr-24 text-orange-500 text-2xl font-extrabold"
              to="/"
            >
              {itemName}
            </Link>
            <Link
              className="mr-12 lg:mr-24 text-orange-500 text-2xl font-extrabold"
              to="/"
            >
              {itemName}
            </Link>
          </Marquee>
        </div>
      </div>

      <section className="bg-gray-400  space-y-3 lg:h-[px] w-full rounded-xl mt-10">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between space-y-8">
          <div className="flex items-center justify-center lg:pl-16  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={imageUrl}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[720px] xl:h-112 2xl:h-128 rounded-xl"
            />
          </div>
          <div className="flex flex-col space-y-5 lg:pr-24 lg:pl-16  rounded-sm  lg:text-left text-black">
            <h1 className="text-purple-900 text-4xl title-font font-bold mb-1">
              {subcategoryName}
            </h1>
            <div className=" flex gap-8">
              <h4 className="font-bold">
              customization:
                <span className="text-purple-900">{customization}</span>
              </h4>
              <h4 className="font-bold">
              StockStatus:<span className="text-purple-900">{stockStatus}</span>
              </h4>
            </div>
            <div className=" flex gap-8">
              <h4 className="font-bold">
                Price:<span className="text-purple-900">{price}</span>
              </h4>
              <h4 className="font-bold">
              rating:<span className="text-purple-900">{rating}</span>
              </h4>
              <h4 className="font-bold">
              processingTime:<span className="text-purple-900">{processingTime}</span>
              </h4>
            </div>

            <p className="leading-relaxed">
              {" "}
              <span className="text-xl  font-bold">Details :</span>{" "}
              {description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Single;
