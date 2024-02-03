import React from "react";
import { Link, Outlet } from "react-router-dom";
import UseCart from "../../hooks/UseCart";
import UseAdmin from "../../hooks/UseAdmin";

const Dashboard = () => {
  const [cart] = UseCart();
  const [isAdmin] = UseAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-yellow-500 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <Link>🏠 Admin Home</Link>
              </li>
              <li>
                <Link>➕ADD ITEMS</Link>
              </li>
              <li>
                <Link to="/dashboard/my-cart">
               MANAGE ITEMS
                </Link>
              </li>
              <li>
                <Link to="/">📑MANAGE BOOKINGS</Link>
              </li>
              <li>
                <Link to="/dashboard/all-users">👥 ALL USERS</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link>🏠 User Home</Link>
              </li>
              <li>
                <Link>✌️Reservation</Link>
              </li>
              <li>
                <Link to="/dashboard/my-cart">
                My cart
                  <div className="bg-neutral p-0 text-neutral-content rounded-full w-8">
                    <span className="text-xs px-2 ">+{cart?.length || 0}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">🤑 payment history</Link>
              </li>
            </>
          )}

          <div className="divider divider-info"></div>
          <li>
            <Link to="/">🏠 Home</Link>
          </li>
          <li>
                <Link to="/dashboard/my-cart">
                My cart
                  <div className="bg-neutral p-0 text-neutral-content rounded-full w-8">
                    <span className="text-xs px-2 ">+{cart?.length || 0}</span>
                  </div>
                </Link>
              </li>
          {/* <li>
            <Link to="/dashboard/my-cart">🛒 My Cart</Link>
          </li> */}
          <li>
            <Link to="/menu">Our Menu</Link>
          </li>
          <li>
            <Link to="/order/salad">Order Food</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
