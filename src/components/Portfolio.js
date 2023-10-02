import React from "react";
import NssGecrUse from "../assets/portfolio/NssGecrUse.jpg";
import CodePenUse from "../assets/portfolio/CodePenUse.png";
import HousePricePredictionUse from "../assets/portfolio/HousePricePredictionUse.png";
import PortFolioUse from "../assets/portfolio/PortFolioUse.png";
import NewPortFolioUse from "../assets/portfolio/NewPortFolioUse.png";
import ForestFireUse from "../assets/portfolio/ForestFireUse.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: NssGecrUse,
      demoLink: "https://example.com/demo1",
      codeLink: "https://github.com/rajattiwari010/GECR_NSS",
    },
    {
      id: 2,
      src: CodePenUse,
      demoLink: "https://codepen-six.vercel.app/",
      codeLink: "https://github.com/rajattiwari010/CodePenTWJ",
    },
    {
      id: 3,
      src: HousePricePredictionUse,
      demoLink: "https://example.com/demo3",
      codeLink: "https://example.com/code3",
    },
    {
      id: 4,
      src: PortFolioUse,
      demoLink: "https://example.com/demo4",
      codeLink: "https://github.com/rajattiwari010/Rajat-Portfolio",
    },
    {
      id: 5,
      src: NewPortFolioUse,
      demoLink: "https://example.com/demo5",
      codeLink: "https://example.com/code5",
    },
    {
      id: 6,
      src: ForestFireUse,
      demoLink: "https://example.com/demo6",
      codeLink: "https://github.com/rajattiwari010/Forest_prevention_model_ML",
    },
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeClick(codeLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
