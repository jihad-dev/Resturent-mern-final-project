import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
                <NavLink to="/dashboard/admin-home">🏠 Admin Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-items">➕ADD ITEMS</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items">🧔‍♂️MANAGE ITEMS</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-cart">
                  My cart
                  <div className="bg-neutral p-0 text-neutral-content rounded-full w-8">
                    <span className="text-xs px-2 ">+{cart?.length || 0}</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">🤑 payment history</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">👥 ALL USERS</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/user-home">🏠 User Home</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/my-cart">
                  My cart
                  <div className="bg-neutral p-0 text-neutral-content rounded-full w-8">
                    <span className="text-xs px-2 ">+{cart?.length || 0}</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-review">⭐Add Review</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">🤑 payment history</NavLink>
              </li>
            </>
          )}

          <div className="divider divider-info"></div>
          <li>
            <NavLink to="/">🏠 Home</NavLink>
          </li>

          <li>
            <NavLink to="/menu">Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
