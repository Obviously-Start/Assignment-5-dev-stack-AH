
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">

      {/* Top: Icon + Badge */}
   
      <div className="flex items-start justify-between">
           <img
           src={technology.icon}
           alt={`${technology.name} icon`}
           className="h-10 w-10 object-contain"
                 />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="mt-4 text-xl font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {technology.description}
      </p>

    {/* Category + Difficulty + Rating */}
<div className="mt-4 flex items-center justify-between gap-3 text-sm">
  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
    {technology.category}
  </span>

  <span className="text-xs font-medium text-slate-500">
    {technology.difficulty}
  </span>

  <div className="flex items-center gap-1">
    <span className="text-yellow-400">★</span>

    <span className="font-semibold text-slate-800">
      {technology.rating}
    </span>
  </div>
</div>

      {/* Add to Stack */}
      <button
        type="button"
        className="gradient-bg mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;

