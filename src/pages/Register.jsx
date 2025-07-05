import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  // Here Using UseForm Hook For Bettter Form handling in React

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [serverResponse, setServerResponse] = useState("");

  //Create Onsubmit Method For call The api and Post the Data

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://taskify-app.up.railway.app/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data.message)
      setServerResponse("✅ " + response.data.message);
      reset();
    } catch (error) {
      if (error.response) {
        setServerResponse(
          "❌ " + (error.response.data.message || "Registration failed.")
        );
      } else {
        setServerResponse("❌ Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Username Field */}

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="text-sm text-red-600 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password Field */}


          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}


          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Register
          </button>

          {/* Server Response */}

          
          {serverResponse && (
            <p className="mt-3 text-center font-medium text-sm text-gray-800">
              {serverResponse}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
