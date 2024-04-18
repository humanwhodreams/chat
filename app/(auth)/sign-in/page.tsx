import { ArrowLeftCircle, Eye } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Github } from "@/components/icons/github";
import { Google } from "@/components/icons/google";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignIn() {
  return (
    <Card className="max-w-3xl mx-auto border-none shadow-none">
      <CardHeader>
        <CardTitle className="flex flex-col text-2xl text-center sm:flex-none">
          <Link
            href={"/"}
            className="inline-flex items-center justify-center px-4 py-2 mr-4 text-sm transition-colors rounded-md text-muted-foreground hover:bg-muted"
          >
            <ArrowLeftCircle className="flex-shrink-0 mr-2 size-4" />
            home
          </Link>
          Sign In to Account
        </CardTitle>
        <CardDescription>
          Welcome. Enter your credentials to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button variant="outline" className="w-full">
            Continue with
            <Google className="mx-2 size-4" />
            Google
          </Button>
          <Button variant="outline" className="w-full">
            Continue with
            <Github className="mx-2 size-4" />
            GitHub
          </Button>

          <div className="flex items-center py-3 text-xs uppercase text-muted-foreground before:flex-1 before:border-t before:border-border before:me-6 after:flex-1 after:border-t after:border-border after:ms-6">
            Or
          </div>

          <div className="grid gap-2">
            <Label htmlFor="identifier">Email address or username</Label>
            <Input
              id="identifier"
              type="text"
              placeholder="Enter email address or username..."
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="inline-block ml-auto text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="flex rounded-lg shadow-sm bg-secondary">
              <Input
                id="password"
                type="password"
                className="w-full px-4 py-3 rounded-r-none shadow-none rounded-s-lg bg-background focus:z-10"
                placeholder="Enter password..."
              />
              <Button
                type="button"
                variant={"outline"}
                size={"icon"}
                className="w-[2.875rem] h-9 rounded-e-md border-l-0 rounded-l-none"
              >
                {/* <EyeOff className="flex-shrink-0 text-muted-foreground size-5" /> */}
                <Eye className="flex-shrink-0 text-muted-foreground size-5" />
                <span className="sr-only">toggle password</span>
              </Button>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </div>
        <div className="mt-4 text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
