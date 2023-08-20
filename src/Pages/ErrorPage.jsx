import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <section>
      <Navbar />
      <div>
        <h2
          className={`text-[547.559px] font-clashbold font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#D9D9D975] to-[ #D9D9D900] text-center`}
        >
          404
        </h2>
      </div>
    </section>
  );
};

export default ErrorPage;
