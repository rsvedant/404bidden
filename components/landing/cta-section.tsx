"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CtaSection() {
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

    return (
        <section id="contact" ref={sectionRef} className="bg-gradient-to-b from-secondary/70 to-primary/10 dark:from-secondary/20 dark:to-primary/5 py-24 md:py-32 w-full flex justify-center">
            <div className="container mx-auto px-4 flex justify-center">
                <div
                    className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground dark:text-foreground">
                        Ready to Start <span className="text-primary dark:text-primary">Monitoring</span> Your Applications?
                    </h2>
                    <p className="text-xl text-muted-foreground dark:text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join thousands of developers who trust our platform for reliable application monitoring.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto group bg-primary hover:bg-primary/90 text-primary-foreground">
                            Get Started Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 hover:text-primary">
                            Schedule a Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
