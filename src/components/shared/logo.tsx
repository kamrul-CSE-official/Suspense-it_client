import { Code, Zap } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Code className="h-8 w-8 text-purple-400" />
        <Zap className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400" />
      </div>
      <span className="text-xl font-bold text-black dark:text-white">
        Suspense <span className="text-purple-400">IT</span>
      </span>
    </div>
  );
}

export default Logo;
