import { Button, buttonVariants } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import ExternalLink from "@/components/ui/external-link";
import { GithubLogo } from "@/components/icons/external";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "../theme-toggle";
import { cn } from "@/lib/utils";

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
              {/* TODO Add software logo here */}
              {/* <Logo width={30} /> */}
              <span className="self-center text-lg font-medium tracking-tight whitespace-nowrap dark:text-white">
                Chwizard
              </span>
              <Badge className="hidden cursor-pointer md:block">beta</Badge>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant={"ghost"} size={"sm"} asChild>
            <Link href={"#"}>❔Contribute</Link>
          </Button>
          <Button variant={"ghost"} size={"sm"} asChild>
            <Link href={"#"}>🗺️Roadmap</Link>
          </Button>
          <ExternalLink
            href="https://github.com/fromenoabasi/chatwizard"
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <GithubLogo width={20} name="GitHub Repository" />
          </ExternalLink>
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
