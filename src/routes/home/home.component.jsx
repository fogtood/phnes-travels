import Button from "../../components/button/button.component";
import Navbar from "../../components/navbar/navbar.component";

const Home = () => {
  return (
    <div>
      <section className="flex h-screen flex-col justify-between bg-[url('src/assets/hero-image.png')] bg-cover bg-center">
        <Navbar />
        <div className="flex flex-1 items-center justify-center text-white">
          <div className="max-w-4xl px-3 text-center sm:px-0">
            <h1 className="mx-auto text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Gain a Competitive Edge in International Admissions
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg">
              Empowering U.S. international admissions teams with expert-driven
              software and services to expand global reach, streamline
              admissions processes, and boost F-1 visa approval rates. Unlock
              new possibilities in international recruitment with Catalyst GEM.
            </p>
            <div className="mt-8 flex justify-center">
              <Button buttonType="primary" type="button">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
