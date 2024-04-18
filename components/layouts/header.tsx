import { Button, buttonVariants } from "@/components/ui/button";

import ExternaLink from "@/components/ui/external-link";
import { Github } from "../icons/github";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "../theme-toggle";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site-config";

const Header = () => {
  return (
    <nav
      className={cn(
        "flex w-full bg-background pb-3 pt-4 lg:px-4 sticky top-0 z-50 border-b border-border"
      )}
    >
      <div
        className={cn("flex w-full items-center justify-between", "container")}
      >
        <div className="flex items-center space-x-5">
          <div className="flex items-center pr-1 space-x-1 md:pr-4">
            <Link
              href="/"
              className="flex items-center space-x-3 transition-opacity hover:opacity-80 rtl:space-x-reverse"
            >
              <span className="self-center text-lg font-semibold tracking-tight whitespace-nowrap">
                {siteConfig.name}
              </span>
            </Link>
          </div>
        </div>
        <div className="items-center hidden space-x-2 sm:flex">
          <Button variant={"ghost"} size={"sm"} asChild>
            <Link href={"#"}>❔Contribute</Link>
          </Button>
          <Button variant={"ghost"} size={"sm"} asChild>
            <Link href={"#"}>🗺️Roadmap</Link>
          </Button>
          <ExternaLink
            href="https://github.com/fromenoabasi/chatwizard"
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Github width={20} name="GitHub Repository" />
          </ExternaLink>
          <Separator orientation="vertical" className="h-6" />
          <ThemeToggle />
          <Button variant="secondary" asChild>
            <Link href={"/sign-in"}>Sign in</Link>
          </Button>
          <Button>
            <Link href={"/sign-up"}>Sign up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export { Header };
