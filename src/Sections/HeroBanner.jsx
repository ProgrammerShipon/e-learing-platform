import backgroundImg from "../assets/HeroBanner.png";

const HeroBanner = () => {
  return (
    <div className="relative bg-blue-500 h-[40rem]">
      <div className="absolute inset-0">
        <img className="w-full h-full" src={backgroundImg} alt="" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="bg-blend-saturation flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Your Learning Journey
          </h1>
          <p className="text-lg text-white">
            Unlock the doors of knowledge with our interactive learning
            platform.
          </p>
          <a
            href="#"
            className="max-w-max mx-auto px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
