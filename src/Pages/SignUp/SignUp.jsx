import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authImg from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Contexts/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin ";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
const SignUp = () => {
  const axiosPublic = UseAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      const SaveUser = { name: data.name, email: data.email };
      updateUserProfile(data.name, data.photoURL);
      axiosPublic
        .post("/users", SaveUser)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your account has been created",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        })

        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>bistro | signUp</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 gap-5 mt-32">
        <div>
          <figure>
            <img src={authImg} alt="" />
          </figure>
        </div>

        <div>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="bg-base-200 p-10"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">photo URL is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])/,
                })}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered mb-3"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must one uppercase one lowercase one special
                  characters one number
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="signUp" />
            </div>
            <SocialLogin></SocialLogin>
            <p className="mt-3">
              Already Have an account?
              <Link className="text-fuchsia-500" to="/login">
                Please Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
