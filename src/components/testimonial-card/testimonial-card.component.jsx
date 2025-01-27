import displayImg from "../../assets/images/AIRC.png";

const TestimonialCard = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="w-[24rem]">
        <div className="mb-5 flex items-center gap-3">
          <img
            src={displayImg}
            alt=""
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-bold">John Adeola</p>
            <p>IAUS Consultant</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididun Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt.t.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
