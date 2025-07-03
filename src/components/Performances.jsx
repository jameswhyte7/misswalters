export default function Performances() {
  return (
    <section className="w-full py-10 bg-black text-white">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-24">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Recent Performances
        </h2>

        <div className="">
          {/* Event Card */}
          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 hover:bg-[#515151]/10 transition border-t border-[#DDDDDD]">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-wider opacity-60">
                Jul 4, 2025
              </p>
              <h3 className="text-xl font-semibold mt-1">
                Urban Gospel Music Awards
              </h3>
              <p className="text-sm mt-1 opacity-80">Accra, GHANA</p>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-block px-5 py-2 borde rounded border-[#404040] hover:bg-[#404040] bg-[#404040] transition"
            >
              Book Miss Walters
            </a>
          </div>

          {/* Event Card */}
          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 hover:bg-[#515151]/10 transition border-y border-[#DDDDDD]">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-wider opacity-60">
                Jul 26, 2025
              </p>
              <h3 className="text-xl font-semibold mt-1">Praise Achievement Awards</h3>
              <p className="text-sm mt-1 opacity-80">Accra, GHANA</p>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-block px-5 py-2 rounded border border-[#404040] hover:bg-[#404040] bg-[#404040] transition"
            >
              Book Miss Walters
            </a>
          </div>

          {/* Event Card */}
          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 hover:bg-[#515151]/10 transition border-b border-[#DDDDDD]">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-wider opacity-60">
                Sep 12–13, 2025
              </p>
              <h3 className="text-xl font-semibold mt-1">
                Urban Gospel Festival 2025
              </h3>
              <p className="text-sm mt-1 opacity-80">Accra, GHANA</p>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-block px-5 py-2 rounded border border-[#404040] hover:bg-[#404040] bg-[#404040] transition"
            >
              Book Miss Walters
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
