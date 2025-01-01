"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface CommunityCardProps {
  title: string;
  author: string;
  price: string;
  type: "Public" | "Private";
  members: number;
  image: string;
  authorImage: string;
}

export const CommunityCard = ({
  title,
  author,
  price,
  type,
  members,
  image,
  authorImage,
}: CommunityCardProps) => {
  return (
    <div className="card-hover rounded-[22px] bg-defbackground overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover object-contain w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={authorImage} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <span className="text-md font-semibold text-textwhite ">{author}</span>
        </div>
        <h3 className="font-regular text-md text-textgrey mb-6">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-textwhite">{price}</span>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-sm font-semibold text-textwhite">{type}</Badge>
            <Badge variant="secondary" className="text-sm font-semibold text-textwhite">{members}k</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};