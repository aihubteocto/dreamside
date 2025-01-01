import { PaymentForm } from "@/components/payment/PaymentForm";
import { PaymentFeatures } from "@/components/payment/PaymentFeatures";
import Image from "next/image";

export default function PaymentPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      <div className="relative">
        {/* Background sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-20 right-12 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-12 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>

        {/* Profile images */}
        <div className="relative">
          <div className="absolute -left-20 top-20">
            <div className="relative">
              <Image
                src="/lovable-uploads/5a6ade29-7d2d-4cec-98ec-3b337b8eee97.png"
                alt="Profile 1"
                width={120}
                height={120}
                className="rounded-2xl"
              />
              <span className="absolute bottom-2 left-2 bg-[#00291F] text-[#00FF94] text-xs px-2 py-1 rounded-full">
                50 New leads per month
              </span>
            </div>
          </div>
          <div className="absolute -right-20 top-20">
            <div className="relative">
              <Image
                src="/lovable-uploads/5a6ade29-7d2d-4cec-98ec-3b337b8eee97.png"
                alt="Profile 2"
                width={120}
                height={120}
                className="rounded-2xl"
              />
              <span className="absolute bottom-2 right-2 bg-[#00291F] text-[#00FF94] text-xs px-2 py-1 rounded-full">
                1.2k Members in 2 months
              </span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto text-center space-y-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Scaling Ads Strategy
            <br />
            For Beginners
          </h1>
          <p className="text-lg text-muted-foreground">
            Free for 30 days, then $49/month. All features, no hidden fees, cancel
            anytime.
          </p>

          <PaymentFeatures />
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}