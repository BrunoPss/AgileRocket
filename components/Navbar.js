"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo"; // Assuming this component exists in ./Logo.js
import { motion } from "framer-motion";


export function Navbar() { 
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <motion.nav
      className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-lg bg-white/95"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`relative ${
                isActive("/") ? "text-indigo-600" : "text-gray-700"
              } hover:text-indigo-600 transition-colors`}
            >
              Home
              {isActive("/") && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>

            <Link
              href="/about"
              className={`relative ${
                isActive("/about") ? "text-indigo-600" : "text-gray-700"
              } hover:text-indigo-600 transition-colors`}
            >
              About Us
              {isActive("/about") && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>

            {}
            <Link
              href="/agile-coach"
              className={`relative ${
                isActive("/agile-coach") ? "text-indigo-600" : "text-gray-700"
              } hover:text-indigo-600 transition-colors`}
            >
              Agile Coach
              {isActive("/agile-coach") && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>
          
            <Link
              href="/quizz"
              className={`relative ${
                isActive("/quizz") ? "text-indigo-600" : "text-gray-700"
              } hover:text-indigo-600 transition-colors`}
            >
              Quiz
              {isActive("/quizz") && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive("/") ? "bg-indigo-50 text-indigo-600" : "text-gray-700"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive("/about")
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-700"
              }`}
            >
              About Us
            </Link>
            {/* T2.9 TASK: LINK ADDED HERE (Mobile) */}
            <Link
              href="/agile-coach"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive("/agile-coach")
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-700"
              }`}
            >
              Agile Coach
            </Link>

            <Link
              href="/quizz"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive("/quizz")
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-700"
              }`}
            >
              Quiz
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
