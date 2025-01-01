"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const PaymentForm = () => {
    const [paymentDetails, setPaymentDetails] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Payment submitted:", paymentDetails);
        // Add payment submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm text-muted-foreground text-left block">Name on card</label>
                    <Input
                        placeholder="Olivia Rhye"
                        value={paymentDetails.name}
                        onChange={(e) =>
                            setPaymentDetails({ ...paymentDetails, name: e.target.value })
                        }
                        className="bg-[#00291F]/50 border-[#00FF94]/20 focus:border-[#00FF94]"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-muted-foreground text-left block">Expiry</label>
                    <Input
                        placeholder="MM / YY"
                        value={paymentDetails.expiry}
                        onChange={(e) =>
                            setPaymentDetails({ ...paymentDetails, expiry: e.target.value })
                        }
                        className="bg-[#00291F]/50 border-[#00FF94]/20 focus:border-[#00FF94]"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm text-muted-foreground text-left block">Card number</label>
                    <div className="relative">
                        <Input
                            placeholder="1234 1234 1234 1234"
                            value={paymentDetails.cardNumber}
                            onChange={(e) =>
                                setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
                            }
                            className="bg-[#00291F]/50 border-[#00FF94]/20 focus:border-[#00FF94] pl-12"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <Image
                                src="/mastercard-icon.svg"
                                alt="Mastercard"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-muted-foreground text-left block">CVV</label>
                    <Input
                        type="password"
                        placeholder="•••"
                        value={paymentDetails.cvv}
                        onChange={(e) =>
                            setPaymentDetails({ ...paymentDetails, cvv: e.target.value })
                        }
                        className="bg-[#00291F]/50 border-[#00FF94]/20 focus:border-[#00FF94]"
                    />
                </div>
            </div>

            <div className="flex gap-4">
                <Button
                    variant="outline"
                    className="flex-1 bg-transparent border-gray-600 hover:bg-gray-800 text-gray-300"
                >
                    Go Back
                </Button>
                <Button
                    type="submit"
                    className="flex-1 bg-[#00FF94] hover:bg-[#00FF94]/90 text-[#00291F]"
                >
                    Start Free Trial
                </Button>
            </div>
        </form>
    );
};