import { SettingsNav } from "@/components/settings/SettingsNav";
import { ProfileForm } from "@/components/settings/ProfileForm";
export default function SettingsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-3">
          <SettingsNav />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}