import { useState } from "react";
import Link from "next/link";
import Event from "./Event";

const Events = ({ Name, Venue, Description }) => {
  const [showModal, setShowModal] = useState(false);

  return (
<<<<<<< HEAD
    <div className='text-[20px]'>
      <h1 className='font-bold m-8 text-center text-[30px]'>
=======
    <div>
      <h1 className="font-bold m-8 text-center text-[30px]">
>>>>>>> 8c3cdb4c1c3a1670bd746d3eefb93382a3182189
        Explore all the Events!
      </h1>

      <Event
        Name="ETHConcert 23"
        Venue="Bnagalore"
        Description="A concert conducted by Ethereum Foundation"
      />
      <Event
        Name="FIL Bangalore 23"
        Venue="Bnagalore"
        Description="An event conducted by Filecoin"
      />
      <Event
        Name="Polygon Connect 23"
        Venue="Bnagalore"
        Description="An event conducted by Polygon"
      />

      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-1/2  border-2 border-black rounded-xl h-[15rem] p-2 ml-auto mr-auto">
          <h2 className="text-base mt-2 text-gray-400 font-semibold mb-8 text-start">
            {id}
          </h2>
          <div className="flex gap-5">
            <Link
              href="./Buynow"
              className="m-5 w-auto px-8 h-10  pt-2 rounded-md shadow  border-2 border-black  font-semibold"
            >
              Buy Now
            </Link>
            <button
              className=" w-auto px-12 my-5   h-10   rounded-md   border-2 border-black font-semibold"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Events;
