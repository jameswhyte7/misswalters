import React from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  const principles = [
    "01 Fire Ops (Yesu Dea)",
    "02 Christ Energy",
    "03 Down By The River",
    "04 I can",
    "05 Jesus The Greatest",
    "06 Down By the The River",
    "07 Cos 90",
    "08 Better Life ",
    "09 Straight Outta RoyalHouse",
    "10 I Got God",
    "11 You Are All I Need",
    "12 Drown",
    "13 Back to Back",
    "13 Faceless",
  ];

  return (
    <header className="bg-black w-full overflow-hidden pt-4">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-24 overflow-hidden">
        <Marquee
          gradient={false}
          speed={150}
          pauseOnHover={false}
          className="py-2"
        >
          {principles.map((text, i) => {
            const [index, ...rest] = text.split(" ");
            return (
              <p
                key={i}
                className="mx-4 text-base sm:text-base md:text-lg font-medium text-gray-800 whitespace-nowrap flex items-center gap-2"
              >
                <span className="text-gray-800">{index}</span>
                {rest.join(" ")}
                <span className="text-gray-600 font-light ml-6">//</span>
              </p>
            );
          })}
        </Marquee>
      </div>
    </header>
  );
};

export default Header;
