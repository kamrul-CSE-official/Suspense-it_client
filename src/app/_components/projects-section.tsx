"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced analytics and inventory management.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      category: "Web Application",
      status: "Completed",
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient management and telemedicine.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      category: "Mobile App",
      status: "In Progress",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard with advanced reporting capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Python", "FastAPI", "Redis"],
      category: "Dashboard",
      status: "Completed",
    },
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent customer service chatbot with natural language processing.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      category: "AI/ML",
      status: "Completed",
    },
    {
      title: "IoT Monitoring System",
      description: "Real-time IoT device monitoring and control system for smart buildings.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Angular", "Node.js", "InfluxDB", "MQTT"],
      category: "IoT",
      status: "In Progress",
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Web3.js", "Solidity", "IPFS"],
      category: "Blockchain",
      status: "Completed",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-purple-500 text-purple-400">
            Our Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of our recent projects that showcase our expertise and innovation in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className={`${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-slate-900/80">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-0">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-0">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
