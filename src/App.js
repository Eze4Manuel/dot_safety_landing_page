import GetTheApp from "./components/GetTheApp";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./HowItWorks";

function App() {
  return (
    <div className="bg-white min-h-screen max-w-[1440px] mx-auto">
      <Header />
      <main className="">
        <Hero />
        <HowItWorks />
        <GetTheApp />
      </main>
    </div>
  );
}

export default App;
