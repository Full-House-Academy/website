import { useState } from "react";
import emailjs from "emailjs-com";

export default function Courses() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [formError, setFormError] = useState({
    name: false,
    phone: false,
    email: false,
  });
  const [popUp, setPopUp] = useState({ type: "", message: "" });

  const openPopup = (courseName) => {
    setSelectedCourse(courseName);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setForm({ name: "", phone: "", email: "" });
  };

  const closeAnimatedPopup = () => {
    setPopUp((prev) => ({ ...prev, closing: true }));

    setTimeout(() => {
      setPopUp({ type: "", message: "", closing: false });
    }, 250);
  };

  const handleApply = () => {
    let errors = { name: false, phone: false, email: false };
    let hasError = false;

    // NAME VALIDATION
    const nameRegex = /^[A-Za-z\s]{3,30}$/;
    if (!nameRegex.test(form.name)) {
      errors.name = "Name must be 3–30 letters only (no numbers or symbols).";
      hasError = true;
    }

    // PHONE VALIDATION
    const phoneRegex = /^[0-9]{8,30}$/;
    if (!phoneRegex.test(form.phone)) {
      errors.phone =
        "Phone must be numbers only and between 8 to 30 digits long.";
      hasError = true;
    }

    // EMAIL VALIDATION
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(form.email) || !form.email.includes(".com")) {
      errors.email = "Please enter a valid email address.";
      hasError = true;
    }

    // If any error exists
    if (hasError) {
      setFormError(errors);

      setTimeout(() => {
        setFormError({ name: false, phone: false, email: false });
      }, 5000);

      return;
    }

    // --- send email using EmailJS ---
    emailjs
      .send(
        "service_cgylv8l",
        "template_9vazg7o",
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          course: selectedCourse,
        },
        "x-0Qu9p8ND5rUtFuY"
      )
      .then(
        () => {
          setPopUp({
            type: "information",
            message: "Application sent successfully!",
            closing: false,
          });
          closePopup();
        },
        (error) => {
          setPopUp({
            type: "error",
            message: "Failed to send your application. Try again.",
            closing: false,
          });
        }
      );
  };

  return (
    <>
      {/* MAIN COURSES SECTION */}
      <div
        id="courses"
        className="text-center bg-whiteColor px-6 md:px-12 lg:px-24 py-12"
      >
        <h2 className="w-fit mx-auto relative mb-12 font-extrabold uppercase text-4xl tracking-wide text-primaryColor text-shadow-lg/40">
          <span className="px-6 py-2 border-y-4 border-primaryColor/70 bg-whiteColor shadow-sm">
            Courses
          </span>
          <div className="absolute left-1/2 -bottom-3 w-24 h-[3px] -translate-x-1/2 bg-gradient-to-r from-primaryColor to-tertiaryColor rounded-full"></div>
        </h2>

        <p className="text-xl md:text-2xl w-full md:w-[85%] lg:w-[70%] mx-auto leading-relaxed text-gray-700">
          Here’s the truth: there are plenty of real estate courses, but very
          few actually bridge the language gap or simulate the real experience.
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10">
          {/* CARD 1 */}
          <div className="relative group w-full md:w-[45%] rounded-2xl p-[2px] bg-gradient-to-br from-primaryColor via-tertiaryColor to-secondaryColor shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
            <div className="bg-whiteColor rounded-2xl p-6 md:p-8 group-hover:bg-slate-200 transition-colors duration-300">
              <div className="h-[100px] w-fit mx-auto mb-4">
                <img
                  className="h-full drop-shadow-md"
                  src="plan-1.png"
                  alt=""
                />
              </div>

              <h3 className="w-fit mx-auto uppercase text-2xl md:text-3xl font-bold text-primaryColor tracking-wide text-shadow-lg/30">
                Call4cash
              </h3>

              <h4 className="font-bold w-fit mx-auto uppercase text-lg md:text-xl text-primaryColor opacity-90 mt-2 text-shadow-lg/20">
                From cold to gold
              </h4>

              <ul className="text-left mt-6 list-disc pl-5 space-y-2 text-gray-700 text-lg">
                <li>Train absolute beginners with weak English.</li>
                <li>Improve conversational real estate English.</li>
                <li>Teach objections, tone, and real roleplays.</li>
                <li>Trainer + English instructor combined system.</li>
                <li>Certification + Job placement.</li>
              </ul>

              <button
                onClick={() => openPopup("Call4Cash")}
                className="mx-auto mt-8 block text-lg md:text-xl font-semibold px-6 py-2 
                rounded-xl bg-primaryColor text-secondaryColor border-2 border-primaryColor
                shadow-md hover:bg-transparent hover:text-primaryColor transition-all duration-300 cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative group w-full md:w-[45%] rounded-2xl p-[2px] bg-gradient-to-br from-primaryColor via-tertiaryColor to-secondaryColor shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
            <div className="bg-whiteColor rounded-2xl p-6 md:p-8 group-hover:bg-slate-200 transition-colors duration-300">
              <div className="h-[100px] w-fit mx-auto mb-4">
                <img
                  className="h-full drop-shadow-md"
                  src="plan-2.png"
                  alt=""
                />
              </div>

              <h3 className="w-fit mx-auto uppercase text-2xl md:text-3xl font-bold text-primaryColor tracking-wide text-shadow-lg/30">
                Deals4win
              </h3>

              <h4 className="font-bold w-fit mx-auto uppercase text-lg md:text-xl text-primaryColor opacity-90 mt-2 text-shadow-lg/20">
                Close. claim. conquer.
              </h4>

              <ul className="text-left mt-6 list-disc pl-5 space-y-2 text-gray-700 text-lg">
                <li>Upskill callers into Acquisition Managers.</li>
                <li>Learn negotiation, follow-ups, and deal structuring.</li>
                <li>Understand REAL U.S. acquisition work.</li>
                <li>Certified Acquisition Manager qualification.</li>
              </ul>

              <button
                onClick={() => openPopup("Deals4Win")}
                className="mx-auto mt-8 block text-lg md:text-xl font-semibold px-6 py-2 
                rounded-xl bg-primaryColor text-secondaryColor border-2 border-primaryColor
                shadow-md hover:bg-transparent hover:text-primaryColor transition-all duration-300 cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[100] p-4">
          <div className="bg-whiteColor w-full max-w-lg rounded-2xl p-6 shadow-2xl">
            <h4 className="text-2xl font-bold text-primaryColor mb-4 text-center">
              Apply for {selectedCourse}
            </h4>

            <div className="flex flex-col gap-4">
              {formError.name && (
                <span className="text-red-600 text-sm -mb-4 ml-2">
                  {formError.name}
                </span>
              )}
              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-xl"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {formError.phone && (
                <span className="text-red-600 text-sm -mb-4 ml-2">
                  {formError.phone}
                </span>
              )}
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-3 rounded-xl"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              {formError.email && (
                <span className="text-red-600 text-sm -mb-4 ml-2">
                  {formError.email}
                </span>
              )}
              <input
                type="email"
                placeholder="Email Address"
                className="border p-3 rounded-xl"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <button
              onClick={handleApply}
              className="w-full mt-6 py-3 rounded-xl bg-primaryColor text-secondaryColor font-bold hover:bg-transparent 
              hover:text-primaryColor border-2 border-primaryColor transition-all cursor-pointer"
            >
              Apply
            </button>

            <p
              onClick={closePopup}
              className="text-center mt-4 text-sm text-gray-500 cursor-pointer hover:underline"
            >
              Cancel
            </p>
          </div>
        </div>
      )}

      {/* GLOBAL MESSAGE POPUP */}
      {popUp.message && (
        <div
          className={`fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 transition-opacity duration-200 ${
            popUp.closing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className={`bg-whiteColor w-full max-w-md rounded-2xl p-6 shadow-2xl transform transition-all duration-200 ${
              popUp.closing ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <h2
              className={`text-2xl font-bold text-center mb-4 ${
                popUp.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {popUp.type}
            </h2>

            <p className="text-gray-700 text-center mb-6">{popUp.message}</p>

            <button
              onClick={closeAnimatedPopup}
              className="mx-auto block px-6 py-2 rounded-xl bg-primaryColor text-secondaryColor 
              hover:bg-transparent hover:text-primaryColor border-2 border-primaryColor transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
