import Image from "next/image";
import { FileSymlink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center">
        <Image
          className="h-auto w-96"
          src="/assets/images/logo wobg.png"
          alt="logo"
          width={500}
          height={200}
          priority
          unoptimized
          draggable={false}
          loading="eager"
          fetchPriority="high"
          style={{ maxWidth: "100%", height: "auto" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
          placeholder="blur"
          blurDataURL="/assets/images/logo wobg.png"
        />
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Suspense <span className="text-[hsl(280,100%,70%)]">IT</span>
        </h1>
        <small>Experience Solutions the Suspense Way</small>
        <Button variant="ghost" className="my-5 cursor-progress">
          <FileSymlink /> Comming soon
        </Button>
      </div>
    </main>
  );
}
