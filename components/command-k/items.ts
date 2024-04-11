import {
  BugIcon,
  HeartHandshakeIcon,
  HomeIcon,
  MessageCircleIcon,
  MonitorIcon,
  MoonIcon,
  SettingsIcon,
  SproutIcon,
  SunIcon,
  TelescopeIcon,
} from "lucide-react";
import { GithubLogo, XLogo } from "@/components/icons/external";

export const Pages = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Wizard",
    href: "/wizard",
    icon: MessageCircleIcon,
  },
  {
    name: "Settings",
    href: "/wizard/settings",
    icon: SettingsIcon,
  },
];

export const ChangeTheme = [
  {
    name: "Light Theme",
    param: "light",
    icon: SunIcon,
  },
  {
    name: "Dark Theme",
    param: "dark",
    icon: MoonIcon,
  },
  {
    name: "System Theme",
    param: "system",
    icon: MonitorIcon,
  },
];

export const DocumentationPages = [
  {
    name: "Getting Started",
    href: "#",
    icon: SproutIcon,
  },
  {
    name: "Roadmap",
    href: "#",
    icon: TelescopeIcon,
  },
  {
    name: "Contributing",
    href: "#",
    icon: HeartHandshakeIcon,
  },
  {
    name: "Report a Bug",
    href: "#",
    icon: BugIcon,
  },
];

export const SocialPages = [
  {
    name: "X (Formerly Twitter)",
    href: "https://twitter.com/from_enoabasi",
    icon: XLogo,
  },
  {
    name: "GitHub Repository",
    href: "https://github.com/fromenoabasi/chatwizard",
    icon: GithubLogo,
  },
];
