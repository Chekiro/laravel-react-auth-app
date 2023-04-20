import React from "react";
import { Link } from "react-router-dom";

const Home = ({ isLoggedIn }) => {
    return (
        <div className="flex text-center justify-center pt-64">
            {isLoggedIn ? (
                <h1>
                    Hello welcome to Home Page , I see that the registration was
                    successful 😄
                </h1>
            ) : (
                <div>
                    <h1 className="mr-4">Register to see view of Home Page </h1>
                    <span>
                        <Link className="text-sky-400" to={"/register"}>
                            Sign up
                        </Link>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Home;
