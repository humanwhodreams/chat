import { TypographyH1, TypographyP } from "@/components/ui/typography";

import ExternalLink from "@/components/ui/external-link";
import { Footer } from "@/components/layouts/footer";
import { GithubLogo } from "@/components/icons/external";
import Link from "next/link";
import { Send } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <section
        id="hero"
        className="flex flex-col items-center px-6 pt-16 text-center md:pt-24 lg:pt-32"
      >
        <TypographyH1 className="max-w-[75ch] duration-500 animate-in fade-in-5 slide-in-from-bottom-2 text-balance">
          Message with ease, super fast
        </TypographyH1>
        <TypographyP className="max-w-[75ch] text-sm duration-700 animate-in fade-in-5 slide-in-from-top-2 md:text-base [&:not(:first-child)]:mt-6 text-balance">
          Chwizard is an open-source platform that allows you to send messages
          anywhere, anytime to any place with ease. It's fast, secure, and easy
          to use.
        </TypographyP>
        <div className="items-center justify-center mt-8 space-y-3 duration-700 gap-x-3 animate-in fade-in-30 sm:flex sm:space-y-0">
          <Link
            href="/wizard"
            className={buttonVariants({
              variant: "default",
              className: "group",
              size: "lg",
            })}
          >
            <Send
              size={18}
              className="duration-300 group-hover:rotate-[14deg]"
            />
            <span className="ml-2">Start Messaging</span>
          </Link>
          <ExternalLink
            href="https://github.com/fromenoabasi/chatwizard"
            className={buttonVariants({
              variant: "expandIcon",
              size: "lg",
              className: "group",
            })}
          >
            <GithubLogo
              height={18}
              className="duration-300
                 group-hover:-rotate-[10deg]"
            />
            <span className="ml-2">Star on GitHub</span>
          </ExternalLink>
        </div>
      </section>
      <Footer className="fixed bottom-0 py-4 mt-4" />
    </main>
  );
}
