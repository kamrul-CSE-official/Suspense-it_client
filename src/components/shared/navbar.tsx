"use client";

import type { FC } from "react";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import ThemeToggleBtn from "./themeToggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: { title: string; url: string };
    signup: { title: string; url: string };
  };
}

const defaultMenu: MenuItem[] = [
  { title: "Home", url: "#" },
  {
    title: "Products",
    url: "#",
    items: [
      {
        title: "Blog",
        description: "The latest industry news, updates, and info",
        icon: <Book className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Company",
        description: "Our mission is to innovate and empower the world",
        icon: <Trees className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Careers",
        description: "Browse job listings and discover our workspace",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Support",
        description: "Contact support or visit our community forums",
        icon: <Zap className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    url: "#",
    items: [
      {
        title: "Help Center",
        description: "Get all the answers you need",
        icon: <Zap className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Contact Us",
        description: "We're here to help",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Status",
        description: "Service and API status",
        icon: <Trees className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Terms of Service",
        description: "Terms and conditions",
        icon: <Book className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  { title: "Pricing", url: "#" },
  { title: "Blog", url: "#" },
];

const Navbar: FC<NavbarProps> = ({
  logo = {
    url: "/",
    src: "/assets/images/logo wobg.png",
    alt: "logo",
    title: "Suspense IT",
  },
  menu = defaultMenu,
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
}) => {
  return (
    <header className="bg-background fixed top-0 left-0 z-50 w-full px-4 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <Link href={logo.url}>
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="ml-8 hidden w-full max-w-4xl items-center justify-between lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-popover text-popover-foreground">
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={subItem.url}
                                  className="hover:bg-muted flex items-start gap-4 rounded-md p-2 transition"
                                >
                                  <div>{subItem.icon}</div>
                                  <div>
                                    <p className="text-sm font-medium">
                                      {subItem.title}
                                    </p>
                                    {subItem.description && (
                                      <p className="text-muted-foreground text-sm">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={item.url}
                      className="hover:bg-muted rounded-md px-4 py-2 text-sm font-medium transition"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <ThemeToggleBtn />
          </NavigationMenu>

          {/* Auth */}
          <div className="ml-8 flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={auth.signup.url}>{auth.signup.title}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href={logo.url} className="flex items-center gap-2">
                    <Logo />
                    <span className="text-lg font-semibold">{logo.title}</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mx-4 mt-4 space-y-6">
                <Accordion type="single" collapsible>
                  {menu.map((item) =>
                    item.items ? (
                      <AccordionItem key={item.title} value={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent className="pl-4">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.url}
                              className="text-muted-foreground hover:text-primary block py-2 text-sm"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        key={item.title}
                        href={item.url}
                        className="block py-2 text-sm font-medium"
                      >
                        {item.title}
                      </Link>
                    ),
                  )}
                  <ThemeToggleBtn />
                </Accordion>

                <div className="flex flex-col gap-3">
                  <Button asChild variant="outline">
                    <Link href={auth.login.url}>{auth.login.title}</Link>
                  </Button>
                  <Button asChild>
                    <Link href={auth.signup.url}>{auth.signup.title}</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
