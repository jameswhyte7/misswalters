import React from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxSection = () => (
  <section className="relative h-screen overflow-hidden bg-black">
    <Parallax speed={-20}>
      <img
        src="/mw_parallax8.jpg"
        alt="Background"
        className="w-full h-[150vh] object-cover"
        style={{
          // Shift image down so the lower part shows more
          transform: "translateY(-10vh)",
          objectPosition: "center center",
        }}
      />
    </Parallax>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-95"></div>

    {/* Quote Content */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="border border-white p-8 sm:p-16 flex flex-col sm:flex-row gap-4 text-lg sm:text-2xl leading-[1.75] text-white">
          {/* Left Quote Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            className="shrink-0 block"
          >
            <path
              fill="#FFF"
              d="M30.5180534,0 L30.5180534,5.65149137 C29.010989,6.50549451 27.8681319,7.56043956 27.0894819,8.81632653 C26.310832,10.0722135 25.7205651,11.4034537 25.3186813,12.8100471 C24.9167975,14.2166405 24.7158556,15.7739403 24.7158556,17.4819466 L30.5180534,17.4819466 L30.5180534,29.8398744 L18.1601256,29.8398744 L18.1601256,22.1538462 C18.1601256,17.5321821 18.599686,14.0156986 19.4788069,11.6043956 C20.3579278,9.19309262 21.7017268,6.97017268 23.5102041,4.93563579 C25.3186813,2.9010989 27.6546311,1.25588697 30.5180534,0 Z M12.3579278,0 L12.3579278,5.65149137 C10.8508634,6.50549451 9.69544741,7.56043956 8.89167975,8.81632653 C8.08791209,10.0722135 7.48508634,11.4034537 7.08320251,12.8100471 C6.68131868,14.2166405 6.48037677,15.7739403 6.48037677,17.4819466 L12.3579278,17.4819466 L12.3579278,29.8398744 L0,29.8398744 L0,22.1538462 C0,17.5321821 0.43956044,14.0156986 1.31868132,11.6043956 C2.1978022,9.19309262 3.54160126,6.97017268 5.35007849,4.93563579 C7.15855573,2.9010989 9.49450549,1.25588697 12.3579278,0 Z"
              transform="translate(0 .345)"
            />
          </svg>

          {/* Text */}
          <div>
            <p>
              Linda Mireku Walters, known as Miss Walters, is a trailblazing
              urban gospel artist and rapper from Ghana. She blends hip-hop
              energy with the gospel, pioneering women in Ghana’s rap gospel
              scene.
            </p>
          </div>

          {/* Right Quote Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            className="shrink-0 block self-end rotate-180"
          >
            <path
              fill="#FFF"
              d="M30.5180534,0 L30.5180534,5.65149137 C29.010989,6.50549451 27.8681319,7.56043956 27.0894819,8.81632653 C26.310832,10.0722135 25.7205651,11.4034537 25.3186813,12.8100471 C24.9167975,14.2166405 24.7158556,15.7739403 24.7158556,17.4819466 L30.5180534,17.4819466 L30.5180534,29.8398744 L18.1601256,29.8398744 L18.1601256,22.1538462 C18.1601256,17.5321821 18.599686,14.0156986 19.4788069,11.6043956 C20.3579278,9.19309262 21.7017268,6.97017268 23.5102041,4.93563579 C25.3186813,2.9010989 27.6546311,1.25588697 30.5180534,0 Z M12.3579278,0 L12.3579278,5.65149137 C10.8508634,6.50549451 9.69544741,7.56043956 8.89167975,8.81632653 C8.08791209,10.0722135 7.48508634,11.4034537 7.08320251,12.8100471 C6.68131868,14.2166405 6.48037677,15.7739403 6.48037677,17.4819466 L12.3579278,17.4819466 L12.3579278,29.8398744 L0,29.8398744 L0,22.1538462 C0,17.5321821 0.43956044,14.0156986 1.31868132,11.6043956 C2.1978022,9.19309262 3.54160126,6.97017268 5.35007849,4.93563579 C7.15855573,2.9010989 9.49450549,1.25588697 12.3579278,0 Z"
              transform="translate(0 .345)"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default ParallaxSection;
