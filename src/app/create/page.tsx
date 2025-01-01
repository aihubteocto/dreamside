"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function CreateCommunity() {
  const [communityName, setCommunityName] = useState("");

  return (
    <div className="min-h-screen bg-background bg-[url('/images/heroheaderseccreate.svg')]  bg-contain bg-cover bg-no-repeat flex items-center justify-center relative overflow-hidden">
      {/* Background stars/sparkles */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-20 right-12 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-12 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl px-4">
        {/* Profile images */}
        <div className="relative mb-8">
          <div className="absolute -left-36 top-0">
            <div className="relative">
              <Image
                src="/images/image-1.svg"
                alt="Profile 1"
                width={128}
                height={128}
                className="rounded-2xl"
              />
            
            </div>
          </div>
          <div className="absolute -right-40 top-0">
            <div className="relative">
            <Image
                src="/images/image-1.svg"
                alt="Profile 1"
                width={128}
                height={128}
                className="rounded-2xl"
              />
              
            </div>
          </div>
        </div>

        {/* Form content */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-display-xl font-semibold mb-4">
            Let's create your community
          </h1>
          <p className="text-xl font-regular text-gray-300 mb-8">
            What would you like to call your community?
          </p>
          <Input
            type="text"
            placeholder="The name of your community"
            value={communityName}
            onChange={(e) => setCommunityName(e.target.value)}
            className="bg-[#00291F]/50 border-[#00FF94]/20 focus:border-[#00FF94] text-white placeholder-gray-400 text-lg py-6 px-4 rounded-full w-full max-w-xl mx-auto"
          />
          <p className="text-sm text-gray-400">You can change this later</p>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              className="bg-transparent border-gray-600 hover:bg-gray-800 text-gray-300 px-8 py-6 rounded-full text-lg"
            >
              Cancel
            </Button>
            <Button
              className="bg-[#00FF94] hover:bg-[#00FF94]/90 text-[#00291F] px-8 py-6 rounded-full text-lg font-medium"
            >
              Create My Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}