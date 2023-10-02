import { motion } from "framer-motion";
import ImageCard from "../components/ImageCard";
import ScreenContainer from "../components/ScreenContainer";

export default function Home() {
  return (
    <ScreenContainer>
    <motion.div
      initial={{
        y: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      // className="h-screen flex flex-col- max-w-7xl px-10  py-20 mx-auto"
    >
      <div className="flex flex-col-reverse lg:flex-row">
        <header className="lg:sticky mx-auto lg:top-20 lg:left-24 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 px-24 space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl whitespace-nowrap">
            Ng Chin Chia
          </h1>
          <h2 className="text-2xl font-bold tracking-tight text-[#4831d4] text-opacity-60 sm:text-3xl whitespace-nowrap">
            Frontend Developer
          </h2>
          <p className="text-slate-950">
            I turn design visions into seamless web experiences. With a passion
            for user-friendly interfaces, I
            bring creativity to life. Let's create something extraordinary
            together.
          </p>
          <div className="space-x-5">
            <button className="bg-slate-950 hover:bg-slate-900/50 text-slate-50 font-semibold hover:text-slate-50 py-2 px-4 border border-[#888888] hover:border-transparent rounded">
              Contact
            </button>
            <button className="bg-slate-50 hover:bg-[#4831d4] hover:bg-opacity-60 text-slate-950 font-bold py-2 px-4 border border-[#888888] rounded">
              Download CV
            </button>
          </div>
          <h3 className="text-[#4831d4] text-opacity-90 font-bold">Primary skills</h3>
          <div className="flex space-x-2 items-center justify-center">
            <span className="skillsIcon">Mongodb</span>
            <span className="skillsIcon">Express</span>
            <span className="skillsIcon">React</span>
            <span className="skillsIcon">Node js</span>
          </div>
          <h3 className="text-[#4831d4] text-opacity-70 font-bold">Secondary skills</h3>
          <div className="flex space-x-2 items-center justify-center">
            <span className="skillsIcon">Figma</span>
            <span className="skillsIcon">Java</span>
            <span className="skillsIcon">Php</span>
            <span className="skillsIcon">Python</span>
          </div>
        </header>
        <ImageCard imageUrl="https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_1280.png" />
      </div>
    </motion.div>
    </ScreenContainer>
  );
}
