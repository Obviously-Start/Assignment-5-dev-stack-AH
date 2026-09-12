import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import technologiesData from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";
import type { Technology as TechnologyType } from "../types/technology";
import type { Dispatch, SetStateAction } from "react";

interface TechnologyProps {
  stack: TechnologyType[];
  setStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const Technology = ({ stack, setStack }: TechnologyProps) => {
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setTechnologies(technologiesData as TechnologyType[]);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAdd = (technology: TechnologyType) => {
    const alreadySelected = stack.some((t) => t.id === technology.id);

    if (alreadySelected) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (technology: TechnologyType) => {
    setStack((prev) => prev.filter((t) => t.id !== technology.id));
    toast.info(`${technology.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Cleared your entire stack.");
  };

  return (
    <section id="technologies" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Explore <span className="brand-gradient">Technologies</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Pick the technologies you want and build your ideal stack.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-3 py-24">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
            <p className="text-sm font-medium text-slate-500">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={stack.some((t) => t.id === technology.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>

            <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>

              <p className="mt-2 text-sm text-slate-500">
                {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
              </p>

              {stack.length === 0 ? (
                <div className="mt-4 rounded-xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
                  Your stack is empty.
                </div>
              ) : (
                <>
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
                          onClick={() => handleRemove(technology)}
                          className="text-xs font-medium text-slate-400 hover:text-red-500"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleRemoveAll}
                    className="mt-5 w-full rounded-lg border border-red-200 bg-red-50 py-2.5 text-sm font-semibold text-red-500 transition-colors duration-200 hover:border-red-300 hover:bg-red-100 hover:text-red-600"
                  >
                    Remove All
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Technology;