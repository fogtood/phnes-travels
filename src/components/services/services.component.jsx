import services1 from "@/assets/svg/services1.svg";
import services2 from "@/assets/svg/services2.svg";
import services3 from "@/assets/svg/services3.svg";
import services4 from "@/assets/svg/services4.svg";
import services5 from "@/assets/svg/services5.svg";

const services = [
  {
    title: "Digital Process",
    description:
      "We promote client institutions to a database of several thousand agents across the globe through ongoing brand-building market campaigns.",
    icon: services1,
  },
  {
    title: "Agent Onboarding",
    description:
      "All agent documentation is collected and reviewed before submission to our client.",
    icon: services2,
  },
  {
    title: "Agent Management",
    description:
      "In-country and remote staff augment client admissions teams support agent activities and monitor performance.",
    icon: services3,
  },
  {
    title: "Agent Screening",
    description:
      "All agents are prescreened by our team to ensure they meet the high standards our clients expect.",
    icon: services4,
  },
  {
    title: "Agent Support",
    description:
      "We support our clients in developing custom materials and comprehensive training for agents.",
    icon: services5,
  },
];

const Services = () => {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 text-center md:grid-cols-3">
          <div className="relative flex flex-col items-center space-y-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg text-xl">
              <img src={services[0].icon} />
            </div>
            <h3 className="text-lg font-semibold">{services[0].title}</h3>
            <p className="text-sm md:text-base lg:max-w-[20rem]">
              {services[0].description}
            </p>
            <div className="absolute top-10 -right-25 hidden xl:block">
              <img src="src/assets/svg/vector1.svg" />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 md:-mt-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg text-xl">
              <img src={services[1].icon} />
            </div>
            <h3 className="text-lg font-semibold">{services[1].title}</h3>
            <p className="text-sm md:text-base lg:max-w-[20rem]">
              {services[1].description}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg text-xl">
              <img src={services[2].icon} />
            </div>
            <h3 className="text-lg font-semibold">{services[2].title}</h3>
            <p className="text-sm md:text-base lg:max-w-[20rem]">
              {services[2].description}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 grid w-4/5 grid-cols-1 gap-x-6 gap-y-16 text-center md:grid-cols-2">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg text-xl">
              <img src={services[3].icon} />
            </div>
            <h3 className="text-lg font-semibold">{services[3].title}</h3>
            <p className="text-sm md:text-base lg:max-w-[20rem]">
              {services[3].description}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg text-xl">
              <img src={services[4].icon} />
            </div>
            <h3 className="text-lg font-semibold">{services[4].title}</h3>
            <p className="text-sm md:text-base lg:max-w-[20rem]">
              {services[4].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
