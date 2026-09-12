import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-16">

        
        <div className="text-center lg:text-left">

        
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient">
              Development Stack
            </span>
          </h1>

        
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          
          <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">

           
            <a
              href="#technologies"
              className="gradient-bg rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Technologies
            </a>

            
            <a
              href="#about"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </a>

          </div>
        </div>

        
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Dev Stack Banner"
            className="w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;