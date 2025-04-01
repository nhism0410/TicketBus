import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaDiscord, FaApple, FaRegEye, FaEyeSlash } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreeTerms) {
            alert("You must agree to the terms and conditions.");
            return;
        }
        //+logic
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-red-100">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-96 h-auto border border-gray-300 justify-end">
                <h2 className="text-red-500 text-3xl font-semibold text-center mb-6">Sign Up</h2>
                
                <div className="flex justify-center space-x-3 mb-4">
                    <button className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-red-500 hover:text-white transition">
                        <FaFacebook />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-red-500 hover:text-white transition">
                        <FaGithub />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-red-500 hover:text-white transition">
                        <FaDiscord />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-red-500 hover:text-white transition">
                        <FaApple  />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-red-500 hover:text-white transition">
                        <FaSquareTwitter  />
                    </button>
                </div>
                
                <button className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-red-500 hover:text-white transition">
                    <FcGoogle className="mr-2" /> Sign up with Google
                </button>
                
                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <p className="mx-3 text-gray-500 text-sm">Or</p>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-neutral-500">Username</label>
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-neutral-500">Email Address</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-neutral-500">Password</label>
                        <input 
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <FaRegEye  size={20} /> : <FaEyeSlash  size={20} />}
                        </button>
                    </div>
                    
                    <div className="flex items-center">
                        <input 
                            type="checkbox" 
                            checked={agreeTerms}
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                            className="mr-2"
                        />
                        <p className="text-sm text-neutral-500">
                            Creating an account means you're okay with our 
                            <span className="text-red-500 cursor-pointer"> Terms of Service</span>, 
                            <span className="text-red-500 cursor-pointer"> Privacy Policy</span>, 
                            and our default <span className="text-red-500 cursor-pointer"> Notification Settings</span>.
                        </p>
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
                    >
                        Create Account
                    </button>
                </form>
                
                <p className="text-center text-neutral-500 mt-4">
                    Already a member?
                    <Link to="/login" className="text-red-500 hover:underline ml-1">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
