"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // from shadcn (lucide icons)
import { Button } from "@/components/ui/button"; // shadcn button
// import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    // const { data: session } = useSession();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Jobs", href: "/jobs" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    NextHire
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Auth Button */}
                <div className="hidden md:block">
                    
                        <Button
                            variant="outline"
                            className="rounded-full"
                            onClick={() => signOut()}
                        >
                            Logout
                        </Button>
                    
                        <Link href="/login">
                            <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                                Login
                            </Button>
                        </Link>
                    
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t shadow-md"
                    >
                        <div className="flex flex-col space-y-4 p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => {
                                        setMobileOpen(false);
                                        signOut();
                                    }}
                                >
                                    Logout
                                </Button>
                            
                                <Link href="/login" onClick={() => setMobileOpen(false)}>
                                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                                        Login
                                    </Button>
                                </Link>
                            
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
