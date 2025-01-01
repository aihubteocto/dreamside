export const PartnerLogos = () => {
    const partners = [
      { name: "Boltshift", logo: "/images/Avatar.svg" },
      { name: "Lightbox", logo: "images/Avatar.svg" },
      { name: "FeatherDev", logo: "images/Avatar.svg" },
      { name: "Spherule", logo: "images/Avatar.svg" },
      { name: "GlobalBank", logo: "images/Avatar.svg" },
      { name: "Nietzsche", logo: "images/Avatar.svg" },
    ];
  
    return (
      <div className="space-y-8">
        <p className="text-center text-muted-foreground">
          We've built office spaces for
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-12 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 mr-3 w-auto"
              />
              <p className="text-lg font-semibold">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };