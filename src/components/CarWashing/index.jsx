import React from "react";
import Car from "../../assets/imags/Rectangle 874.png";
import { Link } from "react-router-dom";

const CarWashing = () => {
  return (
    <div className="bg-[#FFD378] pb-32 -mt-1   md:pt-5">

      <div className="container mx-auto grid md:grid-cols-2 place-items-center">

        <div className=" mb-12 md:mb-0 pl-5 md:pl-20 ">
        <div>
        <h1 className=" text-3xl lg:text-5xl">Car Washing</h1>
          <p className=" md:w-[70%] xl:w-[39%] my-5 opacity-70 ">
            A car wash service is more than just adding a shine to your vehicle.
            A full-service car wash provides a thorough cleansing to both the
            inside and the outside of your car.
          </p>
          <Link to="services" className=" bg-Primary text-white px-3 py-2 md:px-3 md:py-2 rounded">
           Book a Service
          </Link>
        </div>
         
        </div>

        <div>
          <img className=" border-4 rounded-full w-[80%] mx-auto" src={Car} alt="car" />
        </div>

      </div>
    </div>
  );
};

export default CarWashing;




