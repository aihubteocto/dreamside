"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { X } from "lucide-react";
import { useState } from "react";

interface JoinCommunityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JoinCommunityDialog({ open, onOpenChange }: JoinCommunityDialogProps) {
  const [step, setStep] = useState<"info" | "payment">("info");

  const handleJoin = () => {
    setStep("payment");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
      <DialogTitle className="text-xl font-semibold mb-4">Join Community</DialogTitle>

        <div className="relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-0 top-0 p-2 rounded-full hover:bg-secondary/80"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="w-12 h-12">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" alt="Community" />
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold">Join Scaling Ads - Marketing</h2>
              {step === "info" && (
                <p className="text-sm text-muted-foreground">
                  By joining, you accept Scaling Ads - Marketing and Dreamside's terms. You allow them to charge your card $15 now and $15 every month after that.
                </p>
              )}
            </div>
          </div>

          {step === "info" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">You can cancel at anytime.</p>
              <Button 
                onClick={handleJoin}
                className="w-full"
              >
                Join $15/month
              </Button>
            </div>
          )}

          {step === "payment" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name on card</label>
                <Input placeholder="Olivia Rhye" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Card number</label>
                  <Input placeholder="1234 1234 1234 1234" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm font-medium">Expiry</label>
                    <Input placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">CVV</label>
                    <Input placeholder="123" type="password" />
                  </div>
                </div>
              </div>

              <Button className="w-full">
                Join $15/month
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}