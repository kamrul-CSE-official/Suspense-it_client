import Image from "next/image";
import { FileSymlink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "./_components/hero-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <div className="flex flex-col items-center justify-center text-center">
        <Image
          src="/assets/images/logo wobg.png"
          alt="Suspense IT Logo"
          width={500}
          height={200}
          priority
          quality={100}
          className="h-auto w-96 max-w-full"
          draggable={false}
          placeholder="blur"
          blurDataURL="/assets/images/logo wobg.png"
        />

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Suspense <span className="text-primary">IT</span>
        </h1>

        <p className="text-primary mt-2 mb-4 text-sm sm:text-base">
          Experience Solutions the Suspense Way
        </p>

        <Button variant="ghost" className="my-4 cursor-progress">
          <FileSymlink className="mr-2" aria-hidden="true" />
          Coming soon
        </Button>
      </div>
     
    </main>
  );
}
