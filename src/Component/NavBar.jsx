import React, { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navContainer  ">
      <div className="navWrapper bg-blue-300 w-[90%] m-auto py-2 px-3 flex justify-between items-center   ">
        {/* nav left strts  */}
        <div className="navLeft  ">
          <h1 className=" font-bold text-2xl  ">Noob Monir </h1>
        </div>
        {/* nav left ends */}

        {/* nav right starts  */}
        <div className="navRight  flex justify-between items-center gap-x-5 text-lg  font-medium ">
          <h1 className="  cursor-pointer ">Home </h1>
          <h1 className="  cursor-pointer ">About </h1>
          <h1 className="  cursor-pointer ">Department </h1>

          <div
            className="contactInfo  cursor-pointer relative    "
            onClick={() => setOpenMenu(!openMenu)}
          >
            <h1>Contact </h1>

            <div
              className={` subMenu absolute top-[1.8rem] right-0 bg-gray-600   text-gray-100 ${
                openMenu ? "hidden" : "flex"
              }   flex-col justify-center items-center w-[8rem]  `}
            >
              <h1 className=" py-2 hover:bg-gray-500 w-full m-auto text-center ">
                sub menu 1
              </h1>
              <h1 className=" py-2 hover:bg-gray-500 w-full m-auto text-center ">
                sub menu 2
              </h1>
              <h1 className=" py-2 hover:bg-gray-500 w-full m-auto text-center ">
                sub menu 3
              </h1>
            </div>
          </div>
        </div>
        {/* nav right ends */}

        {/*  */}
      </div>
    </div>
  );
};

export default NavBar;
