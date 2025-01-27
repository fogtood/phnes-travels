import { useRef } from "react";
import { Header } from "../home/home.component";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "../../components/testimonial-card/testimonial-card.component";
import Services from "../../components/services/services.component";
import Button from "../../components/button/button.component";
import about from "@/assets/images/about.png";
import AIRC from "@/assets/images/AIRC.png";

const About = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <section className="lg:py-none flex min-h-[calc(100vh-76px)] flex-col items-center justify-center px-6 py-10 sm:px-12">
        <div className="container mx-auto">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-center md:text-start">
              <h1 className="text-2xl font-bold md:text-4xl">ABOUT US</h1>
              <p className="my-4 text-sm sm:text-base md:text-lg">
                We are a Florida-based software and services company with
                decades of expertise in international admissions and student
                recruitment. Our dedicated team partners with clients to
                implement cost-effective, scalable strategies that expand their
                reach and impact in international student recruitment.
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                We are a Florida-based software and services company with
                decades of expertise in international admissions and student
                recruitment. Our dedicated team partners with clients to
                implement cost-effective, scalable strategies that expand their
                reach and impact in international student recruitment.
              </p>
            </div>
            <div className="mx-auto flex max-w-[80%] items-center justify-center">
              <img src={about} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-16 sm:px-12">
        <div className="mx-auto lg:max-w-[92%]">
          <div className="container mx-auto">
            <div className="grid gap-8 text-center md:grid-cols-2 md:text-start">
              <div className="mx-auto max-w-lg space-y-4 text-sm sm:text-base md:text-lg">
                <h2 className="text-lg font-bold uppercase md:text-2xl lg:text-3xl">
                  Vision Statement
                </h2>
                <p>
                  Our vision is to be the leading partner for U.S. higher
                  education institutions, empowering them to expand global
                  outreach and gain a competitive edge through innovative
                  technology and service solutions.
                </p>
              </div>
              <div className="mx-auto max-w-lg space-y-4 text-sm sm:text-base md:text-lg">
                <h2 className="text-lg font-bold uppercase md:text-2xl lg:text-3xl">
                  Mission Statement
                </h2>
                <p>
                  Our mission is to drive innovation that empowers our clients
                  to optimize international admissions, enhance enrollments,
                  increase revenue, and enrich student diversity—all while
                  effectively managing risk.
                </p>
              </div>
            </div>

            <div className="my-28">
              <Header title={"value"}>
                In 2024, 2,700 international students completed over 26,000
                lessons.
              </Header>

              <div className="my-16 grid place-items-center gap-8 sm:grid-cols-2">
                <Card
                  title={"excellence"}
                  description={
                    "We strive for the highest standards in everything we do."
                  }
                />
                <Card
                  title={"diversity"}
                  description={
                    "We celebrate and promote diversity and welcome talent from around the world."
                  }
                />
                <Card
                  title={"Integrity"}
                  description={
                    "We conduct our business with honesty, transparency, and ethical practices building trust with our clients and partners."
                  }
                />
                <Card
                  title={"People"}
                  description={
                    "We strive for We appreciate the value of our employees and will continue to develop and reward them as we grow. highest standards in everything we do."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto bg-white px-6 py-28 sm:px-12">
        <div className="text-center">
          <h2 className="mb-6 text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl">
            Market Entry and Scale
          </h2>
          <p className="mt-6 text-sm sm:text-base md:text-lg">
            International student recruitment is a complex, resource-intensive
            endeavor, and for admissions teams with limited resources,
            identifying, onboarding, and managing agents, affiliates, digital
            channels, and institutional partnerships can feel overwhelming.
            That’s where we come in. With our proven market entry and scaling
            solution, we connect your institution with a network of high-quality
            agents, reputable marketing affiliates, strategic digital
            recruitment channels, and key institutional partners, giving you
            direct access to your ideal international audience.
          </p>
          <p className="mt-6 text-sm sm:text-base md:text-lg">
            Our streamlined, expert-led approach saves you time and resources by
            managing every aspect—from identifying trusted partners to
            facilitating introductions and supporting training and onboarding.
            We ensure your institution reaches the right students through
            diverse, effective channels, building valuable partnerships that
            drive results. Focus on what matters most: growing your
            international enrollment with confidence and success. Partner with
            us to simplify and supercharge your global recruitment strategy
          </p>
        </div>

        <div className="my-28 text-center">
          <h2 className="mb-6 text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl">
            Our Proven Approach
          </h2>
          <p className="mt-6 text-sm sm:text-base md:text-lg">
            International student recruitment thrives through a global network
            of education agents who guide students on their study abroad
            journey. For universities, however, identifying, onboarding, and
            managing these agents can be a complex, resource-intensive
            challenge. Our proven approach connects clients directly with
            qualified, thoroughly vetted agents to drive application and
            enrollment growth seamlessly. Our comprehensive solution includes:
          </p>

          <div className="mt-10 grid place-items-center text-center">
            {/* <img src="src/assets/images/services.png" /> */}
            <Services />
            <div className="mt-8 flex h-40 w-40 items-center justify-center">
              <img src={AIRC} />
            </div>
            <p className="text-sm sm:text-base md:text-lg">
              We are deeply committed to upholding the highest ethical standards
              and partnering with organizations that share our values.
              <br />
              As proud members of AIRC, we stand united in supporting our
              clients and the broader industry.
            </p>
          </div>
        </div>

        <div className="my-20">
          <h2 className="text-center text-lg font-bold uppercase md:text-2xl lg:text-3xl">
            Agent Testimonials
          </h2>
          <div
            ref={scrollRef}
            className="scrollbar-hide mt-4 flex items-center gap-5 overflow-auto p-5 px-2"
          >
            {[...Array(5)].map((_, idx) => (
              <TestimonialCard key={idx} />
            ))}
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="cursor-pointer rounded-full bg-black p-1 text-white"
              onClick={scrollLeft}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-black p-1 text-white"
              onClick={scrollRight}
            >
              <ChevronRight />
            </button>
          </div>

          <div className="mt-24 text-center">
            <h2 className="mb-6 text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl">
              Book Your Personalized Strategy Session
            </h2>
            <p className="mt-6 mb-10 text-sm sm:text-base md:text-lg">
              Our experts are ready to partner with your team to thoroughly
              assess every aspect of your current international student
              recruitment strategy. After this in-depth review, we’ll deliver a
              strategic plan tailored to optimize your resources, maximize your
              budget, and drive measurable growth. Book your free initial
              consultation today—our way of starting a strong, results-driven
              partnership focused on your success. Let’s unlock your potential
              in international recruitment together!
            </p>
            <Button buttonType={"primary"}>Contact us</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

const Card = ({ title, description }) => {
  return (
    <div className="h-68 w-full max-w-xs rounded-xl bg-white shadow-2xl sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="flex h-full flex-col items-center justify-center p-4">
        <p className="text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl">
          {title}
        </p>
        <p className="mt-4 max-w-sm text-center text-sm sm:text-base md:text-lg lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};
