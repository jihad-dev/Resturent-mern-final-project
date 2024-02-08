import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Loader from "../../Shared/Loader/Loader";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const { data: payments = [], isPending } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  if (isPending) {
    return <Loader></Loader>;
  }
  return (
    <div className="my-6">
      <Helmet>
        <title>Bistro | Payment History</title>
      </Helmet>
      <SectionTitle
        heading="Payment History "
        subHeading="---How many??---"
      ></SectionTitle>
      <div className="lg:mx-6 bg-base-300 lg:p-9 h-auto w-full">
        <h1 className="px-4 text-2xl lg:text-4xl font-bold ">
          Total Amount : {payments.length}
        </h1>
        <div className="overflow-x-auto lg:px-6 mt-6">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>EMAIL </th>
                <th>PRICE</th>
                <th>TRANSACTION ID</th>
                <th>STATUS</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, i) => (
                <tr key={payment._id}>
                  <th>{i + 1}</th>
                  <td>{payment.email}</td>
                  <td>${payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.status}</td>
                  <td>{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
