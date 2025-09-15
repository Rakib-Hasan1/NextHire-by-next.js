"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react"

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn();
        setLoading(true);
        setTimeout(() => setLoading(false), 1500); // simulate loading
    };

    const handleGoogleLogin = () => {
        
        // TODO: integrate NextAuth Google provider
        console.log("Google login clicked");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <Card className="w-full max-w-md shadow-lg rounded-2xl border border-gray-200">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-800">
                        Welcome Back!
                    </CardTitle>
                    <p className="text-sm text-gray-500">
                        Please login to continue
                    </p>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">
                                Email *
                            </label>
                            <Input
                                type="email"
                                placeholder="info@example.com"
                                className="border-gray-300 focus-visible:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">
                                Password *
                            </label>
                            <Input
                                type="password"
                                placeholder="********"
                                className="border-gray-300 focus-visible:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-200"></div>
                        <span className="px-3 text-sm text-gray-500">or</span>
                        <div className="flex-grow h-px bg-gray-200"></div>
                    </div>

                    {/* Google Login */}
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 rounded-lg"
                        onClick={handleGoogleLogin}
                    >
                        <FcGoogle size={20} /> Continue with Google
                    </Button>

                    {/* Bottom Link */}
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don’t have an account?{" "}
                        <a
                            href="/register"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Register
                        </a>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
