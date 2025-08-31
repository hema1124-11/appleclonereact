import Button from "./reusableComponents/Button";

const Macstudent = () => {
  return (
    <section className="w-full mt-3 relative">
      <div className="hidden lg:block">
        <img
          src="./hero_2_max.jpg"
          alt="Mac for student (desktop)"
          className="w-full h-[90vh] object-cover"
        />
      </div>

      <div className="block lg:hidden">
        <img
          src="./hero_2.jpg"
          alt="Mac for student (mobile & tablet)"
          className="w-full h-[70vh] sm:h-[75vh] md:h-[80vh] object-cover"
        />
      </div>

      <div className="absolute top-[85%] left-1/2 -translate-x-1/2">
        <Button
          buttonName={"Learn more"}
          className="bg-white text-black px-5 py-2 rounded-3xl hover:bg-white/40"
        />
      </div>
    </section>
  );
};

export default Macstudent;
