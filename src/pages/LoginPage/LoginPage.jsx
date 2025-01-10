import { useState, useRef, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import loginImg from '../../assets/login.png'

const LoginPage = () => {
    const { user, loginUser, googleSignIn, logoutUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(formData.email, formData.password);
            setFormData({ email: '', password: '' }); // Reset form data
            emailRef.current.value = '';
            passwordRef.current.value = '';
            toast.success('Logged in successfully!');
            navigate('/');
        } catch (error) {
            toast.error('Error logging in!', error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            toast.success('Logged in successfully with Google!');
            navigate('/');
        } catch (error) {
            toast.error('Error logging in with Google!', error);
        }
    }

    const handleLogout = async () => {
        try {
            await logoutUser();
            toast.success('Logged out successfully!');
            navigate('/');
        } catch (error) {
            toast.error('Error logging out!', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Helmet>
                <title>SprintSpace | Login</title>
            </Helmet>
            <div className="w-full max-w-lg lg:max-w-5xl p-8 bg-white  dark:bg-gray-800 rounded-lg shadow-lg my-10 mx-4">
                {user ? (
                    <div className="">
                        <div className="p-4 text-center text-green-600 bg-green-100 rounded-md flex flex-col justify-center items-center gap-2">
                            <img src={user.photoURL} alt="Avatar" className="w-20 h-20 object-cover rounded-full border-2 border-red-500" />
                            <p className="text-gray-800 dark:text-white">Logged in successfully! {user.displayName || user.email}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            type="submit"
                            className="w-full px-4 py-2 mt-3 md:mt-5 text-sm font-medium text-white bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        >
                            Log out
                        </button>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {/* Image Section */}
                        <div className="hidden lg:flex max-w-md justify-center items-center">
                            <img src={loginImg} alt="Running" className="w-full p-4 object-cover rounded-md" />
                        </div>
                        {/* Login Form */}
                        <div className="max-w-md p-4 space-y-2">
                            <h2 className="text-3xl text-center text-gray-700 dark:text-white font-faj">Login to Your Account</h2>
                            <hr className='my-4 border-gray-300 dark:border-gray-600'></hr>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        ref={emailRef}
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                                        Password
                                    </label>
                                    <input type="password" name="password" id="password" ref={passwordRef}
                                        value={formData.password}
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                        required
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 font-semibold text-white bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => handleGoogleSignIn()}
                                    className="w-full flex justify-center items-center gap-2 px-4 py-2 font-semibold border border-sky-500 text-white rounded-md hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                >
                                    <FcGoogle />
                                    <p className="text-gray-800 dark:text-white">Login with Google</p>
                                </button>

                                <hr className="my-4 border-gray-300 dark:border-gray-600" />
                                <p className="text-sm text-center text-gray-600 dark:text-gray-200">
                                    Forgot your password?{' '}
                                    <span
                                        onClick={() =>
                                            navigate('/reset-password', { state: { email: formData.email } })
                                        }
                                        className="text-sky-500 hover:underline cursor-pointer"
                                    >
                                        Reset
                                    </span>
                                </p>

                                <p className="text-sm text-center text-gray-600 dark:text-gray-200">
                                    Don&apos;t have an account?{' '}
                                    <span onClick={() => navigate("/register")} href="/register" className="text-sky-500 hover:underline">
                                        Register here
                                    </span>
                                </p>
                            </form>
                        </div>
                    </div>
                )}



            </div>
        </div>
    );
};

export default LoginPage;
