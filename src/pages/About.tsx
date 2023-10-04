import ScreenContainer from "../components/ScreenContainer";
import ImageCard from "../components/ImageCard";
import profile from "../assets/profile.jpg";

// type Props = {};

export default function About() {
  return (
    <ScreenContainer className="h-screen flex flex-col max-w-7xl lg:px-10 justify-center py-20 mx-auto">
      
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="flex-col py-10 px-10 max-w-lg lg:w-1/2 items-center inline-block">
          <h1 className="2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl font-bold underline whitespace-nowrap">
            <span className="text-[#4831d4] 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl">
              02-
            </span>
            <span className="tracking-[3px]"> About Me</span>
          </h1>
          <div className="max-h-80 py-5 space-y-3 ">
            <p className="text-slate-950 overflow-y-clip break-words whitespace-normal  2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-base">
              Hello! My name is Chin Chia and I enjoy creating things that live
              on the internet. My interest in application development started
              back in 2017 when I was an{" "}
              <span className=" text-[#4831d4] opacity-60 font-bold">
                intern at ST Electronics working in a small team setting
              </span>{" "}
              and I came upon user interface design.
            </p>
            <p className="text-slate-950 overflow-y-clip break-words 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-base">
              Fast-forward to today, I have had the privilege of{" "}
              <span className=" text-[#4831d4] opacity-60 font-bold">
                building web and mobile applications{" "}
              </span>{" "}
              during my studies at University of Wollongong and just recently
              finished my final semester.
            </p>
            <p className="text-slate-950 overflow-y-clip break-words 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-base">
              My main focus these days are expanding my knowledge on MERN,
              keeping track of the best practices, as well as{" "}
              <span className=" text-[#4831d4] opacity-60 font-bold">
                self learning
              </span>{" "}
              other technology tools to hone my skillset.
            </p>
          </div>
        </div>
        <div className="max-w-sm xl:h-5/6 lg:h-5/6 md:h-5/6 h-1/5 mx-auto px-5 py-2 border border-[#4831d4] rounded-xl">
          <img
            src={profile}
            alt="profile-img"
            className="w-full h-full  rounded-xl brightness-50 hover:brightness-100 hover:-translate-y-10 hover:-translate-x-10 transition-transform duration-500 ease-in-out -translate-y-5 -translate-x-8"
            // Adjust the brightness value as needed (0.5 makes it 50% darker)
          />
        </div>
      </div>
    </ScreenContainer>
  );
}
