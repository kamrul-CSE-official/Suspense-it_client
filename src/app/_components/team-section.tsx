"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      name: "Kamrul Hassan",
      role: "CEO & Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer with 8+ years of experience in building scalable web applications.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Johnson",
      role: "CTO & System Architect",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in system design and cloud architecture with a passion for scalable solutions.",
      skills: ["System Design", "Kubernetes", "Microservices", "DevOps"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Lead Mobile Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Mobile development specialist with expertise in React Native and Flutter.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Creative designer focused on user-centered design and modern interfaces.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Infrastructure and automation expert ensuring reliable and scalable deployments.",
      skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Lisa Wang",
      role: "Data Scientist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "AI/ML specialist developing intelligent solutions for complex business problems.",
      skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-purple-500 text-purple-400">
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet the Experts</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team of talented professionals brings together years of experience and expertise to deliver
            exceptional software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300"></div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
