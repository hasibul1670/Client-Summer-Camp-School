/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [disabled, setDisabled] = useState(true);
  const from = location.state?.from?.pathname || "/";

  const { loginUser, setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const mutation = useMutation((userData) => loginUser(userData), {
    onSuccess: (data) => {
      reset();
      const token = data.data.accessToken;
      const email = data.data.email;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "User logged in successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      setUser({ token, email });
      navigate(from, { replace: true });
    },
    onError: (error) => {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    mutation.mutate({ email, password });
  };

  return (
    <div className="main-container p-10 py-20 banner-login  md:hero min-h-screen   justify-items-center">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Login <span className="text-blue-500">now!</span>{" "}
            </h1>
            <p className="py-6 text-sm font-bold">
              Join us for an enriching and exciting summer filled with learning,
              exploration, and unforgettable memories. At Sunlight Academy's
              Summer School Camp,
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:hero font-bold "
          >
            <div className="card flex-shrink-0 w-full max-w-screen-sm  shadow-2xl ">
              <div className="card-body">
                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>

                  <input
                    {...register("email", { required: true })}
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                 
                  />
                   {errors.email?.type === "required" && (
                    <span className="text-red-600">
                      Email is required!
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password : </span>
                  </label>
                  <input
                    {...register("password", { required: true })}
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                   
                  />
                   {errors.password?.type === "required" && (
                    <span className="text-red-600">
                      Password is required!
                    </span>
                  )}
                </div>

                <label className="label">
                  <Link
                    to="/forgot-password"
                    className="label-text-alt text-blue-500 "
                  >
                    Forgot password?
                  </Link>
                </label>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                  <p className="text-sm font-bold mt-4">
                    Don't you have any Account ?{" "}
                    <Link to="/signup" className="text-blue-500 ">
                      Register
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
