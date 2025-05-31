"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, TrendingUp, Users, Globe, ArrowRight } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, value: "50+", label: "Expert Developers" },
    { icon: Globe, value: "25+", label: "Countries Served" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest reporting throughout every project.",
    },
    {
      icon: Heart,
      title: "Quality",
      description: "We never compromise on quality and always deliver excellence.",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="outline" className="mb-4 border-purple-500 text-purple-400">
              About Suspense IT
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforming Ideas into
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Digital Reality
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Founded in 2020, Suspense IT has been at the forefront of software innovation. We specialize in creating
              custom software solutions that drive business growth and digital transformation. Our team of expert
              developers, designers, and strategists work together to bring your vision to life.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-purple-400 mr-2" />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Our Core Values</h3>
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
