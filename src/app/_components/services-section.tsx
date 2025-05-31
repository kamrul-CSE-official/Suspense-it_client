"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Cloud, Database, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud.",
      features: ["Auto Scaling", "High Availability", "Cost Optimization", "Security First"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust backend systems with APIs, databases, and microservices architecture.",
      features: ["RESTful APIs", "GraphQL", "Microservices", "Database Design"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your applications and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Monitoring"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description: "Streamlined development workflows with CI/CD, automation, and monitoring.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Automation"],
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-purple-500 text-purple-400">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Software Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer end-to-end software development services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-purple-400 hover:text-purple-300 cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
