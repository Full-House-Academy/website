export default function About() {
  return (
    <section
      id="about"
      className="relative bg-whiteColor px-6 md:px-12 lg:px-24 py-20"
    >
      {/* Section Heading */}
      <h2 className="w-fit mx-auto relative mb-12 font-extrabold uppercase text-4xl tracking-wide text-primaryColor text-shadow-lg/40">
        <span className="px-6 py-2 border-y-4 border-primaryColor/70 bg-whiteColor shadow-sm">
          About Us
        </span>
        {/* Decorative Underline */}
        <div className="absolute left-1/2 -bottom-3 w-24 h-[3px] -translate-x-1/2 bg-gradient-to-r from-primaryColor to-tertiaryColor rounded-full"></div>
      </h2>

      {/* Content Wrapper */}
      <div
        className="flex flex-col gap-8 text-left text-xl md:text-2xl 
        max-w-4xl mx-auto leading-relaxed text-gray-700 opacity-0 animate-fadeIn"
      >
        <p>
          We are a professional real estate training company, built on extensive
          research, hands-on experience, and a deep understanding of the
          industry. Our mission is to empower individuals with the skills,
          knowledge, and confidence to excel in every aspect of real estate.
        </p>

        <p>
          From A to Z, we cover everything—Cold Calling, Transaction
          Coordination, Lead Management, Acquisitions, Dispositions, and more.
          Our courses are comprehensive, practical, and results-driven, ensuring
          that our students not only learn but thrive in the competitive real
          estate market.
        </p>

        <p>
          At our core, we combine expert insights, real-world strategies, and
          cutting-edge techniques to deliver high-level training that transforms
          beginners into professionals and professionals into industry leaders.
        </p>

        <p className="font-semibold text-gray-900 text-2xl">
          Your journey to real estate mastery starts here.
        </p>
      </div>
    </section>
  );
}
