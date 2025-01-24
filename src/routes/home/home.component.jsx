import Button from "../../components/button/button.component";
import Navbar from "../../components/navbar/navbar.component";

const Home = () => {
  return (
    <div>
      <section className="flex h-screen flex-col justify-between bg-[url('src/assets/images/hero-image.png')] bg-cover bg-center">
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

      <section className="bg-[#F8FAFC] px-6 py-16 sm:px-12">
        <Header title={"Optimize and Scale International Student Recruitment"}>
          We know the challenges our clients face—because we've been there.
          Through the perfect blend of innovative technology and dedicated
          expertise, we revolutionize the international admissions journey,
          making it seamless and effective every step of the way.
        </Header>

        <div className="mx-auto mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card
            imgSrc={"src/assets/svg/global-market.svg"}
            title={"Global Market Access"}
            description={
              "Connect with thousands of prescreened education agents and marketing affiliates through our comprehensive outreach, onboarding, and management services, expanding your reach and driving results in international recruitment."
            }
          />
          <Card
            imgSrc={"src/assets/svg/admission.svg"}
            title={"Admissions Optimization"}
            description={
              "Our customized, secure, automation-driven technology streamlines the admissions process by reducing manual tasks, boosting application completion rates, and simplifying agent management—all with easy API integration. Effortlessly enhance efficiency and focus more on what matters: enrolling the right students."
            }
          />
          <Card
            imgSrc={"src/assets/svg/application.svg"}
            title={"Application Verification & Scoring"}
            description={
              "By managing the entire process—from fully completed, verified applications to GPA conversion and applicant scoring—we save admissions teams valuable time and resources, allowing them to focus on converting applicants into enrolled students while reducing operational costs."
            }
          />
          <Card
            imgSrc={"src/assets/svg/visa.svg"}
            title={"F-1 Visa Preparation"}
            description={
              "Our comprehensive online F-1 visa preparation course equips your international applicants with the skills and confidence they need to succeed in their F-1 visa interview, significantly increasing their confidence and chances of F-1 success, and ensuring a smoother path to enrollment."
            }
          />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12">
        <Header title={"Our Domain Expertise"}>
          Backed by decades of experience and deep expertise, our team
          understands the unique challenges U.S. universities face in expanding
          international enrollment. We specialize in tackling these critical
          issues to deliver a competitive edge, reduce manual workload, and
          optimize enrollment conversion.
        </Header>

        <div className="my-24">
          <Header title={"Our Clients & Partners"}>
            Our clients and partners encompass the entire international student
            recruitment ecosystem, including universities, education agents,
            content providers, and student loan providers.
          </Header>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-center">
              <img src="src/assets/images/uni.png" />
            </div>
            <div className="flex items-center justify-center">
              <img src="src/assets/images/inter.png" />
            </div>
            <div className="flex items-center justify-center">
              <img src="src/assets/images/citizens.png" />
            </div>
            <div className="flex items-center justify-center">
              <img src="src/assets/images/william.png" />
            </div>
            <div className="flex items-center justify-center">
              <img src="src/assets/images/devry.png" />
            </div>
            <div className="flex items-center justify-center">
              <img src="src/assets/images/mpower.png" />
            </div>
          </div>
        </div>

        <div className="my-16">
          <Header title={"Industry Memberships"}>
            We are proud members of the American International Recruitment
            Council (AIRC), a non-profit membership association of secondary and
            post-secondary institutions, education recruitment agencies, and
            service providers that promote ethical, standards-based
            international recruitment strategies and enrollment practices.
          </Header>

          <div className="my-8 flex items-center justify-center">
            <img src="src/assets/images/AIRC.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 sm:block">
      <div className="h-20 w-20">
        <img src={imgSrc} />
      </div>
      <div className="mt-2 text-center sm:text-start">
        <p className="text-lg font-bold md:text-xl">{title}</p>
        <p className="mt-4 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

const Header = ({ children, title }) => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mx-auto max-w-3xl text-xl font-bold uppercase sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm sm:text-base md:text-lg">{children}</p>
    </div>
  );
};
