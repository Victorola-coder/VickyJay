import { useRef, useState } from "react";
import { motion } from "framer-motion";

const DownloadButton = ({ resumeUrl }) => {
  const downloadRef = useRef(null); // Ref to hold the created anchor element
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleClick = async (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    setIsLoading(true);

    try {
      const link = downloadRef.current;
      if (link) {
        link.click();
      } else {
        console.error("Download link not found");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadingContent = (
    <span className="cursor-pointer flex items-center justify-center">
      <svg
        className="animate-spin mr-2 h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10 3v1.4a8 8 0 1 0 0 16 8 8 0 0 0 0-16V3z"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </svg>
      Loading...
    </span>
  );

  return (
    <motion.div
      className="max-w-[200px] mx-auto md:mx-0"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <button
        ref={downloadRef}
        className={`flex justify-center lg:flex lg:justify-start ${
          isLoading ? "disabled opacity-50 cursor-wait" : ""
        }`}
        disabled={isLoading} // Disable button while loading
        onClick={handleClick}
      >
        {isLoading ? (
          loadingContent
        ) : (
          <span className="cursor-pointer bg-gradient-to-r max-w-[197px] lg:max-w-[252px] to-[#D9D9D9] from-[#D9D9D900] py-0.5 pr-0.5">
            <p className="bg-[#061417] px-[17px] py-[18px] font-medium text-[18px] font-clash">
              Download Resume
            </p>
          </span>
        )}
      </button>
    </motion.div>
  );
};

export default DownloadButton;
