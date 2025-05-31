"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-pink-600/20 blur-3xl delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-blue-600/10 blur-3xl delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6 flex items-center justify-center space-x-2">
              <div className="flex items-center space-x-1 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-700/20 to-pink-700/20 px-4 py-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-black dark:text-gray-200">
                  Trusted by 500+ companies
                </span>
              </div>
            </div>

            <h1 className="mb-6 text-5xl leading-tight font-bold text-black md:text-7xl dark:text-white">
              Building the{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Software
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-black md:text-2xl dark:text-gray-200">
              We create cutting-edge software solutions that transform
              businesses and drive innovation. From web applications to mobile
              apps, we bring your vision to life.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg text-white hover:from-purple-700 hover:to-pink-700"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 px-8 py-4 text-lg text-purple-400 hover:bg-purple-500/10"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center">
                  <Users className="mr-2 h-6 w-6 text-purple-400" />
                  <span className="text-3xl font-bold text-black dark:text-white">
                    500+
                  </span>
                </div>
                <p className="text-black dark:text-gray-300">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center">
                  <Award className="mr-2 h-6 w-6 text-black dark:text-purple-400" />
                  <span className="text-3xl font-bold text-black dark:text-white">
                    1000+
                  </span>
                </div>
                <p className="text-black dark:text-gray-300">
                  Projects Completed
                </p>
              </div>
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center">
                  <Zap className="mr-2 h-6 w-6 text-black dark:text-purple-400" />
                  <span className="text-3xl font-bold text-black dark:text-white">
                    99%
                  </span>
                </div>
                <p className="text-black dark:text-gray-300">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-purple-400">
          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-purple-400"></div>
        </div>
      </div>
    </section>
  );
}
