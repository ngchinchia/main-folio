import ScreenContainer from "../components/ScreenContainer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../data/data";
import Title from "../components/Title";
import React from "react";

// type Props = {};

export default function WorkExperience() {
  return (
    <ScreenContainer className="h-screen flex flex-col text-center max-w-7xl px-10 justify-center py-20 mx-auto items-center">
     <Title className="text-2xl font-bold underline whitespace-nowrap py-5" sectionNumber="03-" title="Work Experience" />
      <VerticalTimeline  lineColor={"rgba(72, 49, 212, 0.5)"}>
        {experienceData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            className=" transition hover:scale-[1.04]"
              contentStyle={{
                background: "#e6e7e8",
                borderColor:"#4831d4",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #4831d4"
              }}
              date={item.date}
              dateClassName={"text-[#4831d4]"}
              icon={item.icon}
              iconStyle={{
                background: "#e6e7e8",
                fontSize: "1.5rem"
              }}
             
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0 text-[#4831d4]">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </ScreenContainer>
  );
}
