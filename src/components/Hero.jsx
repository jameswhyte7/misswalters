import React, { useRef, useState, useEffect } from "react";
import { FiVolume2, FiVolumeX, FiArrowRight, FiPlay } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const overlayTextOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const overlayTextY = useTransform(scrollYProgress, [0.2, 0.4], [40, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    const muteState = !isMuted;
    if (videoRef.current) {
      videoRef.current.muted = muteState;
      setIsMuted(muteState);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden text-white"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover object-top md:object-center z-[-2]"
        src="/walters_green.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Animated Full Black Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black z-[-1]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Scroll-Fade Text */}
      <motion.div
        className="absolute inset-0 z-0 flex items-end justify-center px-4 sm:px-6 lg:px-24 text-center"
        style={{
          opacity: overlayTextOpacity,
          y: overlayTextY,
          pointerEvents: "none",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl pb-10 font-extrabold tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          GOD LOVES YOU
        </motion.h2>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-24 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          MISS WALTERS
        </h1>

        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          Top Female in Gospel Hip-Hop. Bold. Unapologetic for God.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
  <button className="flex items-center justify-center gap-3 bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition">
    <FiPlay className="text-xl" />
    Listen Now
  </button>
  <button className="flex items-center justify-center gap-3 bg-[#1D4ED8]/90 text-white font-semibold py-3 px-6 rounded-md hover:opacity-80 transition group relative">
    Book Miss Walters
    <FiArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300" />
  </button>
</div>

      </motion.div>

      {/* Mute/Unmute */}
      <button
        onClick={toggleMute}
        title={isMuted ? "Unmute" : "Mute"
        }
        className="absolute bottom-16 right-[0.9rem] md:right-16 lg:right-24 z-20 hover:bg-[#ffffff1a] text-white p-1 rounded-full backdrop-blur-lg transition-all duration-300 border"
      >
        {isMuted ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
      </button>
    </section>
  );
};

export default Hero;
