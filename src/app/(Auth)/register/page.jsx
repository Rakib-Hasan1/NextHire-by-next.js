"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 1500); // simulate register
    };

    const handleGoogleRegister = () => {
        // TODO: integrate NextAuth Google provider
        console.log("Google register clicked");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 px-4">
            <Card className="w-full max-w-md shadow-lg rounded-2xl border border-gray-200">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-800">
                        Create an Account ✨
                    </CardTitle>
                    <p className="text-sm text-gray-500">
                        Join us and start your journey
                    </p>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <Input
                                type="text"
                                placeholder="John Doe"
                                className="border-gray-300 focus-visible:ring-purple-500"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <Input
                                type="email"
                                placeholder="info@example.com"
                                className="border-gray-300 focus-visible:ring-purple-500"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <Input
                                type="password"
                                placeholder="********"
                                className="border-gray-300 focus-visible:ring-purple-500"
                                required
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                            <Input
                                type="password"
                                placeholder="********"
                                className="border-gray-300 focus-visible:ring-purple-500"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                            disabled={loading}
                        >
                            {loading ? "Creating account..." : "Register"}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-200"></div>
                        <span className="px-3 text-sm text-gray-500">or</span>
                        <div className="flex-grow h-px bg-gray-200"></div>
                    </div>

                    {/* Google Register */}
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 rounded-lg"
                        onClick={handleGoogleRegister}
                    >
                        <FcGoogle size={20} /> Sign up with Google
                    </Button>

                    {/* Bottom Link */}
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-purple-600 hover:underline font-medium"
                        >
                            Login
                        </a>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
