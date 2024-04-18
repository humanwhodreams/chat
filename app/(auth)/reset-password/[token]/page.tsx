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

const ResetPassword = ({ params }: { params: { token: string } }) => {
  return (
    <Card className="max-w-3xl mx-auto border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-xl">
          Reset your password &mdash; {params.token}
        </CardTitle>
        <CardDescription>
          Enter your new password, protect against trouble makers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
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
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <div className="flex rounded-lg shadow-sm bg-secondary">
              <Input
                id="confirm-password"
                type="password"
                className="w-full px-4 py-3 rounded-r-none shadow-none rounded-s-lg bg-background focus:z-10"
                placeholder="Enter confirm password..."
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
            Reset password
          </Button>
        </div>
        <div className="mt-4 text-sm text-center">
          Remembered password?{" "}
          <Link href="/sign-in" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResetPassword;
