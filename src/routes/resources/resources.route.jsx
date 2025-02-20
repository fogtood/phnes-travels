import { useNavigate } from "react-router-dom";
import { Header } from "../home/home.component";
import CheckIcon from "../../components/check-icon/check-icon.component";
import Testimonials from "../../components/testimonial-card/testimonial-card.component";
import Button from "../../components/button/button.component";
import qualifaiLogo from "../../assets/images/qualifai-logo.png";
import resourcesImage1 from "@/assets/images/resources1.png";
import resourcesImage2 from "@/assets/images/resources2.png";
import resourcesImage3 from "@/assets/images/resources3.png";
import aws from "@/assets/images/aws.png";
import hecvat from "@/assets/images/hecvat.png";
import pc from "@/assets/images/pc.png";
import thumbnail from "../../assets/images/Thumbnail.png";
import pinkInnov from "@/assets/images/Pink-Innovation-Design-Thinking-Process-Graph.png";
import pc2 from "@/assets/images/pc2.png";

const Resources = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <section className="px-6 py-20">
        <div className="space-y-6">
          <div className="gap-3 md:flex md:items-center">
            <h1 className="text-2xl font-bold uppercase md:text-4xl">
              International Admissions Optimization
            </h1>
            <span>
              <img
                src={qualifaiLogo}
                alt="Qualifai Logo"
                className="h-8 w-auto md:h-12"
              />
            </span>
          </div>
          <p className="text-sm sm:text-base md:text-lg">
            In today’s competitive landscape, international student recruitment
            requires a strategic edge. Our customized, automation-driven
            technology empowers institutions to optimize their admissions
            process like never before. By automating manual, time-intensive
            tasks, we free up your admissions team to focus on high-impact
            activities—such as supporting channel partners and converting
            applicants.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            With our solution, you can eliminate the labor-intensive work of
            managing application completion with students and agents. Instead,
            you receive fully completed, verified, and scored applications,
            seamlessly delivered from our platform directly to your CRM.
          </p>
        </div>

        <div className="my-12 space-y-6">
          <p className="text-lg font-bold md:text-xl">Key Features Include:</p>
          <div className="space-y-6">
            {[
              "Custom branded technology that replaces your current application form.",
              "Multi-tenant access for students, agents, and your team.",
              "Automation-driven, removing tedious, manual effort from your team.",
              "Each completed application includes an International GPA conversion report.",
              "HECVAT and GDPR-compliant technology hosted on the AWS private cloud.",
              "Data and documents can be shared via a secure API.",
            ].map((feature, idx) => (
              <TextWithCheckIcon key={idx}>{feature}</TextWithCheckIcon>
            ))}
          </div>
        </div>

        <div className="mx-auto my-20 grid place-items-center gap-10 sm:grid-cols-2 lg:w-4/5">
          <div className="col-span-2">
            <img
              src={resourcesImage1}
              alt="Resources Image 1"
              className="mx-auto h-auto w-4/5 object-contain sm:w-full md:h-80"
            />
          </div>
          <div className="col-span-2 w-full sm:col-span-1">
            <img
              src={resourcesImage2}
              alt="Resources Image 2"
              className="mx-auto h-auto w-4/5 object-contain sm:w-full md:h-80"
            />
          </div>
          <div className="col-span-2 w-full sm:col-span-1">
            <img
              src={resourcesImage3}
              alt="Resources Image 3"
              className="mx-auto h-auto w-4/5 object-contain sm:w-full md:h-80"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-6 text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl">
            Pricing Model
          </h2>
          <p className="mt-6 text-sm sm:text-base md:text-lg">
            Our cost-effective solution offers unlimited access for students,
            agents, and your in-house team, ensuring everyone has the tools they
            need to succeed. Our affordable, transparent fee structure is as
            follows:
          </p>

          <div className="my-8 grid place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "No technology set-up or customization fees.",
              "Low monthly technology subscription fee.",
              "Fee per completed application processed (to include an international GPA conversion report).",
            ].map((feat, idx) => (
              <div
                key={idx}
                className="flex h-auto min-h-[10rem] w-full max-w-[20rem] items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition-all"
              >
                <p className="p-6 text-center text-sm font-semibold sm:text-base">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-26 grid gap-8 md:grid-cols-5">
          <div className="space-y-6 md:col-span-3">
            <h2 className="mb-6 text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl">
              Data Integration and Security
            </h2>
            <p className="text-sm sm:text-base md:text-lg">
              Our platform is fully equipped to handle sensitive data and
              documents, giving our clients peace of mind.
            </p>
            <ul className="list-disc space-y-5 text-sm sm:text-base md:text-lg">
              <li>
                The platform is hosted on the AWS Virtual Private Cloud.
                Documents are fully encrypted and remain secure.
              </li>
              <li>
                Data and documents are shared with the client directly via the
                platform or a secure API
              </li>
              <li>
                HECVAT Compliant HECVAT CBI: HECVAT: REN-ISAC: Research
                Education Networking Information Sharing & Analysis Center
              </li>
            </ul>
          </div>
          <div className="mx-auto flex w-4/5 flex-col items-center justify-center md:col-span-2">
            <div className="w-full">
              <img src={aws} alt="AWS Logo" className="w-full object-contain" />
            </div>
            <div className="w-full">
              <img
                src={hecvat}
                alt="HECVAT Logo"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-center sm:w-[50%]">
          <img
            src={pc}
            alt="PC Image"
            className="h-full w-full object-contain"
          />
        </div>
      </section>

      <section className="my-20 px-6">
        <h1 className="text-2xl font-bold uppercase md:text-4xl">
           Visa Preparation for Success
        </h1>
        <p className="my-6 text-sm text-[#2B58F7] sm:text-base md:text-lg">
          International students who complete our personalized visa preparation
          and training program increase their chances of  visa approval by
          220%, thanks to our proven, expert-led approach tailored to address
          the specific challenges of the  interview process.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          In 2024,  visa denials continued to pose a significant challenge,
          with over 240,000 international students unable to secure their visas.
          This trend represents an ongoing cost to the U.K. economy, estimated
          at $7 billion annually, and a substantial impact on higher education
          institutions. How much are  visa denials affecting your
          institution’s enrollment and revenue goals? Enhancing visa approval
          rates is a proven way to boost enrollment, improve retention, and
          strengthen your financial outcomes.
        </p>
        <div className="mx-auto my-16 sm:w-4/5">
          <img
            src={thumbnail}
            alt="Thumbnail Image"
            className="mx-auto w-4/5 object-cover sm:w-full"
          />
        </div>

        <div className="my-24 text-center">
          <h2 className="mb-6 text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl">
            Our Comprehensive  Training Process
          </h2>
          <p className="mt-6 mb-10 text-sm sm:text-base md:text-lg">
            Our proven  visa preparation method equips students with the
            knowledge and confidence needed to successfully navigate their 
            visa interview and secure their visa
          </p>
          <div className="my-10">
            <div className="mx-auto sm:w-4/5">
              <img
                src={pinkInnov}
                alt="Pink Innovation Design Thinking Process Graph"
                className="w-full object-contain"
              />
            </div>
            <div className="mx-auto sm:w-4/5">
              <img
                src={pc2}
                alt="PC Image 2"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
        <div>
          <Header title={" Visa Course Feedback"}>
            In 2024, 2,700 international students completed over 26,000 lessons.
          </Header>
          <div className="my-5 grid gap-8 text-center md:grid-cols-2 md:text-start">
            <div className="mx-auto max-w-lg space-y-4 text-sm sm:text-base md:text-lg">
              <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                Overall Satisfaction
              </h2>
              <p>
                Students rated their overall satisfaction with an average score
                of 9.46 out of 10.
              </p>
            </div>
            <div className="mx-auto max-w-lg space-y-4 text-sm sm:text-base md:text-lg">
              <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                Guidance Quality
              </h2>
              <p>
                The guidance provided was rated highly, with an average rating
                of 4.73 out of 5 stars.
              </p>
            </div>
          </div>
          {/* <Testimonials /> */}
        </div>
        <div className="my-16">
          <h2 className="text-center text-xl font-bold uppercase sm:text-2xl md:text-3xl lg:text-4xl">
            Mock Interview Feedback
          </h2>
          <div className="my-5 grid gap-8 text-center md:grid-cols-2 md:text-start">
            <div className="mx-auto max-w-lg space-y-4 text-sm sm:text-base md:text-lg">
              <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                Overall Satisfaction
              </h2>
              <p>
                Students rated their overall satisfaction with an average score
                of 9.46 out of 10.
              </p>
            </div>
            <div className="mx-auto max-w-lg space-y-4 text-sm sm:text-base md:text-lg">
              <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                Guidance Quality
              </h2>
              <p>
                The guidance provided was rated highly, with an average rating
                of 4.73 out of 5 stars.
              </p>
            </div>
          </div>
          {/* <Testimonials /> */}
        </div>

        <div className="my-24 text-center">
          <h2 className="text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl">
            Book a Demo
          </h2>
          <p className="mx-auto my-5 mb-10 max-w-xl text-sm sm:text-base md:text-lg">
            Schedule a complimentary demo of our solution today and learn how we
            can supercharge your international admissions process.
          </p>
          <Button buttonType="primary" onClick={() => navigate("/contact-us")}>
            Book a Call
          </Button>
        </div>
      </section>
    </div>
  );
};

const TextWithCheckIcon = ({ children }) => {
  return (
    <div className="flex items-center gap-3 text-sm sm:text-base md:gap-6 md:text-lg">
      <CheckIcon />
      {children}
    </div>
  );
};

export default Resources;
