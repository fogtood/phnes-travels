import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import displayImg from "../../assets/images/AIRC.png";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
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
    </>
  );
};

const TestimonialCard = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
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

export default Testimonials;
