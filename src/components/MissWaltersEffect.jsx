import React from "react";
import { motion } from "framer-motion";

const words = ["Missssss", "Walters"];

const MissWaltersEffect = () => {
  return (
    <div className="flex w-full justify-center bg-black py-20 overflow-hidden">
      {/* Repeat the animated group 3 times */}
      <div className="flex gap-10">
        {Array.from({ length: 3 }).map((_, colIndex) => (
          <div key={colIndex} className="relative h-[110px] w-[100px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex flex-col items-center justify-center text-white text-[100px] font-bold uppercase pointer-events-auto cursor-pointer"
                initial={{ y: 0 }}
                whileHover={{ y: 50 }}
                transition={{ duration: 0.3 + i * 0.05 }}
                style={{
                  rotate: "-90deg",
                  transformOrigin: "left center",
                  opacity: 0.2 + i * 0.1,
                }}
              >
                {words.map((word, index) => (
                  <span key={index} className="leading-none">
                    {word}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissWaltersEffect;
