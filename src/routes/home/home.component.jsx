import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import globalMarketAccess from "@/assets/svg/global-market.svg";
import admissionsOptimization from "@/assets/svg/admission.svg";
import application from "@/assets/svg/application.svg";
import visa from "@/assets/svg/visa.svg";
import uni from "@/assets/images/uni.png";
import inter from "@/assets/images/inter.png";
import citizens from "@/assets/images/citizens.png";
import william from "@/assets/images/william.png";
import devry from "@/assets/images/devry.png";
import mpower from "@/assets/images/mpower.png";
import AIRC from "@/assets/images/AIRC.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="flex h-screen flex-col justify-between bg-[url('@/assets/images/hero-image.png')] bg-cover bg-center">
        <Navbar />
        <div className="flex flex-1 items-center justify-center text-white">
          <div className="max-w-4xl px-3 text-center">
            <h1 className="mx-auto text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Gain a Competitive Edge in International Admissions
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg">
              Empowering U.K. international admissions teams with expert-driven
              software and services to expand global reach, streamline
              admissions processes, and boost F-1 visa approval rates. Unlock
              new possibilities in international recruitment with Significant
              Study Group.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                buttonType="primary"
                type="button"
                onClick={() => navigate("/contact-us")}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-16 sm:px-12">
        <div className="container mx-auto">
          <Header
            title={"Optimize and Scale International Student Recruitment"}
          >
            We know the challenges our clients face—because we've been there.
            Through the perfect blend of innovative technology and dedicated
            expertise, we revolutionize the international admissions journey,
            making it seamless and effective every step of the way.
          </Header>

          <div className="mx-auto mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card
              imgSrc={globalMarketAccess}
              title={"Global Market Access"}
              description={
                "Connect with thousands of prescreened education agents and marketing affiliates through our comprehensive outreach, onboarding, and management services, expanding your reach and driving results in international recruitment."
              }
            />
            <Card
              imgSrc={admissionsOptimization}
              title={"Admissions Optimization"}
              description={
                "Our customized, secure, automation-driven technology streamlines the admissions process by reducing manual tasks, boosting application completion rates, and simplifying agent management—all with easy API integration. Effortlessly enhance efficiency and focus more on what matters: enrolling the right students."
              }
            />
            <Card
              imgSrc={application}
              title={"Application Verification & Scoring"}
              description={
                "By managing the entire process—from fully completed, verified applications to GPA conversion and applicant scoring—we save admissions teams valuable time and resources, allowing them to focus on converting applicants into enrolled students while reducing operational costs."
              }
            />
            <Card
              imgSrc={visa}
              title={"F-1 Visa Preparation"}
              description={
                "Our comprehensive online F-1 visa preparation course equips your international applicants with the skills and confidence they need to succeed in their F-1 visa interview, significantly increasing their confidence and chances of F-1 success, and ensuring a smoother path to enrollment."
              }
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12">
        <div className="container mx-auto">
          <div className="space-y-8 text-center">
            <Header
              title={"Option to study in engLand, ireland, scotland & wales."}
            >
              SI-UK is a trusted UK university partner, and our study abroad
              consultants will ensure you find a place on the right course to
              study in the UK. Experienced education consultants can assist with
              your application for foundation, undergraduate or postgraduate
              courses.
            </Header>
            <Button
              buttonType={"primary"}
              onClick={() => navigate("/contact-us")}
            >
              Book a free consultation
            </Button>
          </div>

          {/* <Header title={"Our Domain Expertise"}>
            Backed by decades of experience and deep expertise, our team
            understands the unique challenges U.S. universities face in
            expanding international enrollment. We specialize in tackling these
            critical issues to deliver a competitive edge, reduce manual
            workload, and optimize enrollment conversion.
          </Header> */}

          <div className="my-24">
            <Header title={"Some Of Our Clients & Partners"}>
              Our clients and partners encompass the entire international
              student recruitment ecosystem, including universities, education
              agents, content providers, and student loan providers.
            </Header>

            <div className="grid place-items-center sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex h-40 w-40 items-center justify-center">
                <img src={uni} />
              </div>
              <div className="flex h-40 w-40 items-center justify-center">
                <img src={inter} />
              </div>
              <div className="flex h-40 w-40 items-center justify-center">
                <img src={citizens} />
              </div>
              <div className="flex h-40 w-40 items-center justify-center">
                <img src={william} />
              </div>
              <div className="flex h-40 w-40 items-center justify-center">
                <img src={devry} />
              </div>
              <div className="flex h-40 w-40 items-center justify-center">
                <img src={mpower} />
              </div>
            </div>
          </div>

          <div className="my-16 grid place-items-center">
            <Header title={"Industry Memberships"}>
              We are proud members of the American International Recruitment
              Council (AIRC), a non-profit membership association of secondary
              and post-secondary institutions, education recruitment agencies,
              and service providers that promote ethical, standards-based
              international recruitment strategies and enrollment practices.
            </Header>

            <div className="my-8 flex h-40 w-40 items-center justify-center">
              <img src={AIRC} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

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

export const Header = ({ children, title }) => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mx-auto max-w-3xl text-xl font-bold uppercase sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm sm:text-base md:text-lg">{children}</p>
    </div>
  );
};

export default Home;
