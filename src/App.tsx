import EditorSection from "./components/EditorSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LaptopSection from "./components/LaptopSection";
import Nav from "./components/Nav";
import PhoneSection from "./components/PhoneSection";

const App = () => {
  return (
    <div>
      <header className="header-bg cube">
        <Nav />
        <Hero />
      </header>
      <main>
        <EditorSection />
        <PhoneSection />
        <LaptopSection />
      </main>
      <Footer />
    </div>
  );
};
export default App;
