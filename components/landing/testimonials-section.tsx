"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function TestimonialsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const testimonials = [
        {
            quote: "This monitoring solution has completely transformed how we manage our application infrastructure. The real-time alerts have saved us countless hours of downtime.",
            author: "Sarah Johnson",
            role: "CTO at TechCorp",
            avatar: "/placeholder.svg?height=80&width=80",
        },
        {
            quote: "The ease of setup and comprehensive dashboard gives us complete visibility into our application health. It's become an essential tool for our DevOps team.",
            author: "Michael Chen",
            role: "Lead Developer at StartupX",
            avatar: "/placeholder.svg?height=80&width=80",
        },
        {
            quote: "We've reduced our incident response time by 70% since implementing this monitoring solution. The custom alert thresholds are particularly valuable.",
            author: "Alex Rivera",
            role: "SRE Manager at Enterprise Solutions",
            avatar: "/placeholder.svg?height=80&width=80",
        },
    ];

    return (
        <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-background dark:bg-background w-full flex justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground dark:text-foreground">
                        Trusted by <span className="text-primary dark:text-primary">Development</span> Teams
                    </h2>
                    <p className="text-xl text-muted-foreground dark:text-muted-foreground">
                        See what our customers have to say about our monitoring
                        solution
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-lg shadow-sm bg-card dark:bg-secondary/40 backdrop-blur-sm border border-border dark:border-border transition-all duration-700 ease-in-out hover:shadow-md flex flex-col items-center text-center ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex flex-col h-full items-center">
                                <div className="mb-6 flex justify-center">
                                    <svg
                                        className="h-8 w-8 text-primary dark:text-primary opacity-80"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className="text-muted-foreground dark:text-muted-foreground mb-6 flex-grow">
                                    {testimonial.quote}
                                </p>
                                <div className="flex items-center justify-center">
                                    <div className="mr-4">
                                        <Image
                                            src={
                                                testimonial.avatar ||
                                                "/placeholder.svg"
                                            }
                                            alt={testimonial.author}
                                            width={48}
                                            height={48}
                                            className="rounded-full border border-border"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground dark:text-foreground">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
