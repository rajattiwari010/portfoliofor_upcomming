import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello there! I am a passionate and dedicated software developer with a profound love for technology and innovation. My journey in the world of tech began with a strong foundation in web development, mastering the trio of HTML, CSS, and JavaScript. With an insatiable curiosity, I delved deeper into the realms of modern web technologies, specializing in React.js and Node.js to create seamless and interactive user experiences. During my enriching internships at IIIT Naya Raipur, I honed my skills in machine learning and deep learning, exploring the fascinating intersection of artificial intelligence and human-centric design. These experiences not only enhanced my technical expertise but also instilled in me a deep appreciation for the power of innovation to transform ideas into impactful solutions.
        </p>

        <br />

        <p className="text-xl">
        Driven by my passion for creating meaningful connections between humans and technology, I am on a mission to explore the endless possibilities that emerge at the crossroads of creativity and code. My unique blend of skills, coupled with a strong foundation in machine learning and web development, empowers me to craft cutting-edge solutions that resonate with users on a profound level. I thrive on challenges, constantly seeking opportunities to learn and grow, and I am excited to contribute my skills and enthusiasm to the ever-evolving tech landscape. Join me on this exciting journey, and let’s turn visionary ideas into reality together!
        </p>
      </div>
    </div>
  );
};

export default About;