import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Faqs from "./components/Faqs";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Courses />
      <About />
      <Faqs />
      <Contact />
    </>
  );
}
