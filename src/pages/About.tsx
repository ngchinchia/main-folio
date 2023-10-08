import ScreenContainer from "../components/ScreenContainer";
import profile from "../assets/profile.jpg";
import Title from "../components/Title";

// type Props = {};

export default function About() {
  return (
    <ScreenContainer className=" max-h-full flex flex-col max-w-7xl lg:px-10 justify-center py-20 mx-auto mb-5">
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <div className="flex-col py-10 px-10 max-w-lg lg:w-1/2 items-center inline-block mb-10 mt-15">
          <Title
            sectionNumber="02-"
            title="About Me"
            className="text-2xl font-bold text-center md:text-left whitespace-nowrap 2xl:mt-0 xl:mt-0 lg:mt-5"
          ></Title>
          <div className="max-h-80 py-5 space-y-3 mb-10 inline-block">
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
        <div className="relative">
        <div className="border border-[#4831d4] absolute left-10 top-5 w-[250px] h-[300px] z-0 hover:translate-x-10 hover:-translate-y-5 transition-transform duration-500 ease-in-out floating-image "></div>
        <img
          src={profile}
          alt="profile-img"
          className="w-[250px] h-[400px] z-50  brightness-50 hover:brightness-100 hover:-translate-x-10 hover:translate-y-5 transition-transform duration-500 ease-in-out 2xl:translate-y-15 py-10  aspect-square"
        />
    
        </div>
       
       
      </div>
    </ScreenContainer>
  );
}
