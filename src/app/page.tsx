import { SearchBar } from "@/components/SearchBar";
import { CategoryTabs } from "@/components/CategoryTabs";
import { CommunityCard } from "@/components/CommunityCard";
import { StatsSection } from "@/components/StatsSection";
import { VIPSection } from "@/components/VIPSection";
import { PartnerLogos } from "@/components/contact/PartnerLogos";

const communities = Array(12).fill({
  title: "Growth Community",
  author: "Andrew Smith",
  price: "$19.99",
  type: "Public" as const,
  members: 1.2,
  image: "/images/communitycard.svg",
  authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
});


export default function HomePage() {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto space-y-16">

      <div className="text-center space-y-6 py-12">
        <h1 className="text-display-xl text-textwhite font-semibold">
          Join communities who
          <br />
          care about your growth
        </h1>
        <p className="text-textwhite text-xl font-regular max-w-2xl mx-auto">
          Join a community to be part of something special
        </p>
        <div className="flex justify-center">
          <SearchBar />
        </div>
      </div>


      <CategoryTabs />

      
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg text-textwhite font-semibold">Browse hundreds of communities</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="bg-transparent border-none text-sm">
              <option>New</option>
              <option>Popular</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <CommunityCard key={index} {...community} />
          ))}
        </div>
      </div>
      <PartnerLogos />
      {/* Stats Section */}
      {/* <StatsSection /> */}

      {/* VIP Section */}
      <VIPSection />
    </div>
  );
}
