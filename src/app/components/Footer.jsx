import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t pt-10">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Left Section */}
                <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()} JobPortal. All rights reserved.
                </p>

                {/* Middle Links */}
                <div className="flex gap-6 text-sm text-gray-600">
                    <Link href="/about" className="hover:text-gray-900 transition">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-gray-900 transition">
                        Contact
                    </Link>
                    <Link href="/privacy" className="hover:text-gray-900 transition">
                        Privacy Policy
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <Link href="https://facebook.com" target="_blank">
                        <Facebook className="h-5 w-5 text-gray-500 hover:text-gray-900 transition" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank">
                        <Twitter className="h-5 w-5 text-gray-500 hover:text-gray-900 transition" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                        <Linkedin className="h-5 w-5 text-gray-500 hover:text-gray-900 transition" />
                    </Link>
                    <Link href="https://github.com" target="_blank">
                        <Github className="h-5 w-5 text-gray-500 hover:text-gray-900 transition" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

