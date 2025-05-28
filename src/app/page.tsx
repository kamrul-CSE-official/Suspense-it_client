import Image from "next/image";
import { FileSymlink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sint,
        aut nobis hic voluptates esse dolores dicta nisi harum velit repellat
        ipsa. Incidunt assumenda velit quasi similique magni error dicta. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sed optio debitis
        atque alias in nostrum minima cum libero vitae, laboriosam facere
        perspiciatis veniam ipsum! Exercitationem similique odio voluptate
        laboriosam sit. Recusandae perspiciatis dolorem cupiditate non facilis
        obcaecati suscipit eaque numquam facere totam dolore ducimus vero qui
        officiis inventore odit saepe impedit deleniti, unde beatae fugit.
        Voluptatem, dicta nobis quaerat consequuntur totam magnam tempora iusto
        sed. Unde expedita quas quam ipsum eius dolorem alias quibusdam
        doloribus architecto sunt. Impedit, temporibus tempora? Soluta
        asperiores quo error, iure dolores corrupti rerum dolorum! Distinctio
        dolorem maiores error quam enim nihil explicabo impedit, tempora vel est
        natus, eveniet molestiae ex hic accusantium nisi nobis ab doloribus
        exercitationem iure numquam eum? Aperiam, cupiditate eaque! Fugit minima
        sapiente veniam similique quos assumenda harum vel, incidunt error
        voluptates dolore culpa nam quam veritatis quasi exercitationem
        perferendis soluta nihil reiciendis rem. Necessitatibus asperiores natus
        officia eos ipsa mollitia excepturi recusandae, amet, sint iure labore
        nulla! Illo obcaecati voluptatem velit, optio, officia minus quos totam
        neque ratione laudantium corporis itaque dicta repellat non laboriosam
        perspiciatis assumenda. Repellendus excepturi nam error, enim, tenetur
        voluptatibus at et neque pariatur quidem officiis dolorem dolorum esse
        non impedit laudantium accusantium cum. Quos, officiis iste.
      </p>
    </main>
  );
}
