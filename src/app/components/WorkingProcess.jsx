import { FaUserPlus, FaFileAlt, FaSearch, FaPaperPlane } from "react-icons/fa";

export default function WorkingProcess() {
    const steps = [
        {
            id: 1,
            icon: <FaUserPlus />,
            title: "Create Account",
            description: "Sign up quickly with your email or social login to start your journey.",
        },
        {
            id: 2,
            icon: <FaFileAlt />,
            title: "Build Resume",
            description: "Fill in your profile and create a professional resume in minutes.",
        },
        {
            id: 3,
            icon: <FaSearch />,
            title: "Find Jobs",
            description: "Browse thousands of jobs tailored to your skills and interests.",
        },
        {
            id: 4,
            icon: <FaPaperPlane />,
            title: "Apply Jobs",
            description: "Send applications easily and track your job progress in one place.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Follow these simple steps to land your dream job on <span className="text-green-600 font-semibold">NextHire</span>.
                </p>

                {/* Steps with progress bar */}
                <div className="relative mt-12 flex items-center justify-between">
                    {/* Background progress line */}
                    <div className="absolute top-6 left-0 w-full h-1 bg-gray-300"></div>

                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex flex-col items-center text-center w-1/4 px-2">
                            {/* Circle with icon */}
                            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white text-xl shadow-md transition-transform duration-300 hover:scale-110">
                                {step.icon}
                            </div>

                            {/* Title */}
                            <p className="mt-3 font-semibold text-gray-800">{step.title}</p>

                            {/* Short description */}
                            <p className="mt-1 text-gray-500 text-sm">{step.description}</p>

                            {/* Optional progress overlay line */}
                            {index < steps.length - 1 && (
                                <div className="absolute top-6 left-1/2 w-full h-1 bg-green-500 -z-10"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
