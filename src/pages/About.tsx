import ScreenContainer from "../components/ScreenContainer";
import ImageCard from "../components/ImageCard";

// type Props = {};

export default function About() {
  return (
    <ScreenContainer className="h-screen flex flex-col text-left max-w-7xl lg:px-10 justify-center py-20 mx-auto">
      <div className="flex-col py-10 px-10 max-w-lg items-center">
        <h1 className="text-3xl font-bold underline whitespace-nowrap">
          <span className="text-[#4831d4] text-3xl">02-</span>
          <span className="tracking-[3px]"> About Me</span>
        </h1>
        <div className="max-h-80 py-5 space-y-3">
          <p className="text-slate-950 overflow-y-clip text-lg">
            Hello! My name is Chin Chia and I enjoy creating things that live on
            the internet. My interest in application development started back in
            2017 when I was an intern at ST Electronics working in a small team
            setting and I came upon user interface design.
          </p>
          <p className="text-slate-950 overflow-y-clip text-lg">
            Fast-forward to today, I have had the privilege of building web and
            mobile applications during my studies at University of Wollongong
            and just recently finished my final semester
          </p>
          <p className="text-slate-950 overflow-y-clip text-lg">
            My main focus these days are expanding my knowledge on MERN, keeping
            track of the best practices, as well as self learning other
            technology tools to hone my skillset.
          </p>
        </div>
      </div>
    </ScreenContainer>
  );
}
