"use client";

import { ArrowRightCircle, PlusCircle, UserRoundPlus } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Avatar from "boring-avatars";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site-config";

const AddNewUser = () => {
  const isFound = true;
  const isEmpty = true;
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"ghost"} size={"icon"} title="Add new friend">
            <UserRoundPlus className="flex-shrink-0 size-5" />
            <span className="sr-only">Add new friend</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Friend</DialogTitle>
            <DialogDescription>
              Search for a friend by email address or username.
            </DialogDescription>
          </DialogHeader>

          <div>
            <form action="#" className="grid grid-cols-1 ">
              <div className="grid gap-y-2">
                <Label htmlFor="search">Email address or username</Label>
                <div className="grid grid-cols-6 gap-x-2">
                  <Input
                    id="search"
                    type="text"
                    className="col-span-5"
                    placeholder="Enter email address or username..."
                  />
                  <Button type="submit" className="col-span-1 h-9">
                    Search
                  </Button>
                </div>
              </div>
            </form>
            {isEmpty ? (
              isFound ? (
                <div className="w-full mt-4 space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Result found
                  </p>
                  <div className="flex items-center justify-between w-full px-3 py-2 border rounded-md bg-muted">
                    <div className="flex items-center space-x-2">
                      <Avatar
                        size={20}
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
                      <p className="font-medium">Johnthemeta</p>
                      <p className="text-xs text-muted-foreground">
                        @meta_plug_john
                      </p>
                    </div>
                    <Button variant={"default"} size={"sm"}>
                      <PlusCircle className="mr-2 size-4" />
                      Add friend
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="p-2 mt-4 text-sm font-medium text-center border rounded-md bg-secondary text-secondary-foreground">
                    Result not found
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h2 className="text-sm font-medium text-muted-foreground">
                      Suggestions
                    </h2>
                    <ul>
                      <li>
                        <Button
                          variant={"ghost"}
                          size={"sm"}
                          className="justify-between w-full group"
                        >
                          Invite friend to {siteConfig.name}✨
                          <ArrowRightCircle className="transition-transform duration-150 scale-0 size-4 group-hover:scale-100 text-muted-foreground" />
                        </Button>
                      </li>
                      <li>
                        <Button
                          variant={"ghost"}
                          size={"sm"}
                          className="justify-between w-full group"
                        >
                          Create a new chat
                          <ArrowRightCircle className="transition-transform duration-150 scale-0 size-4 group-hover:scale-100 text-muted-foreground" />
                        </Button>
                      </li>
                      <li>
                        <Button
                          variant={"ghost"}
                          size={"sm"}
                          className="justify-between w-full group"
                        >
                          Sign up for {siteConfig.name}&apos;s newsletter
                          <ArrowRightCircle className="transition-transform duration-150 scale-0 size-4 group-hover:scale-100 text-muted-foreground" />
                        </Button>
                      </li>
                    </ul>
                  </div>
                </>
              )
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewUser;
