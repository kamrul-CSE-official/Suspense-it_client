import { Footer } from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import React from "react";

function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-14">{children}</div>
      <Footer />
    </main>
  );
}

export default RootProvider;
