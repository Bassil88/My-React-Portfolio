import "../src/styles/main.scss";
import { Header } from "../src/components/Header.jsx";
import { AboutMe } from "../src/components/AboutMe.jsx";
import { ScrollToFooter } from "../src/components/ScrollToFooter.jsx";
import { Projects } from "../src/components/Projects.jsx";
import { Contact } from "../src/components/Contact.jsx";
import { Footer } from "../src/components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <ScrollToFooter />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
