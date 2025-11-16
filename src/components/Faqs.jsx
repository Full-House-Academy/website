import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Do I need any experience to join the program?",
      a: `No, you don’t. Our Stage 1 (Call4Cash) program starts from absolute zero.
      We train you on English, communication, cold calling, objections, and real simulations.
      All you need is commitment and consistency — we’ll handle the rest.`,
    },
    {
      q: "My English is weak… can I still join?",
      a: `Yes. We specialize in training beginners with weak or basic English.
      Our English training is not academic — it’s focused on real conversations used in U.S. real estate.`,
    },
    {
      q: "What equipment do I need for the course?",
      a: `You only need:
      • A laptop (4 GB RAM minimum)
      • Stable internet
      • A good headset
      • A quiet environment for practice`,
    },
    {
      q: "Will I be training with real instructors or just recorded videos?",
      a: `You will train with real experts who work daily in the U.S. market:
      • Live classes
      • Real-time coaching
      • Feedback sessions
      • Practical tasks
      • Roleplays & simulations`,
    },
    {
      q: "Do you offer job placement after the course?",
      a: `Yes. We help you get placed based on your level and performance.`,
    },
    {
      q: "What makes your training different from other courses?",
      a: `• Real estate English  
      • Real roleplays  
      • Real instructor feedback  
      • Real CRM tasks  
      • Real demo calls  
      • Real market experience  
      • Real job placement support`,
    },
    {
      q: "How do I know if this career is right for me?",
      a: `If you like talking to people, want a remote job, want high long-term income, 
      and are willing to learn… you're a perfect fit.`,
    },
    {
      q: "What if I am nervous or shy on calls?",
      a: `No problem — most beginners are.  
      We train you with:
      • Confidence drills  
      • Tone training  
      • Roleplay practice  
      • Real feedback  
      • English support`,
    },
    {
      q: "How are students evaluated?",
      a: `Through:
      • English assessments  
      • Live roleplays  
      • Objection handling  
      • Demo calls  
      • CRM tasks  
      • Performance reviews`,
    },
    {
      q: "What if I already work as a Cold Caller?",
      a: `You can skip Stage 1 and join Stage 2:
      • Negotiation  
      • Deal structuring  
      • Follow-ups  
      • Pipeline & CRM mastery  
      • Psychology  
      • Demo calls`,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative bg-whiteColor px-6 md:px-12 lg:px-24 py-20"
    >
      {/* Section Heading */}
      <h2 className="w-fit mx-auto relative mb-12 font-extrabold text-4xl tracking-wide text-primaryColor text-shadow-lg/40">
        <span className="px-6 py-2 border-y-4 border-primaryColor/70 bg-whiteColor shadow-sm">
          FAQs
        </span>
        <div className="absolute left-1/2 -bottom-3 w-24 h-[3px] -translate-x-1/2 bg-gradient-to-r from-primaryColor to-tertiaryColor rounded-full"></div>
      </h2>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border-2 border-primaryColor/30 rounded-xl shadow-md p-4 md:p-6 bg-white cursor-pointer transition-all"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-semibold text-tertiaryColor">
                {item.q}
              </h3>

              {openIndex === index ? (
                <FontAwesomeIcon
                  icon={faAngleUp}
                  className="text-tertiaryColor text-xl"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-tertiaryColor text-xl"
                />
              )}
            </div>

            {/* Answer */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-[500px] mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 whitespace-pre-line text-lg md:text-xl leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
