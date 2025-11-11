// CSS styles for continuous scrolling animation and scrollbar hiding
const scrollingStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  @keyframes scroll-logos {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  .animate-scroll {
    animation: scroll-logos 25s linear infinite;
  }
  
  .animate-scroll:hover {
    animation-play-state: paused;
  }
  
  .animate-scroll.paused {
    animation-play-state: paused;
  }
`;

import { useRef, useEffect } from 'react';

const TrustedPartners = () => {
  const partners = [
    { name: "Huawei", logo: "https://home.sohub.com.bd/assets/customers/huawei_customer.png" },
    { name: "Rangs", logo: "https://home.sohub.com.bd/assets/customers/rangs_customer.png" },
    { name: "Savro", logo: "https://home.sohub.com.bd/assets/customers/savro_customer.png" },
    { name: "Shell", logo: "https://home.sohub.com.bd/assets/customers/shell_customer.png" },
    { name: "Brain Station", logo: "https://home.sohub.com.bd/assets/customers/brain_station_logo.png" },
    { name: "Basecamp", logo: "https://home.sohub.com.bd/assets/customers/basecamp.png" },
    { name: "Continental", logo: "https://home.sohub.com.bd/assets/customers/continen.png" },
    { name: "DHS", logo: "https://home.sohub.com.bd/assets/customers/DHS-1.png" },
    { name: "National", logo: "https://home.sohub.com.bd/assets/customers/national0.png" },
    { name: "Unified", logo: "https://home.sohub.com.bd/assets/customers/unified0.png" },
    { name: "SSL", logo: "https://home.sohub.com.bd/assets/customers/sslr.png" },
    { name: "Auto", logo: "https://home.sohub.com.bd/assets/customers/autoo.png" },
    { name: "99 Spoon", logo: "https://home.sohub.com.bd/assets/customers/99spoon00.png" },
    { name: "Arms", logo: "https://home.sohub.com.bd/assets/customers/arms.png" },
    { name: "Ayana", logo: "https://home.sohub.com.bd/assets/customers/ayana0.png" },
    { name: "Braincraft", logo: "https://home.sohub.com.bd/assets/customers/braincraft0.png" },
    { name: "Dream", logo: "https://home.sohub.com.bd/assets/customers/dream1.png" },
    { name: "Kyamch", logo: "https://home.sohub.com.bd/assets/customers/kyamch77.png" },
    { name: "MES", logo: "https://home.sohub.com.bd/assets/customers/mes00.png" },
    { name: "Mowrey", logo: "https://home.sohub.com.bd/assets/customers/mowrey887.png" },
    { name: "Sujon", logo: "https://home.sohub.com.bd/assets/customers/sujon0.png" },
    { name: "Zanala", logo: "https://home.sohub.com.bd/assets/customers/zanala0.png" },
  ];

  // Triple duplicate partners array for infinite loop
  const duplicatedPartners = [...partners, ...partners, ...partners];
  
  // Refs for container elements
  const outerContainerRef = useRef(null);
  const innerContainerRef = useRef(null);
  
  // Calculate logo set width (approximate)
  const logoSetWidth = partners.length * 160; // Approximate width per logo including gaps
  
  // Scroll monitoring for infinite loop
  const handleScroll = () => {
    if (!outerContainerRef.current) return;
    
    const scrollLeft = outerContainerRef.current.scrollLeft;
    
    // Instant teleport logic
    if (scrollLeft >= logoSetWidth * 2) {
      // Scrolled too far right - teleport back to middle
      outerContainerRef.current.scrollLeft = logoSetWidth;
    } else if (scrollLeft <= 0) {
      // Scrolled too far left - teleport forward to middle
      outerContainerRef.current.scrollLeft = logoSetWidth;
    }
  };
  
  // Set up scroll monitoring
  useEffect(() => {
    const container = outerContainerRef.current;
    if (container) {
      // Initialize scroll position to middle set
      container.scrollLeft = logoSetWidth;
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [logoSetWidth]);
  
  const handleTouchStart = () => {
    if (innerContainerRef.current) {
      innerContainerRef.current.classList.add('paused');
    }
  };
  
  const handleTouchEnd = () => {
    if (innerContainerRef.current) {
      innerContainerRef.current.classList.remove('paused');
    }
  };

  return (
    <>
      <style>{scrollingStyles}</style>
      <section id="trusted-by-our-customers" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block pb-3">
              Trusted by Industry Leaders
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-full bg-gradient-to-r from-primary to-orange-500" />
            </h2>
          </div>

          {/* Continuous scrolling logo strip */}
          <div className="relative max-w-7xl mx-auto">
            <div ref={outerContainerRef} className="overflow-x-auto scrollbar-hide h-24">
              <div 
                ref={innerContainerRef}
                className="flex gap-8 animate-scroll whitespace-nowrap w-[300%]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={handleTouchStart}
                onMouseLeave={handleTouchEnd}
              >
                {/* Triple duplicated set of logos for seamless infinite loop */}
                {duplicatedPartners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex items-center justify-center flex-shrink-0 inline-block mx-8 p-4"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} - Trusted O Mama partner`}
                      className="h-16 md:h-20 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedPartners;
