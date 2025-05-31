import { Footer } from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import React from "react";

function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="mx-auto mt-7 max-w-6xl">{children}</div>
      <Footer />
    </main>
  );
}

export default RootProvider;
