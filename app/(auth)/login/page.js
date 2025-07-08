"use client";
import React from 'react'
import {MagicCard} from "@/components/magicui/magic-card";
import Link from 'next/link';
import { useState } from 'react';
const   Login= () => {

const [showPassword, setShowPassword] = useState(false);

return (
<>

    <div className="bg-gray-950 min-h-screen pt-16 ">
        <form className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg shadow-lg space-y-6 border-2 border-indigo-900 ">
            <h2 className="text-2xl font-bold text-center text-blue-500">
                Login to your account
            </h2>
            <div>
                <label className="block mb-2 text-indigo-400" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                    autoFocus='true'
                    required
                />
            </div>
            <div>
                <label className="block mb-2 text-indigo-400" htmlFor="password">
                    Password
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                        placeholder="Enter your password"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-blue-400 focus:outline-none"
                        tabIndex={-1}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            // Eye-off icon (hidden)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.364 6.364A9.956 9.956 0 0022 12c0-5.523-4.477-10-10-10-1.657 0-3.22.403-4.575 1.125M3 3l18 18" />
                            </svg>
                        ) : (
                            // Eye icon (visible)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                
                <Link href="#" className="text-pink-500 text-sm hover:underline">
                    Forgot password?
                </Link>
            </div>
            <button
                type="submit"
                className="w-full py-2 rounded-lg font-semibold bg-gradient-to-r from-indigo-400 to-blue-500 text-white shadow-md transition-colors"
            >
                Login
            </button>
            <p className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <Link href="/singup" className="text-pink-500 hover:underline">
                    Sign up
                </Link>
            </p>
        </form>
        
    </div>
    
    </>
)
}

export default Login 