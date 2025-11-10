import { motion } from "framer-motion";

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

  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="trusted-by-our-customers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block pb-3">
            Trusted by Industry Leaders
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-primary to-orange-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
        </motion.div>

        {/* Marquee container */}
        <div className="relative overflow-hidden max-w-7xl mx-auto">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: [0, -50 + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 p-4"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} - Trusted O Mama partner`}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
