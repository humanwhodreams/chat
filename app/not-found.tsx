import { ArrowUpRight, HomeIcon } from "lucide-react";

import ExternaLink from "@/components/ui/external-link";
import { Footer } from "@/components/layouts/footer";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { headers } from "next/headers";

const NotFound = async () => {
  const header = headers();
  const domain = header.get("host");
  return (
    <>
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-mono text-6xl font-bold tracking-tight lg:text-7xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Page not found
          </p>
          <p className="mb-4 font-mono text-sm font-light text-muted-foreground">
            {`The page you're looking for doesn't exist on ${domain}.`}
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Link className={buttonVariants({ variant: "outline" })} href="/">
              <HomeIcon size={18} className="mr-2"/>
              <span>Go back home</span>
            </Link>
            <ExternaLink
              className={buttonVariants({ variant: "outline" })}
              href="#"
            >
              <span>Create issue</span>
              <ArrowUpRight size={18} className="ml-2"/>
            </ExternaLink>
          </div>
        </div>
      </div>
      <Footer className="fixed bottom-0 py-4 mt-4" />
    </>
  );
};

export default NotFound;
