"use client";

import { FaArrowRight } from "react-icons/fa";

export default function TrendingCategories() {
    const categories = [
        { name: "Technology", jobs: "1200+" },
        { name: "Design", jobs: "800+" },
        { name: "Marketing", jobs: "650+" },
        { name: "Finance", jobs: "500+" },
        { name: "Healthcare", jobs: "900+" },
        { name: "Education", jobs: "700+" },
    ];

    return (
        <main className="bg-gray-200">
            <section className="py-16 px-6 max-w-6xl mx-auto">
                {/* Heading */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Trending <span className="text-green-600">Job Categories</span>
                    </h2>
                    <p className="text-gray-600 mt-3">
                        Discover the most in-demand job categories and start your career in
                        the right direction.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="border border-green-300 rounded-xl p-6 text-center transition duration-300 hover:border-green-500 cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">
                                {category.name}
                            </h3>
                            <p className="text-gray-500 mt-2">Job Available : <span className="font-semibold text-green-600">{category.jobs}</span></p>
                        </div>
                    ))}
                    <div>
                        <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:bg-green-600 hover:scale-105 hover:shadow-lg cursor-pointer">
                            See More
                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                    </div>
                </div>
            </section>
        </main>
    );
}
