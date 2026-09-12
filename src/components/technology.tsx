
import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard"

const Technology = () => {
  return (
    <section id="technologies" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        
        <div className="mb-10 text-center">
         <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
  Explore{" "}
  <span className="brand-gradient">
    Technologies
  </span>
</h2>
          
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Explore popular technologies and choose the right tools for your
            next project.
          </p>
        </div>

     
       <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
  {technologies.map((technology) => (
    <TechnologyCard
      key={technology.id}
      technology={technology}
    />
  ))}
</div>

      </div>
    </section>
  );
};

export default Technology;

