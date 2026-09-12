import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";
import type { Technology as TechnologyType } from "../types/technology";
import type { Dispatch, SetStateAction } from "react";

interface TechnologyProps {
  stack: TechnologyType[];
  setStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const Technology = ({ stack, setStack }: TechnologyProps) => {
  const handleToggle = (technology: TechnologyType) => {
    setStack((prev) => {
      const alreadySelected = prev.some((t) => t.id === technology.id);
      if (alreadySelected) {
        return prev.filter((t) => t.id !== technology.id);
      }
     
      const withoutCategory = prev.filter((t) => t.category !== technology.category);
      return [...withoutCategory, technology];
    });
  };

  const handleRemove = (id: number) => {
    setStack((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <section id="technologies" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Explore <span className="brand-gradient">Technologies</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isSelected={stack.some((t) => t.id === technology.id)}
                onToggle={handleToggle}
              />
            ))}
          </div>

          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>

            {stack.length === 0 ? (
              <>
                <p className="mt-2 text-sm text-slate-500">No technologies selected yet.</p>
                <div className="mt-4 rounded-xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
                  Your stack is empty.
                </div>
              </>
            ) : (
              <ul className="mt-4 space-y-3">
                {stack.map((technology) => (
                  <li
                    key={technology.id}
                    className="flex items-center justify-between rounded-lg border border-slate-100 p-3"
                  >
                    <div className="flex items-center gap-2">
                      <img src={technology.icon} alt={technology.name} className="h-6 w-6" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{technology.name}</p>
                        <p className="text-xs text-slate-500">{technology.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(technology.id)}
                      className="text-xs font-medium text-slate-400 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;