import type { Technology as TechnologyType } from "../types/technology";

interface TechnologyCardProps {
  technology: TechnologyType;
  isSelected: boolean;
  onAdd: (technology: TechnologyType) => void;
}

const TechnologyCard = ({ technology, isSelected, onAdd }: TechnologyCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = technology;

  return (
    <div
      className={`rounded-2xl border bg-white p-6 shadow-sm transition ${
        isSelected ? "border-slate-900 ring-1 ring-slate-900" : "border-slate-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <img src={icon} alt={name} className="h-9 w-9" />
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>

      <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
        <span className="rounded-md bg-slate-100 px-2 py-1">{category}</span>
        <span>{difficulty}</span>
        <span className="ml-auto flex items-center gap-1">
          <span className="text-amber-400">★</span>
          {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        className={`mt-4 w-full cursor-pointer rounded-lg py-2 text-sm font-semibold transition ${
          isSelected
            ? "bg-slate-100 text-slate-400"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;