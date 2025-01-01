'use client'
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Sign in form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 bg-background">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <div className="relative w-8 h-8 mx-auto mb-4">
              <Image
                src="/lovable-uploads/96c976b3-a6ab-4aad-9f8e-52f2a2dfb706.png"
                alt="Sparkle"
                width={32}
                height={32}
              />
            </div>
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="text-muted-foreground">
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full bg-background hover:bg-accent"
              onClick={() => {}}
            >
              <Mail className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          
            <Button
              variant="outline"
              className="w-full bg-background hover:bg-accent"
              onClick={() => {}}
            >
              <Github className="mr-2 h-4 w-4" />
              Sign in with Github
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#00FF94] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      {/* Right side - Image */}
      <div className="hidden lg:flex lg:flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <Image
          src="/lovable-uploads/96c976b3-a6ab-4aad-9f8e-52f2a2dfb706.png"
          alt="Sign in cover"
          fill
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Be part of something.</h2>
          <p className="text-lg opacity-90">
            Create a free account and get access to thousands of communities where
            you can meet and connect with others.
          </p>
        </div>
      </div>
    </div>
  );
}