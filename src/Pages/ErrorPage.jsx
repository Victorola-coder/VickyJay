import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <section className="overflow-hidden mx-auto relative min-h-[100vh]">
      <Navbar />
      <div className={`absolute right-0 left-0 top-5`}>
        <h2
          className={`text-[ 262.916px] lg:text-[547.559px] mx-auto font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#D9D9D975]/5 to-[ #D9D9D900] text-center`}
        >
          404
        </h2>
      </div>
      <div className={`absolute right-0 left-0 -top-4`}>
        <h2
          className={`text-[ 262.916px] lg:text-[547.559px] mx-auto font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#FFFFFF03]/5 to-[ #D9D9D900] text-center`}
        >
          404
        </h2>
      </div>
    </section>
  );
};

export default ErrorPage;
