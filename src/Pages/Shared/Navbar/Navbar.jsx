import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../../hooks/UseCart";
import logo from "../../../assets/icon/logo.png";
import UseAdmin from "../../../hooks/UseAdmin";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart] = UseCart();
  const [isAdmin] = UseAdmin();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  const NavbarItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      { user && isAdmin &&<li>
        <Link to="/dashboard/admin-home">Dashboard</Link>
      </li>}
      { user && !isAdmin &&<li><Link to="/dashboard/user-home">Dashboard</Link></li>}
      <li>
        <Link
          className="bg-white text-primary hover:text-blue-600 h-8 my-2"
          to="/dashboard/my-cart"
        >
          <div className="flex gap-2 rounded ">
            <FaShoppingCart></FaShoppingCart>
            <button className="">+{cart?.length || 0}</button>
          </div>
        </Link>
      </li>

      <li>
        {user?.email ? (
          <Link to="/login" onClick={handleLogOut}>
            Log out
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-black fixed z-10 bg-opacity-30 text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavbarItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Bistro boss
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavbarItems}
          {/* photoURL */}
          {user?.uid && (
            <Link>
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
