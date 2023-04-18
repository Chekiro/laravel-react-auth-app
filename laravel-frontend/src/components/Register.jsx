import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get CSRF token from meta tag
        const csrf_token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");

        // Set Axios request headers
        const headers = {
            "Content-Type": "application/json",
        };
        console.log(formData);

        try {
            // Send POST request to register endpoint
            const response = await axios.post(
                "http://127.0.0.1:8000/api/register",
                formData,
                { headers }
            );

            // Handle response
            if (response.status === 201) {
                // Registration successful
                console.log("Registration successful");
                // Reset form data
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                });
            } else {
                // Registration failed
                console.error("Registration failed");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Function to handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="container mx-auto px-auto  bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                            action="#"
                            method="POST"
                        >
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Name
                                </label>
                                <input
                                    value={formData.name}
                                    autoComplete="on"
                                    type="text"
                                    onChange={handleChange}
                                    name="name"
                                    id="name"
                                    className="bg-gray-50  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Name..."
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    value={formData.email}
                                    autoComplete="on"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    value={formData.password}
                                    onChange={handleChange}
                                    type="password"
                                    autoComplete="on"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-sky-400 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign up
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have account?{" "}
                                <Link
                                    to={"/login"}
                                    className="font-medium text-sky-500 hover:underline dark:text-sky-500"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
