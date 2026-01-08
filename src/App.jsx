import Header from "./section/Header/Header";
import Hero from "./section/Hero/Hero";
import Services from "./section/Services/Services";
import Slider from "./section/Slider/Slider";
import Registration from "./section/Registration/Registration";
import Footer from "./section/Footer/Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Services />
        <Slider />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
