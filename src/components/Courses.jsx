import { useState } from "react";
import emailjs from "emailjs-com";

export default function Courses() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  
  const nameRegex = /^[A-Za-z\s]{3,30}$/;
  const phoneRegex = /^[0-9]{8,30}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  const cityRegex = /^[A-Za-z\s]{3,30}$/;

  // FORM DATA
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    english: 1,
    knowledge: 1,
    notes: "",
  });

  // ERROR STATE
  const [formError, setFormError] = useState({});
  const [popUp, setPopUp] = useState({ type: "", message: "" });

  const openPopup = (courseName) => {
    setSelectedCourse(courseName);
    setShowPopup(true);
    setStep(1); // always start at step 1
    setForm({
      name: "",
      phone: "",
      email: "",
      city: "",
      english: 1, // default Level 1
      knowledge: 1, // default Level 1
      notes: "",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    setStep(1);
    setForm({
      name: "",
      phone: "",
      email: "",
      city: "",
      english: 1,
      knowledge: 1,
      notes: "",
    });
    setFormError({});
  };

  const closeAnimatedPopup = () => {
    setPopUp((prev) => ({ ...prev, closing: true }));
    setTimeout(() => {
      setPopUp({ type: "", message: "", closing: false });
    }, 250);
  };

  // ---------------------------
  // VALIDATIONS FOR STEP 1
  // ---------------------------
  const validateStep1 = () => {
    let errors = {};
    let valid = true;

    if (!nameRegex.test(form.name)) {
      errors.name = "Name must be 3–30 letters only.";
      valid = false;
    }

    if (!phoneRegex.test(form.phone)) {
      errors.phone = "Phone must be numbers only, 8–30 digits.";
      valid = false;
    }

    if (!emailRegex.test(form.email) || !form.email.includes(".com")) {
      errors.email = "Please enter a valid email.";
      valid = false;
    }

    if (!cityRegex.test(form.city)) {
      errors.city = "City must be 3–30 letters only.";
      valid = false;
    }

    setFormError(errors);

    if (!valid) {
      setTimeout(() => setFormError({}), 4000);
    }

    return valid;
  };

  // NEXT BUTTON (STEP 1)
  const handleNext = () => {
    if (!validateStep1()) return;

    // Only go to Step 2 if course is Call4Cash
    if (selectedCourse.toLowerCase() === "call4cash") {
      setStep(2);
    } else {
      // For Deals4Win, submit immediately
      handleSubmit();
    }
  };

  // ---------------------------
  // SUBMIT FINAL FORM
  // ---------------------------
  const handleSubmit = () => {
    // For Call4Cash, validate Step 2
    if (selectedCourse.toLowerCase() === "call4cash") {
      if (!form.english || !form.knowledge || form.notes.length > 100) {
        setFormError({
          english: !form.english ? "Please select English level." : false,
          knowledge: !form.knowledge ? "Please select field knowledge." : false,
          notes:
            form.notes.length > 100
              ? "Maximum allowed characters is 100"
              : false,
        });

        setTimeout(() => setFormError({}), 4000);
        return;
      }
    }

    // Send data to emailjs for both plans
    emailjs
      .send(
        "service_cgylv8l",
        "template_9vazg7o",
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          city: form.city,
          english: form.english,
          knowledge: form.knowledge,
          course: selectedCourse,
          notes: form.notes,
        },
        "x-0Qu9p8ND5rUtFuY"
      )
      .then(
        () => {
          setPopUp({
            type: "Info",
            message:
              "You’ve just taken the first step toward your success.\nWe’ll contact you soon — stay ready.",
            closing: false,
          });
          closePopup();
        },
        () => {
          setPopUp({
            type: "Error",
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
                <li>Upskill cold callers into Acquisition Managers.</li>
                <li>Learn negotiation, follow-ups, and deal structuring.</li>
                <li>Understand REAL U.S. acquisition work.</li>
                <li>Build a winning pipeline with advanced CRM strategies.</li>
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
            <h4 className="text-2xl font-bold text-primaryColor mb-4 text-center text-shadow-lg/20">
              Apply for {selectedCourse}
            </h4>

            {/* STEP 1 --------------------------- */}
            {step === 1 && (
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
                  onChange={(e) => {
                    var inputValue = e.target.value;
                    if (!/^[A-Za-z\s]{0,30}$/.test(inputValue)) {
                      setFormError({
                        ...formError,
                        name: "Name must be 3–30 letters only.",
                      });
                      setTimeout(() => setFormError({}), 3000);
                      return;
                    }
                    setForm({ ...form, name: inputValue });
                  }}
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
                  onChange={(e) => {
                    var inputValue = e.target.value;
                    if (!/^[0-9]{0,30}$/.test(inputValue)) {
                      setFormError({
                        ...formError,
                        phone: "Phone must be numbers only, 8–30 digits.",
                      });
                      setTimeout(() => setFormError({}), 3000);
                      return;
                    }
                    setForm({ ...form, phone: inputValue });
                  }}
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
                  onChange={(e) => {
                    var inputValue = e.target.value;
                    if (inputValue.length > 50) {
                      setFormError({
                        ...formError,
                        email: "Maximum allowed characters is 50",
                      });
                      setTimeout(() => setFormError({}), 3000);
                      return;
                    }
                    setForm({ ...form, email: inputValue });
                  }}
                />

                {formError.city && (
                  <span className="text-red-600 text-sm -mb-4 ml-2">
                    {formError.city}
                  </span>
                )}
                <input
                  type="text"
                  placeholder="City"
                  className="border p-3 rounded-xl"
                  value={form.city}
                  onChange={(e) => {
                    var inputValue = e.target.value;
                    if (!/^[A-Za-z\s]{0,30}$/.test(inputValue)) {
                      setFormError({
                        ...formError,
                        city: "City must be 3–30 letters only.",
                      });
                      setTimeout(() => setFormError({}), 3000);
                      return;
                    }
                    setForm({ ...form, city: inputValue });
                  }}
                />

                <button
                  onClick={handleNext}
                  className="w-full mt-6 py-3 rounded-xl bg-primaryColor text-secondaryColor font-bold hover:bg-transparent 
                  hover:text-primaryColor border-2 border-primaryColor transition-all cursor-pointer"
                >
                  {selectedCourse === "Call4Cash" ? "Next" : "Submit"}
                </button>
              </div>
            )}

            {/* STEP 2 --------------------------- */}
            {step === 2 && (
              <div className="flex flex-col gap-6">
                {/* ---------------- ENGLISH LEVEL ---------------- */}
                <div>
                  <h3 className="text-xl font-semibold text-primaryColor mb-2 text-shadow-lg/20">
                    English Level
                  </h3>

                  {formError.english && (
                    <span className="text-red-600 text-sm ml-2">
                      {formError.english}
                    </span>
                  )}

                  {/* RADIO GROUP */}
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-3">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <label
                        key={num}
                        htmlFor={`eng-${num}`}
                        className="flex items-center gap-1 cursor-pointer"
                      >
                        <input
                          type="radio"
                          id={`eng-${num}`}
                          name="english"
                          value={num}
                          checked={form.english === num}
                          onChange={() => setForm({ ...form, english: num })}
                          className="w-5 h-5"
                        />
                        <span>Level {num}</span>
                      </label>
                    ))}
                  </div>

                  {/* DESCRIPTION */}
                  {form.english && (
                    <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                      {form.english === 1 && (
                        <div className="fade-in mt-4 text-sm text-gray-600 leading-relaxed">
                          <p className="font-semibold">Level 1: Beginner</p>
                          <p>
                            Knows very basic words, cannot speak or write more
                            than short phrases.
                          </p>
                          <p className="text-gray-500 mt-1">
                            أعرف كلمات بسيطة جداً… مش قادر أتكلم أو أكتب إلا
                            عبارات قصيرة جداً
                          </p>
                        </div>
                      )}

                      {form.english === 2 && (
                        <div className="fade-in mt-4 text-sm text-gray-600 leading-relaxed">
                          <p className="font-semibold">Level 2: Basic</p>
                          <p>
                            Knows basic academic words, understands simple
                            texts.
                          </p>
                          <p className="text-gray-500 mt-1">
                            أعرف الكلمات الأكاديمية الأساسية… لكني مش قادر أتكلم
                            بطلاقة
                          </p>
                        </div>
                      )}

                      {form.english === 3 && (
                        <div className="fade-in mt-4 text-sm text-gray-600 leading-relaxed">
                          <p className="font-semibold">Level 3: Intermediate</p>
                          <p>
                            Can speak/write simple sentences, understands daily
                            conversations.
                          </p>
                          <p className="text-gray-500 mt-1">
                            أقدر أتكلم وأكتب جمل بسيطة… ومحتاج تدريب للمواقف
                            المعقدة
                          </p>
                        </div>
                      )}

                      {form.english === 4 && (
                        <div className="fade-in mt-4 text-sm text-gray-600 leading-relaxed">
                          <p className="font-semibold">Level 4: Advanced</p>
                          <p>
                            Communicates almost fluently, understands work
                            terminology.
                          </p>
                          <p className="text-gray-500 mt-1">
                            أتواصل بطلاقة تقريباً… وأقدر أتعامل مع المتحدثين
                            الأصليين
                          </p>
                        </div>
                      )}

                      {form.english === 5 && (
                        <div className="fade-in mt-4 text-sm text-gray-600 leading-relaxed">
                          <p className="font-semibold">Level 5: Fluent</p>
                          <p>
                            Fluent speaking/writing, has real-life experience.
                          </p>
                          <p className="text-gray-500 mt-1">
                            أتكلم وأكتب بطلاقة… وعندي خبرة عملية في مواقف حقيقية
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {/* ---------------- FIELD KNOWLEDGE ---------------- */}
                <div>
                  <h3 className="text-xl font-semibold text-primaryColor mb-2 text-shadow-lg/20">
                    Field Knowledge
                  </h3>

                  {formError.knowledge && (
                    <span className="text-red-600 text-sm ml-2">
                      {formError.knowledge}
                    </span>
                  )}

                  {/* RADIO GROUP */}
                  <div className="grid grid-cols-3 md:grid-cols-4  gap-4 mt-3">
                    {[1, 2, 3, 4].map((num) => (
                      <label
                        key={num}
                        htmlFor={`knowledge-${num}`}
                        className="flex items-center gap-1 cursor-pointer"
                      >
                        <input
                          type="radio"
                          id={`knowledge-${num}`}
                          name="knowledge"
                          value={num}
                          checked={form.knowledge === num}
                          onChange={() => setForm({ ...form, knowledge: num })}
                          className="w-5 h-5"
                        />
                        <span>Level {num}</span>
                      </label>
                    ))}
                  </div>

                  {/* DESCRIPTION */}
                  {form.knowledge && (
                    <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                      {form.knowledge === 1 && (
                        <div className="fade-in mt-4 text-sm text-gray-600 leading-relaxed">
                          <p className="font-semibold">Level 1 – None</p>
                          <p>
                            Knows nothing about cold calling in real estate.
                          </p>
                          <p className="text-gray-500 mt-1">
                            ما أعرفش حاجة عن الـ Cold Calling
                          </p>
                        </div>
                      )}

                      {form.knowledge === 2 && (
                        <div className="fade-in mt-4 text-sm text-gray-600 leading-relaxed">
                          <p className="font-semibold">Level 2 – Basic</p>
                          <p>Heard/read a little, no practical experience.</p>
                          <p className="text-gray-500 mt-1">
                            سمعت أو قرأت معلومات بسيطة… لكن بدون خبرة عملية
                          </p>
                        </div>
                      )}

                      {form.knowledge === 3 && (
                        <div className="fade-in mt-4 text-sm text-gray-600 leading-relaxed">
                          <p className="font-semibold">
                            Level 3 – Some Experience
                          </p>
                          <p>Watched someone working, knows basic terms.</p>
                          <p className="text-gray-500 mt-1">
                            اتفرجت على حد بيشتغل… وأعرف المصطلحات الأساسية
                          </p>
                        </div>
                      )}

                      {form.knowledge === 4 && (
                        <div className="fade-in mt-4 text-sm text-gray-600 leading-relaxed">
                          <p className="font-semibold">Level 4 – Experienced</p>
                          <p>Worked before but needed stronger fundamentals.</p>
                          <p className="text-gray-500 mt-1">
                            عندي خبرة… لكن الأساسيات كانت ضعيفة ومحتاج أقويها
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* EXTRA NOTES */}
                <div>
                  <h3 className="text-xl font-semibold text-primaryColor mb-2 text-shadow-lg/20">
                    Extra Notes (optional)
                  </h3>

                  {formError.notes && (
                    <span className="text-red-600 text-sm ml-2">
                      {formError.notes}
                    </span>
                  )}
                  <textarea
                    rows={3}
                    placeholder="Write any notes or details you'd like to add..."
                    className="border p-3 rounded-xl w-full resize-none"
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                  ></textarea>
                </div>
                {/* BUTTONS: BACK + SUBMIT */}
                <div className="flex items-center gap-3 mt-6">
                  {/* BACK BUTTON */}
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/2 py-3 rounded-xl border-2 border-primaryColor text-primaryColor font-bold 
                    hover:bg-primaryColor hover:text-secondaryColor transition-all cursor-pointer"
                  >
                    Back
                  </button>

                  {/* SUBMIT BUTTON */}
                  <button
                    onClick={handleSubmit}
                    className="w-1/2 py-3 rounded-xl bg-primaryColor text-secondaryColor font-bold 
                    hover:bg-transparent hover:text-primaryColor border-2 border-primaryColor transition-all cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

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
                popUp.type === "Error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {popUp.type}
            </h2>

            <p className="text-gray-700 text-center mb-6 whitespace-pre-line">
              {popUp.message}
            </p>

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
