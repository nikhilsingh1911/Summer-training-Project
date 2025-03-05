import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiBurningBook } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isStickDay, setSticy] = useState(false);

  const { user } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticy(true);
      } else {
        setSticy(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    // { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell your Book", path: "/admin/dashboard" },
    // { link: "Blog", path: "/blog" },
  ];
  return (
    <>
      {/* <div>Navbar</div> */}
      <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
        {/* something left */}
        <nav
          className={` py-4 lg:px-24 px-4 ${
            isStickDay ? "sticky top-0 left-0 right-0 bg-blue-200" : ""
          }`}
        >
          <div className="flex justify-between items-center text-base gap-8">
            {/*Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-blue-800 flex item-center gap-2"
            >
              <GiBurningBook className="inline-block" />
              Books
            </Link>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  {link}
                </Link>
              ))}
            </ul>
            <div className="space-x-12 hidden lg:flex item center">
              <button className="ga">
                {/* navigation bar three lines */}
                <FaBarsStaggered className="w-5 hover:text-blue-700" />
              </button>
            </div>

            {/* menu btn for the mobile devices */}

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black focus: outline-none"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-5 w-5 text-black" />
                ) : (
                  <FaBarsStaggered />
                )}
              </button>
            </div>
          </div>

          {/* nav item for small devices */}
          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-blue-600 ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-white uppercase cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
