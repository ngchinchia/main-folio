import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLink from "./NavLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex sticky top-0 p-5 justify-between max-w-7xl mx-auto md:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=""
      >
        <SocialIcon
          url={"https://www.linkedin.com/in/ng-chin-chia-90699124b/"}
          fgColor="currentColor"
          bgColor="transparent"
          className="messageIcon"
        />
        <SocialIcon
          url={"https://github.com/ngchinchia"}
          fgColor="currentColor"
          bgColor="transparent"
          className="messageIcon"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* For Large Screen */}
        <NavLink className="hidden md:flex w-full space-x-4" />

        {/* For Mobile Screen */}
        <div className="md:hidden pt-2">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
        {/* If menu is clicked, render mobile menu page */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-[#FFF5EE] bg-opacity-100"
            onClick={toggleNavbar}
          >
            <button className="absolute top-0 right-0 mt-5 mr-5">
              <X />
            </button>

            <NavLink className="flex flex-col items-center justify-center h-screen uppercase tracking-[5px] space-y-10" />
          </div>
        )}
      </motion.div>
    </header>
  );
}
