import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="overflow-hidden mx-auto relative min-h-[100vh]">
      <Navbar />
      <div className={`absolute z-10 right-0 left-0 top-[100px] md:top-5`}>
        <h2
          className={`text-[262.916px] lg:text-[547.559px] mx-auto font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#D9D9D975]/5 to-[#D9D9D900] text-center`}
        >
          404
        </h2>
      </div>
      <div className={`absolute -z-50 right-0 left-0 top-[100px] md:-top-4`}>
        <h2
          className={`text-[262.916px] lg:text-[547.559px] mx-auto font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#FFFFFF03]/5 to-[#D9D9D900] text-center`}
        >
          404
        </h2>
      </div>

      <div className={`mt-[100px] relative`}>
        <p
          className={`absolute top-0 left-0 right-0 text-[100.999px] lg:text-[200.477px] mx-auto font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#FFFFFF03]/40 to-[#D9D9D900] text-center`}
        >
          404
        </p>
        <p
          className={`absolute top-6 left-0 right-0 text-[100.999px] lg:text-[200.477px] mx-auto font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-[#FFFFFF66] from-[#FFFFFF66] to-[#D9D9D900] text-center`}
        >
          404
        </p>
      </div>

      <div className={`mt-[400px] text-center mx-auto`}>
        <h3 className="text-[23px] font-semibold font-clashbold">
          oooops! chief, lol..😢
        </h3>
        <p className={`text-[#FFFFFF99] text-sm font-clash font-medium`}>
          We can’t show the page you requested due to legal rason.{" "}
        </p>

        <Link
          to="/"
          className="relative z-40 cursor-pointer w-[142px] mt-[27px] mx-auto block bg-gradient-to-l from-[#D9D9D9] to-[#D9D9D900] pt-0.5 pr-0.5"
        >
          <button
            className={`bg-[#061417] px-[22.8px] py-[14.85px] text-[14.5px] font-medium font-clash`}
          >
            Back to home
          </button>
        </Link>
        <motion.div whileTap={{ scale: 1.2 }}></motion.div>
      </div>
    </section>
  );
};

export default ErrorPage;
