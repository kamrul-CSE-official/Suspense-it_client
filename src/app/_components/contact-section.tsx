"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, ArrowRight } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "hello@suspenseit.com",
      action: "mailto:hello@suspenseit.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "123 Tech Street, Silicon Valley, CA 94000",
      action: "#",
    },
  ]

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-purple-500 text-purple-400"
          >
            Get In Touch
          </Badge>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Start Your Project
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Ready to transform your ideas into reality? Contact us today and
            let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="group border-slate-700 bg-slate-800/50 transition-all duration-300 hover:border-purple-500/50"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-110">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {info.title}
                </h3>
                <p className="mb-3 text-sm text-gray-400">{info.description}</p>
                <p className="font-medium text-purple-400">{info.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-slate-700 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-white">
                <MessageSquare className="mr-2 h-6 w-6 text-purple-400" />
                Send us a message
              </CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-white">
                  Company
                </Label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="border-slate-600 bg-slate-700 text-white placeholder:text-gray-400"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-8">
            <Card className="border-slate-700 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-white">
                  <Clock className="mr-2 h-5 w-5 text-purple-400" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-white">
                  <Calendar className="mr-2 h-5 w-5 text-purple-400" />
                  Schedule a Meeting
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Book a free consultation to discuss your project requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10"
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-500/30 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-bold text-white">
                  Ready to get started?
                </h3>
                <p className="mb-4 text-gray-300">
                  Join 500+ companies that trust us with their software
                  development needs.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
