"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">First name</label>
          <Input
            placeholder="First name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="bg-secondary/50 border-0"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Last name</label>
          <Input
            placeholder="Last name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="bg-secondary/50 border-0"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Email</label>
        <Input
          type="email"
          placeholder="you@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-secondary/50 border-0"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">
          My enquiry is related to*
        </label>
        <Select
          onValueChange={(value) =>
            setFormData({ ...formData, enquiryType: value })
          }
        >
          <SelectTrigger className="bg-secondary/50 border-0">
            <SelectValue placeholder="Starting a community" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="community">Starting a community</SelectItem>
            <SelectItem value="partnership">Partnership</SelectItem>
            <SelectItem value="support">Support</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Message</label>
        <Textarea
          placeholder="Leave us a message..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-secondary/50 border-0 min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#00FF94] text-[#00291F] hover:bg-[#00FF94]/90"
      >
        Send message
      </Button>
    </form>
  );
};