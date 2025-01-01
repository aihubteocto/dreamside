"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const VIPSection = () => {
  return (
    <div className="bg-defbackground border border-[4px] border-[#6026E1] rounded-3xl p-8 text-center">
      <h2 className="text-display-md font-semibold mb-2">Join our VIP club</h2>
      <p className="text-muted-foreground text-xl font-regular mb-6">
        Sign up and start your free trial today to unlock all our community features
      </p>
      <div className="flex gap-4 max-w-md mx-auto">
        <Input placeholder="Enter your email" className="bg-background/50 rounded-full" />
        <Button className="text-md font-semibold">Subscribe</Button>
      </div>
    </div>
  );
};