"use client"

import { useRef, useEffect, useState } from "react"
import { Activity, Bell, Clock, Globe, Shield, Zap } from 'lucide-react'

export function FeaturesSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    const features = [
        {
            icon: <Globe className="h-10 w-10" />,
            title: "Global Monitoring",
            description: "Monitor your endpoints from multiple regions around the world for comprehensive coverage.",
        },
        {
            icon: <Bell className="h-10 w-10" />,
            title: "Instant Alerts",
            description: "Receive immediate notifications when your endpoints experience downtime or performance issues.",
        },
        {
            icon: <Activity className="h-10 w-10" />,
            title: "Performance Metrics",
            description: "Track response times, availability, and other critical metrics to ensure optimal performance.",
        },
        {
            icon: <Clock className="h-10 w-10" />,
            title: "Scheduled Checks",
            description: "Set custom schedules for monitoring your endpoints based on your specific requirements.",
        },
        {
            icon: <Shield className="h-10 w-10" />,
            title: "Security Verification",
            description: "Verify SSL certificates and security headers to maintain a secure environment.",
        },
        {
            icon: <Zap className="h-10 w-10" />,
            title: "Fast Integration",
            description: "Quickly integrate with your existing infrastructure using our simple API and documentation.",
        },
    ]

    return (
        <section id="features" ref={sectionRef} className="relative bg-muted/30 py-24 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                        Powerful Features for Reliable Monitoring
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to ensure your applications are running smoothly
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-card p-8 rounded-lg shadow-sm transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="text-foreground mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
