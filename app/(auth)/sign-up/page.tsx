"use client";

import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";

export default function SignUp() {
  const [isHidden, setIsHidden] = React.useState(true);
  return (
    <Card className="max-w-3xl mx-auto border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-xl">Create an Account</CardTitle>
        <CardDescription>
          Welcome. Enter your credentials to create an account with{" "}
          {siteConfig.name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="display-name">Display name</Label>
            <Input
              id="display-name"
              type="text"
              placeholder="Enter display name..."
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter username..."
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address..."
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="flex rounded-lg shadow-sm bg-secondary">
              <Input
                id="password"
                type={isHidden ? "password" : "text"}
                className="w-full px-4 py-3 rounded-r-none shadow-none rounded-s-lg bg-background focus:z-10"
                placeholder="Enter password..."
              />
              <Button
                type="button"
                variant={"outline"}
                size={"icon"}
                className="w-[2.875rem] h-9 rounded-e-md border-l-0 rounded-l-none"
                onClick={() => setIsHidden((prev) => !prev)}
              >
                {isHidden ? (
                  <Eye className="flex-shrink-0 text-muted-foreground size-5" />
                ) : (
                  <EyeOff className="flex-shrink-0 text-muted-foreground size-5" />
                )}
                <span className="sr-only">toggle password</span>
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <div className="flex rounded-lg shadow-sm bg-secondary">
              <Input
                id="confirm-password"
                type={isHidden ? "password" : "text"}
                className="w-full px-4 py-3 rounded-r-none shadow-none rounded-s-lg bg-background focus:z-10"
                placeholder="Enter confirm password..."
              />
              <Button
                type="button"
                variant={"outline"}
                size={"icon"}
                onClick={() => setIsHidden((prev) => !prev)}
                className="w-[2.875rem] h-9 rounded-e-md border-l-0 rounded-l-none"
              >
                {isHidden ? (
                  <Eye className="flex-shrink-0 text-muted-foreground size-5" />
                ) : (
                  <EyeOff className="flex-shrink-0 text-muted-foreground size-5" />
                )}
                <span className="sr-only">toggle password</span>
              </Button>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
        </div>
        <div className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
