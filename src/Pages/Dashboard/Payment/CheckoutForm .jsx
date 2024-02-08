import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useEffect } from "react";
import UseCart from "../../../hooks/UseCart";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import { AuthContext } from "../../../Contexts/AuthProvider";

const CheckoutForm = () => {
  const [Error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, SetTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = UseAxiosPublic();
  const [cart] = UseCart();

  // Using reduce to calculate the total amount
  const totalPrice = cart.reduce((total, item) => {
    return item.price + total;
  }, 0);
  console.log(totalPrice, "totalPrice inside cart");

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    // confirmation message from Stripe payment method

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(
        "confirmation error from Stripe payment method",
        confirmError
      );
    } else {
      console.log("payment intent from Stripe payment method", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        SetTransactionId(paymentIntent.id);
      }
    }
  };
  return (
    <form className="mx-8" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-8 mx-6"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{Error}</p>
      {transactionId && (
        <p className="text-green-600">Your TransactionId : {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
