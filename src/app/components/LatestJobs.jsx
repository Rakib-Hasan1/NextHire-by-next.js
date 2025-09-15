"use client";
import { FaArrowRight } from "react-icons/fa";

export default function LatestJobs() {
    const jobs = [
        {
            id: 1,
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
            designation: "Frontend Developer",
            company: "Apple Inc.",
            salary: "$80k - $100k",
            deadline: "Sep 30, 2025",
        },
        {
            id: 2,
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            designation: "Backend Engineer",
            company: "Microsoft",
            salary: "$90k - $120k",
            deadline: "Oct 5, 2025",
        },
        {
            id: 3,
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.png",
            designation: "UI/UX Designer",
            company: "Google",
            salary: "$70k - $90k",
            deadline: "Sep 28, 2025",
        },
        {
            id: 4,
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            designation: "Cloud Engineer",
            company: "IBM",
            salary: "$85k - $110k",
            deadline: "Oct 10, 2025",
        },
        {
            id: 5,
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/LinkedIn_logo_initials.png",
            designation: "Marketing Specialist",
            company: "LinkedIn",
            salary: "$60k - $80k",
            deadline: "Sep 25, 2025",
        },
        {
            id: 6,
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Meta_Platforms_Inc._logo.svg",
            designation: "AI Engineer",
            company: "Meta",
            salary: "$100k - $130k",
            deadline: "Oct 15, 2025",
        },
    ];

    return (
        <main className="bg-gray-100">
            <section className="py-16 px-6 max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Latest <span className="text-green-600">Job Openings</span>
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Explore the newest opportunities from top companies around the world.
                    </p>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
                        >
                            {/* Top Section */}
                            <div className="flex items-start justify-between mb-4">
                                <img src={job.logo} alt="logo" className="w-12 h-12 object-contain" />
                                <div className="text-right">
                                    <h3 className="text-lg font-semibold text-gray-800">{job.designation}</h3>
                                    <p className="text-sm text-gray-500">{job.company}</p>
                                </div>
                            </div>

                            {/* Center */}
                            <div className="flex-1 text-center my-4">
                                <p className="text-xl font-bold text-green-600">{job.salary}</p>
                                <p className="text-gray-500 text-sm mt-2">Deadline: {job.deadline}</p>
                            </div>

                            {/* Bottom - Apply Button */}
                            <button className="mt-auto flex items-center justify-center gap-2 border border-green-500 text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer">
                                Apply Now <FaArrowRight />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
