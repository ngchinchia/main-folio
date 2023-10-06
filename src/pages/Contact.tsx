import ScreenContainer from "../components/ScreenContainer";
import React, { useState } from "react";
import Title from "../components/Title";
import { motion } from "framer-motion";




export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
 
  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);

    // Extract form data and construct the mailto link

    const email = formData.get("email");
    const message = formData.get("message");

    window.location.href = `mailto:billyngchinchia@gmail.com?subject=''&body=${message}, (${email})`;
    event.target.reset();
    setSubmitted(true);
    console.log(email, message);


    event.target.reset();
  };


  return (
    <ScreenContainer className="h-screen flex flex-col text-center w-[min(100%, 38rem)] px-10 mb-20 sm:mb-28 justify-center py-20 mx-auto items-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Title
          className="text-2xl font-bold underline whitespace-nowrap py-3"
          sectionNumber="05-"
          title="Contact Me"
        />

        <p className="text-gray-700">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:billyngchinchia@gmail.com">
            billyngchinchia@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form className="mt-10 flex flex-col w-full" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="h-14 rounded-lg border border-black/10 p-4 bg-[#e6e7e8]  items-center justify-center"
            required
            maxLength={500}
          />
          <textarea
            name="message"
            placeholder="Type Here.... "
            className="h-52 my-3 rounded-lg border border-black/10 p-4 bg-[#e6e7e8]"
            required
            maxLength={500}
          />
          <button
            type="submit"
            className="items-center justify-center text-white h-[3rem] w-[8rem] bg-gray-900 border rounded-lg outline-none hover:bg-gray-950"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </ScreenContainer>
  );
}
