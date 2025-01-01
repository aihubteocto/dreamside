import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
export function ProfileForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="rounded-full w-16 h-16"
          />
          <h1 className="text-2xl font-semibold">Profile</h1>
        </div>
        <p className="text-muted-foreground">olivia@untitledui.com</p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">First name</label>
            <Input placeholder="Oliva" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Last name</label>
            <Input placeholder="Rhye" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Username</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
              dreamside.io/
            </span>
            <Input className="rounded-l-none" placeholder="olivia" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Your photo</label>
          <p className="text-sm text-muted-foreground">
            This will be displayed on your profile.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="rounded-full w-12 h-12"
            />
            <div className="flex-1">
              <div className="border-2 border-dashed border-input rounded-lg p-4 text-center hover:bg-accent/50 transition-colors cursor-pointer">
                <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Your bio</label>
          <p className="text-sm text-muted-foreground">
            Write a short introduction.
          </p>
          <Textarea
            placeholder="Add a short bio..."
            className="min-h-[100px]"
          />
          <p className="text-sm text-muted-foreground text-right">
            400 characters left
          </p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Country</label>
          <Input value="Australia" />
        </div>
        <div className="space-y-4">
          <label className="text-sm font-medium">Social profiles</label>
          {[
            { prefix: "youtube.com/", placeholder: "untitledui" },
            { prefix: "instagram.com/", placeholder: "untitledui" },
            { prefix: "tiktok.com/", placeholder: "untitledui" },
            { prefix: "twitter.com/", placeholder: "untitledui" },
            { prefix: "facebook.com/", placeholder: "untitledui" },
            { prefix: "linkedin.com/company/", placeholder: "untitledui" },
          ].map((social, index) => (
            <div key={index} className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                {social.prefix}
              </span>
              <Input
                className="rounded-l-none"
                placeholder={social.placeholder}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    </form>
  );
}