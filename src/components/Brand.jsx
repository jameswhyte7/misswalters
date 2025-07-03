import React from "react";
import SpotifyPlaylist from "./SpotifyPlaylist";
import { projects } from "../assets/assets";

const Brand = () => {
  return (
    <section className="relative bg-black grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-24 pb-14 pt-8">
      {/* Playlist column */}
      <div className="lg:col-span-1 relative">
        <div className="sticky top-4">
          <div className="bg-black rounded-[12px]">
            <h2 className="bg-black text-white font-bold text-2xl z-10 py-4 px-4">
              Playlist
            </h2>
            <div className="pb-0.5">
              <SpotifyPlaylist />
            </div>
          </div>
        </div>
      </div>

      {/* Projects column */}
      <div className="lg:col-span-2 bg-black rounded-[12px] flex flex-col">
        <h2 className="bg-black text-white font-bold text-2xl z-10 py-4 px-4">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-3 rounded-[12px] cursor-pointer hover:bg-[#515151]/10 transition"
            >
              <img
                src={projects.project1}
                alt={`Project ${i + 1}`}
                className="w-full h-44 object-cover rounded-md shadow-md"
              />
              <p className="text-white font-bold mt-2 mb-1">Project Title {i + 1}</p>
              <p className="text-slate-200 text-sm">
                Short description of the project.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
