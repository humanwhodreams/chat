import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <Card className="max-w-3xl mx-auto border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Forgot your password</CardTitle>
        <CardDescription>
          Do not worry, enter your crendentials let us get things rocking.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address..."
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send instructions
          </Button>
        </div>
        <div className="mt-4 text-sm text-center">
          Remembered password?{" "}
          <Link href="/sign-up" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForgotPassword;
