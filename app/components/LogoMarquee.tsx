export function LogoMarquee() {
  const brands = [
    'Linksoul',
    'Warroad',
    'Manduka',
    'Adidas',
    'Belding',
    'Brands & People',
    'Team Golf USA',
    'Touchstone',
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full overflow-hidden py-16 bg-fallo-black">
      <div className="relative">
        <div className="flex animate-marquee hover:pause">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-12 flex items-center justify-center"
            >
              <span className="font-label text-lg tracking-widest text-fallo-cream uppercase opacity-60 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
