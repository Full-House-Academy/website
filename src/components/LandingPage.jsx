export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Wallpaper */}
      <img
        src="/src/data/landing.png"
        alt="Landing Photo"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Sliding Text Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Title */}
        <h1
          className="
            text-quaternaryColor text-shadow-lg/30 
            text-4xl sm:text-5xl md:text-6xl 
            font-extrabold tracking-wide
            drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]
            opacity-0 translate-y-10 animate-slideUp
          "
        >
          Apply • Learn • Earn
        </h1>

        {/* Subtitle */}
        <p
          className="
            text-quaternaryColor text-shadow-lg/30 
            text-lg sm:text-xl md:text-2xl 
            font-medium mt-4 max-w-2xl
            drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]
            opacity-0 translate-y-10 animate-slideUpDelay
          "
        >
          Comprehensive real estate courses for every skill level
        </p>
      </div>
    </div>
  );
}
