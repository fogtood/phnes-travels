import qualifaiLogo from "@/assets/images/qualifai-logo.png";

const Resources = () => {
  return (
    <>
      <section className="px-6 py-20 sm:px-12">
        <div className="space-y-6">
          <h1 className="flex items-center gap-3 text-2xl font-bold uppercase md:text-4xl">
            International Admissions Optimization
            <span>
              <img src={qualifaiLogo} />
            </span>
          </h1>
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
            seamlessly delivered from our platform directly to your CRM. Our
            powerful features include:
          </p>
        </div>
      </section>
    </>
  );
};

export default Resources;
