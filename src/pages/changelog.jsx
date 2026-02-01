import { Navbar, Footer, SEO } from "../components";
import { CHANGELOG_DATA } from "../constants/changelog";
import { motion } from "framer-motion";

const Changelog = () => {
  return (
    <>
      <SEO
        title="Changelog | Victor"
        description="Updates and improvements to the VickyJay portfolio."
      />
      <main className="max-w-[1440px] mx-auto min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-grow pt-[120px] px-[20px] md:px-[50px] lg:px-[100px] pb-20">
          {/* Header */}
          <div className="gradientText mb-16 text-center lg:text-left">
            <h1 className="flex justify-center lg:justify-start items-center font-clashbold font-semibold text-white text-[34px] leading-[1.2] lg:text-[60px] lg:leading-[73.8px]">
              Changelog <span className="ml-4 animate-bounce text-[0.8em]">📜</span>
            </h1>
            <p className="text-[#FFFFFF99] font-medium text-[15px] lg:text-[18px] mt-4 max-w-2xl mx-auto lg:mx-0">
              A history of updates, improvements, and fixes to this portfolio.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-[#1ED7601A] ml-4 md:ml-10 space-y-12">
            {CHANGELOG_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <div className="absolute -left-[9px] top-2 w-[16px] h-[16px] rounded-full bg-[#061417] border-2 border-[#1ED760] shadow-[0_0_10px_#1ED76080]"></div>

                {/* Content Card */}
                <div className="group bg-gradient-to-br from-[#ffffff0d] to-[#ffffff00] p-[1px] rounded-2xl">
                  <div className="bg-[#0A1C20]/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-[#0A1C20] transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            item.category === 'New' ? 'bg-[#1ED760]/20 text-[#1ED760] border border-[#1ED760]/30' :
                            item.category === 'Fix' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                            'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          }`}>
                            {item.category}
                          </span>
                          <span className="text-[#FFFFFF66] text-sm font-mono">v{item.version}</span>
                        </div>
                        <h3 className="text-2xl font-clashbold font-semibold text-white group-hover:text-[#1ED760] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-[#FFFFFF80] text-sm font-medium bg-[#ffffff05] px-3 py-1 rounded-md whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>

                    <p className="text-[#FFFFFFCC] mb-6 text-base leading-relaxed">
                      {item.description}
                    </p>

                    {item.detailedItems && (
                      <ul className="space-y-2">
                        {item.detailedItems.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[#FFFFFF99] text-sm md:text-base">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1ED760]/50 shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Changelog;
