"use client";

import { ChangeTheme, DocumentationPages, Pages, SocialPages } from "./items";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const CommandK = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleRoutePush = async (href: string) => {
    router.push(href);
    setOpen(false);
  };

  const handleExternalRoute = (href: string) => {
    window.open(href, "_blank");
    setOpen(false);
  };

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
    setOpen(false);
  };

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        <SearchIcon size={20} strokeWidth={1.5} />
        <span className="sr-only">Open Command Search Dialog</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup heading="General">
            {Pages.map((page) => (
              <CommandItem
                key={page.href}
                className="space-x-4"
                onSelect={() => handleRoutePush(page.href)}
              >
                <page.icon size={22} strokeWidth={1.5} />
                <span>{page.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Theme">
            {ChangeTheme.map((theme) => (
              <CommandItem
                key={theme.param}
                value={`Change Theme: ${theme.name}`}
                className="space-x-4"
                onSelect={() => handleChangeTheme(theme.param)}
              >
                <theme.icon size={22} strokeWidth={1.5} />
                <span>{theme.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Contribute">
            {DocumentationPages.map((doc, i) => (
              <CommandItem
                key={i}
                value={`Contribute: ${doc.name}`}
                className="space-x-4"
                onSelect={() => handleExternalRoute(doc.href)}
              >
                <doc.icon size={22} strokeWidth={1.5} />
                <span>{doc.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Social">
            {SocialPages.map((page) => (
              <CommandItem
                key={page.href}
                className="space-x-4"
                onSelect={() => handleExternalRoute(page.href)}
              >
                <page.icon width={14} />
                <span>{page.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandK;
