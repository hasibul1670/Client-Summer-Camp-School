/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const [gender, setGender] = useState("");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const mutation = useMutation((userData) => createUser(userData), {
    onSuccess: (data) => {
      reset();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "User created successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
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
    const firstName = data.firstName;
    const lastName = data.lastName;
    const address = data.address;
    const dateofBirth = data.dob;
    const contactNo = data.contactNo;
    mutation.mutate({
      email: email,
      role: "student",
      password: password,
      name: { firstName, lastName },
      address: address,
      dateofBirth: dateofBirth,
      contactNo: contactNo,
    });
  };

  return (
    <div className="main-container p-10 py-20 banner-login  md:hero min-h-screen   justify-items-center">
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">
              Register <span className="text-blue-500">now!</span>{" "}
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
            <div className="card flex-shrink-0  w-full max-w-screen-md shadow-2xl ">
              <div className="card-body">
                {/* FirstName */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> First Name: </span>
                  </label>

                  <input
                    {...register("firstName", { required: true })}
                    name="firstName"
                    placeholder="First Name"
                    className="input input-bordered"
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />
                  {errors.firstName?.type === "required" && (
                    <span className="text-red-600">
                      First name is required!
                    </span>
                  )}
                </div>
                {/* Last Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>

                  <input
                    {...register("lastName", { required: true })}
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered"
                  
                  />
                    {errors.lastName?.type === "required" && (
                    <span className="text-red-600">
                      Last name is required!
                    </span>
                  )}
                </div>

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
                      Email name is required!
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

                {/* gender selection */}
                <div className="gender-options">
                  <label className="label cursor-pointer">
                    <span className="label-text">Male</span>
                    <input
                      {...register("gender", { required: true })}
                      type="radio"
                      name="gender"
                      className="radio checked:bg-red-500"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGenderChange}
                    />
                 
                  </label>

                  <label className="label cursor-pointer">
                    <span className="label-text">Female</span>
                    <input
                      {...register("gender", { required: true })}
                      type="radio"
                      name="gender"
                      className="radio mt-2 radio-primary"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGenderChange}
                    />
                  
                  </label>

                
                </div>
                {/* DOB */}
                <div>
                  <label className="label">
                    <span className="label-text">Date of Birth: </span>
                  </label>
                  <input
                    {...register("dob", { required: true })}
                    className="input input-bordered"
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                  />
                      {errors.dob?.type === "required" && (
                    <span className="text-red-600">
                      Select your Date of Birth
                    </span>
                  )}
                </div>

                {/* Adress */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address : </span>
                  </label>
                  <input
                    {...register("address", { required: true })}
                    name="address"
                    type="text"
                    placeholder="Address"
                    className="input input-bordered"
                   
                  />
                  {errors.address?.type === "required" && (
                    <span className="text-red-600">
                      Address is Required
                    </span>
                  )}
                </div>

                {/* contactNo */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Contact : </span>
                  </label>
                  <input
                    {...register("contactNo", { required: true })}
                    name="contactNo"
                    type="text"
                    placeholder="Contact Number"
                    className="input input-bordered"
                  />
                  {errors.contactNo?.type === "required" && (
                    <span className="text-red-600">
                      Contact Number is Required
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button className="btn font-bold btn-primary">
                    Register
                  </button>
                  <p className="text-sm font-bold mt-4">
                    Already have an Account?{" "}
                    <Link to="/login" className="text-blue-500 ">
                      Login
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

export default SignUp;
