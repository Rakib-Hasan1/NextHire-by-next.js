"use client";
import { FaBriefcase, FaBuilding, FaUsers, FaPlusCircle } from "react-icons/fa";

export default function HeroSection() {
    return (
        <div
            className="relative h-[90vh] flex flex-col items-center justify-center text-white text-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1400&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center space-y-6">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Find Your <span className="text-blue-400">Dream Job</span> Today
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-300">
                    Explore thousands of jobs, connect with top companies, and take your
                    career to the next level.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-left">
                    <div className="flex items-center space-x-3">
                        <FaBriefcase className="text-blue-400 text-2xl" />
                        <div>
                            <p className="text-xl font-semibold">12k+</p>
                            <span className="text-gray-300">Live Jobs</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaBuilding className="text-green-400 text-2xl" />
                        <div>
                            <p className="text-xl font-semibold">3k+</p>
                            <span className="text-gray-300">Companies</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaUsers className="text-yellow-400 text-2xl" />
                        <div>
                            <p className="text-xl font-semibold">25k+</p>
                            <span className="text-gray-300">Candidates</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaPlusCircle className="text-pink-400 text-2xl" />
                        <div>
                            <p className="text-xl font-semibold">500+</p>
                            <span className="text-gray-300">New Jobs</span>
                        </div>
                    </div>
                </div>

                {/* Search Box */}
                <div className="bg-white w-full rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 shadow-lg">
                    <input
                        type="text"
                        placeholder="Job Title, Keywords..."
                        className="p-3 rounded-lg border w-full md:flex-1 text-black"
                    />
                    <select className="p-3 rounded-lg border w-full md:w-1/3 text-black">
                        <option>Select Category</option>
                        <option>Technology</option>
                        <option>Design</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 px-6 rounded-lg w-full md:w-auto"
                    >
                        Search Job
                    </button>
                </div>


            </div>
        </div>
    );
}
