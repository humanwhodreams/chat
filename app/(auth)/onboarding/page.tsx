"use client";

import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Avatar from "boring-avatars";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface AvatarFromDevice {
  file: {};
  url: string;
}

const OnBoarding = () => {
  const [avatar, setAvatar] = React.useState<AvatarFromDevice>({
    file: {},
    url: "",
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files === null) return;

    setAvatar({
      file: {
        name: e.target.files[0],
      },
      url: URL.createObjectURL(e.target.files[0]),
    });
  }

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Onboarding to Account</CardTitle>
        <CardDescription>
          Welcome. Fill up information for people to get to know you better.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="#" className="grid w-full grid-cols-1 gap-4">
          <div className="grid gap-2">
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              {avatar.url ? (
                <img
                  src={avatar.url}
                  alt="user profile picture"
                  width={80}
                  height={80}
                  className="object-cover border rounded-full size-[80px] aspect-square"
                />
              ) : (
                <Avatar
                  size={80}
                  name="metatheplugjohn"
                  variant="beam"
                  colors={[
                    "#92A1C6",
                    "#146A7C",
                    "#F0AB3D",
                    "#C271B4",
                    "#C20D90",
                  ]}
                />
              )}
              <Label
                htmlFor="file"
                className="flex items-center gap-2 cursor-pointer"
              >
                {avatar.url ? (
                  <span
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "sm" })
                    )}
                  >
                    Change profile picture
                  </span>
                ) : (
                  <span
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "sm", })
                    )}
                  >
                    Upload profile picture (optional) or use default
                    <a
                      href="https://boringavatars.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="ml-2 transition-colors size-4 text-muted-foreground hover:text-blue-500" />
                    </a>
                  </span>
                )}
              </Label>
              {avatar.url ? (
                <Button
                  variant={"outline"}
                  size={"sm"}
                  onClick={() =>
                    setAvatar({
                      file: {},
                      url: "",
                    })
                  }
                >
                  <Trash2 className="mr-2 size-4 text-muted-foreground" />
                  Remove profile picture
                </Button>
              ) : null}
            </div>

            <Input
              id="file"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => handleOnChange(e)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select defaultValue="online">
              <SelectTrigger id="status">
                <SelectValue placeholder="Selec status..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">
                  <span className="inline-block bg-green-500 rounded-full size-2 me-2"></span>
                  Online
                </SelectItem>
                <SelectItem value="offline">
                  <span className="inline-block bg-gray-800 rounded-full size-2 me-2 dark:bg-white"></span>
                  Offline
                </SelectItem>
                <SelectItem value="avaliable">
                  <span className="inline-block bg-teal-500 rounded-full size-2 me-2"></span>
                  Avaliable
                </SelectItem>
                <SelectItem value="busy">
                  <span className="inline-block bg-red-500 rounded-full size-2 me-2"></span>
                  Busy
                </SelectItem>
                <SelectItem value="sleeping">
                  <span className="inline-block bg-blue-600 rounded-full size-2 me-2 dark:bg-blue-500"></span>
                  Sleeping
                </SelectItem>
                <SelectItem value="relaxing">
                  <span className="inline-block bg-gray-500 rounded-full size-2 me-2"></span>
                  Relaxing
                </SelectItem>
                <SelectItem value="eating">
                  <span className="inline-block bg-indigo-500 rounded-full size-2 me-2"></span>
                  Eating
                </SelectItem>
                <SelectItem value="playing">
                  <span className="inline-block bg-yellow-300 rounded-full size-2 me-2"></span>
                  Playing
                </SelectItem>
                <SelectItem value="working">
                  <span className="inline-block bg-purple-500 rounded-full size-2 me-2"></span>
                  Working
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="bio">Bio (optional)</Label>
            <Textarea id="bio" placeholder="Enter bio..." />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="username">
              Username{" "}
              <span className="text-xs text-muted-foreground">
                &mdash; Can be changed after 14 days
              </span>
            </Label>
            <Input
              id="username"
              type="text"
              value={"@meta_the_plug_john"}
              aria-disabled={true}
              disabled
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="display-name">
              Display name{" "}
              <span className="text-xs text-muted-foreground">
                &mdash; Display name can be changed later
              </span>
            </Label>
            <Input
              id="display-name"
              type="text"
              value={"metatheplugjohn✨"}
              aria-disabled={true}
              disabled
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">
              Email address{" "}
              <span className="text-xs text-muted-foreground">
                &mdash; Used as primary email address
              </span>
            </Label>
            <Input
              id="email"
              type="email"
              value={"johndoe@gmail.com"}
              aria-disabled={true}
              disabled
            />
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <Button
              type="button"
              variant={"outline"}
              className="order-2 w-full col-span-1 md:col-span-1 md:order-1"
            >
              Skip
            </Button>
            <Button type="submit" className="order-1 w-full col-span-1 md:col-span-2 md:order-2">
              Save changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default OnBoarding;
