import React from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  ArrowRight,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { auth, db } from "../Context/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  // ===========================================
  // React Hook Form Configuration
  // ===========================================
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Watch password field for confirm password validation
  const password = watch("password");
 const navigate = useNavigate();
  // Handle form submission
  const onSubmit = async (data) => {
    console.log(data);
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )

    const user = userCredentials.user;
    console.log(user);

    await setDoc(doc(db,"users",user.uid),{
       uid: user.uid,
      name: data.name,
      email: data.email,
      createdAt: serverTimestamp(),

    })
      navigate("/")
  };

  return (
    // ===========================================
    // Main Signup Page Container
    // ===========================================
    <div className="relative overflow-hidden w-full min-h-screen bg-slate-950 text-white">

      {/* ===========================================
          Background Gradient Effects
      =========================================== */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-700/20 blur-[120px]" />

      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-700/20 blur-[120px]" />

      <div className="absolute bottom-90 left-80 h-80 w-80 rounded-full bg-purple-700/20 blur-[120px]" />

      {/* ===========================================
          Main Layout
      =========================================== */}
      <div className="w-full flex items-center justify-center">

        {/* ===========================================
            Left Branding Section
            (Hidden on Mobile)
        =========================================== */}
        <div className="hidden md:flex w-[40%] min-h-screen items-center justify-center px-12">

          <div className="max-w-md">

            {/* Brand Logo */}
            <div className="flex items-center gap-3 mb-12">

              <div className="h-12 w-12 rounded-xl bg-linear-to-br from-violet-500 to-purple-700 flex items-center justify-center text-xl font-bold shadow-lg shadow-violet-600/30">
                IQ
              </div>

              <h2 className="text-3xl font-bold">
                Interview
                <span className="text-violet-500">
                  IQ
                </span>{" "}
                AI
              </h2>

            </div>

            {/* Hero Heading */}
            <h1 className="text-5xl font-bold leading-tight">
              Prepare{" "}
              <span className="text-violet-500">
                Smarter.
              </span>

              <br />

              Get Hired{" "}
              <span className="text-violet-500">
                Faster.
              </span>
            </h1>

            {/* Hero Description */}
            <p className="mt-6 text-lg text-gray-400 leading-8">
              Practice AI-powered interviews, improve your
              confidence, receive instant feedback, and land
              your dream job.
            </p>

            {/* Product Features */}
            <div className="mt-12 space-y-6">

              {/* Feature 1 */}
              <div className="flex items-start gap-4">

                <div className="h-11 w-11 rounded-xl bg-violet-600/15 flex items-center justify-center text-violet-400">
                  🎤
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    AI Mock Interviews
                  </h3>

                  <p className="text-gray-400">
                    Practice with realistic interview questions.
                  </p>
                </div>

              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">

                <div className="h-11 w-11 rounded-xl bg-violet-600/15 flex items-center justify-center text-violet-400">
                  ⚡
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Instant Feedback
                  </h3>

                  <p className="text-gray-400">
                    Get AI-generated suggestions after every interview.
                  </p>
                </div>

              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">

                <div className="h-11 w-11 rounded-xl bg-violet-600/15 flex items-center justify-center text-violet-400">
                  📈
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Track Progress
                  </h3>

                  <p className="text-gray-400">
                    Measure your improvement with detailed analytics.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ===========================================
            Signup Form Section
        =========================================== */}
        <div className="w-[95%] md:w-[60%] md:p-5 p-2 flex justify-center items-center min-h-full">

          {/* Signup Card */}
          <div className="w-[97%] max-w-xl rounded-3xl border border-[#2C3556] bg-[#111827]/80 backdrop-blur-xl p-5 md:p-10">

            {/* Form Heading */}
            <h1 className="md:text-4xl text-3xl font-bold text-white text-center">
              Create your account
            </h1>

            <p className="text-gray-400 text-center mt-2">
              Start your AI interview journey
            </p>

            {/* Signup Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 space-y-6"
            >

              {/* Full Name Input */}
              <div>
                <label className="text-gray-300 mb-2 block">
                  Full Name
                </label>

                <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                  <User size={18} className="text-gray-400" />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="w-full bg-transparent px-3 py-4 text-white outline-none"
                  />

                </div>

                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="text-gray-300 mb-2 block">
                  Email
                </label>

                <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                  <Mail size={18} className="text-gray-400" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email",
                      },
                    })}
                    className="w-full bg-transparent px-3 py-4 text-white outline-none"
                  />

                </div>

                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
                            {/* Password Input */}
              <div>
                <label className="text-gray-300 mb-2 block">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                  <Lock size={18} className="text-gray-400" />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    className="w-full bg-transparent px-3 py-4 text-white outline-none"
                  />

                  <Eye
                    size={18}
                    className="text-gray-400 cursor-pointer"
                  />

                </div>

                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="text-gray-300 mb-2 block">
                  Confirm Password
                </label>

                <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                  <Lock size={18} className="text-gray-400" />

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    {...register("confirmPassword", {
                      required: "Confirm your password",
                      validate: (value) =>
                        value === password ||
                        "Passwords do not match",
                    })}
                    className="w-full bg-transparent px-3 py-4 text-white outline-none"
                  />

                  <Eye
                    size={18}
                    className="text-gray-400 cursor-pointer"
                  />

                </div>

                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center gap-3">

                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "Please accept Terms & Conditions",
                  })}
                  className="accent-violet-600"
                />

                <span className="text-sm text-gray-300">
                  I agree to the{" "}
                  <span className="text-violet-500 cursor-pointer hover:underline">
                    Terms & Conditions
                  </span>
                </span>

              </div>

              {errors.terms && (
                <p className="text-red-400 text-sm">
                  {errors.terms.message}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-linear-to-r from-violet-600 to-purple-700 py-4 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-700/20 transition-all duration-300"
              >
                Create Account

                <ArrowRight size={18} />
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">

                <div className="h-px flex-1 bg-[#2C3556]" />

                <span className="text-sm text-gray-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-[#2C3556]" />

              </div>

             

              {/* Login Redirect */}
              <p className="text-center text-gray-400">
                Already have an account?{" "}
                <span className="text-violet-500 cursor-pointer hover:text-violet-400 transition-colors">
                  <Link
                  to={"/Login"}
                  >Login</Link>
                </span>
              </p>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;