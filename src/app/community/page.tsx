"use client";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JoinCommunityDialog } from "@/components/community/JoinCommunityDialog";
import { Users, Lock } from "lucide-react";
import { useState } from "react";
import { PartnerLogos } from "@/components/contact/PartnerLogos";
import { VIPSection } from "@/components/VIPSection";

export default function CommunityPage() {
    const [showJoinModal, setShowJoinModal] = useState(false);

    return (
        <div className="min-h-screen bg-background">
            {/* Main content */}
            <div className="max-w-7xl mx-auto space-y-14 md:space-y-24 px-4 sm:px-6 lg:px-8 py-8">

                {/* Community Info */}
                <div className="grid md:grid-cols-3 gap-16">
                    <div className="md:col-span-2 space-y-8">
                        {/* Video Section */}
                        <div className="rounded-lg overflow-hidden bg-secondary/20 mb-8">
                            <div className="aspect-video relative">
                                <img
                                    src="/lovable-uploads/f2df1887-2263-4adc-947d-5b722da789fd.png"
                                    alt="Community Preview"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-sm text-white">
                                    <span>0:00</span>
                                    <div className="w-96 h-1 bg-white/30 rounded-full">
                                        <div className="w-1/3 h-full bg-white rounded-full"></div>
                                    </div>
                                    <span>8:24</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-2 p-2">
                                {Array(4).fill(null).map((_, i) => (
                                    <img
                                        key={i}
                                        src="/lovable-uploads/9c166dd7-e039-4ac2-b044-55386afcb7c6.png"
                                        alt={`Preview ${i + 1}`}
                                        className="w-full aspect-video object-cover rounded"
                                    />
                                ))}
                            </div>
                        </div>



                        <div className="space-y-6">
                            <h2 className="text-display-sm font-semibold">About the community</h2>
                            <div className="space-y-4 text-xl font-regular text-muted-foreground">
                                <p>Check the yellow "Join Group" button and fill out the questionnaire.</p>
                                <p>If you do not answer all questions on the form, your application will be denied.</p>
                                <p>Once you fill out the form wait for our admins to approve (within 24 hours) and we'll see you inside!</p>
                                <p className="text-yellow-500">
                                    Note: While we strive to make the community a safe place. We have no tolerance for bad players or negative energy. Everyone here is putting effort to improve themselves, if you join and make people uncomfortable or promote bad energy/excuse making you will be banned.
                                </p>
                                <p>Like a fruit bowl, fruit with mold will spread to healthy fruit if you don't toss it. Protecting and growing the community is #1 here!</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-secondary/100 px-10 py-8 rounded-[36px] space-y-6">
                            <div>
                                <h1 className="text-display-xs font-semibold mb-2">April The Daily Wellness Mentor</h1>
                                <p className="text-muted-foreground text-md font-regular">
                                    For the ambitious female founder who doesn't believe in settling for any less. All things business, money, health & wellness for you to level up.
                                </p>
                            </div>
                            <div className="space-y-2 border-b border-t border-border py-6">
                                <div className="flex items-center text-md font-semibold space-x-2">
                                    <Badge className="px-0 text-md font-semibold" variant="secondary">
                                        <Lock className="w-4 h-4 mr-1" />1,202 members</Badge>
                                </div>
                                <div className="flex items-center text-md font-semibold space-x-2">
                                    <Badge className="px-0 text-md font-semibold" variant="secondary">
                                        <Lock className="w-4 h-4 mr-1" />Free</Badge>

                                </div>
                                <div className="flex items-center text-md font-semibold space-x-2">
                                    <Badge className="px-0 text-md font-semibold" variant="secondary">
                                        <Lock className="w-4 h-4 mr-1" />
                                        Private
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Avatar className="w-6 h-6">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" alt="Creator" />
                                </Avatar>
                                <span className=" text-sm font-semibold text-muted-foreground">By Joan Hasankachi</span>
                            </div>
                            <Button
                                className="w-full"
                                onClick={() => setShowJoinModal(true)}
                            >
                                Join Community
                            </Button>
                        </div>
                    </div>
                </div>
                <PartnerLogos />
                <VIPSection />
            </div>

            <JoinCommunityDialog
                open={showJoinModal}
                onOpenChange={setShowJoinModal}
            />
        </div>
    );
}