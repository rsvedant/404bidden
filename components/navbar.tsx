"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "border-b shadow-sm backdrop-blur-md" : ""
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
                <Link href="/" className="text-xl font-bold">
                    Minimal<span className="text-primary">Project</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:gap-6">
                    <Link href="#features" className="text-sm hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#testimonials" className="text-sm hover:text-primary transition-colors">
                        Testimonials
                    </Link>
                    <Link href="#pricing" className="text-sm hover:text-primary transition-colors">
                        Pricing
                    </Link>
                    <Link href="#contact" className="text-sm hover:text-primary transition-colors">
                        Contact
                    </Link>

                    <Button
                        suppressHydrationWarning
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>

                    <Button>Get Started</Button>
                </div>

                {/* Mobile Navigation Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>

                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden border-t"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="container flex flex-col space-y-4 py-4 px-4">
                        <Link
                            href="#features"
                            className="py-2 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#testimonials"
                            className="py-2 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="#pricing"
                            className="py-2 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#contact"
                            className="py-2 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Button className="w-full">Get Started</Button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}
