import { ContactForm } from "@/components/contact/ContactForm";
import { PartnerLogos } from "@/components/contact/PartnerLogos";
import { VIPSection } from "@/components/VIPSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto space-y-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Get in touch</h1>
          <p className="text-muted-foreground text-lg">
            Our friendly team would love to hear from you.
          </p>
          <ContactForm />
        </div>
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="/lovable-uploads/9c166dd7-e039-4ac2-b044-55386afcb7c6.png"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <PartnerLogos />
      <VIPSection />
    </div>
  );
}