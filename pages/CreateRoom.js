"use client"
import React, { useEffect, useRef } from 'react';
const CreateRoom = ({ Disable }) => {
    // Reference for the form container
    const formRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (formRef.current && !formRef.current.contains(event.target)) {
                Disable(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [Disable]);

    return (
        <div className="bg-gray-950 min-h-screen min-w-screen pt-16">
            <form
                ref={formRef}
                className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg shadow-md shadow-blue-300 space-y-6 border-2 border-indigo-900 relative "
            >
                {/* Cross Button */}
                <button
                    className="absolute right-4 top-4 text-gray-400 hover:text-red-500 text-2xl focus:outline-none cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        Disable(false);
                    }}

                >
                    x
                </button>
                <h2 className="text-2xl font-bold text-center text-blue-500">
                    Create a Room
                </h2>
                <div>
                    <label className="block mb-2 text-indigo-400" htmlFor="roomName">
                        Room Name
                    </label>
                    <input
                        type="text"
                        id="roomName"
                        name="roomName"
                        className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter room name"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 text-indigo-400" htmlFor="roomCode">
                        Room Code
                    </label>
                    <input
                        type="text"
                        id="roomCode"
                        name="roomCode"
                        className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter room code"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 text-indigo-400" htmlFor="password">
                        Password (optional)
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Create a password (optional)"
                        required={false}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                >
                    Create Room
                </button>
            </form>
        </div>
    );
}

export default CreateRoom