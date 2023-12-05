import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
