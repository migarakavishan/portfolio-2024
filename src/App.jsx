import {
  NavBar,
  About,
  Contact,
  Experience,
  Footer,
  Home,
  Portfolio,
  Qualification,
} from "./components";
import SmoothCursor from "./components/SmoothCursor.jsx";



function App() {
  return (
    <main className="relative cursor-none">
    <SmoothCursor />
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Qualification />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
