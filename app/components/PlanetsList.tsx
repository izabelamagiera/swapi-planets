"use client";
import { SinglePlanetProps, PlanetsListProps } from "@/app/types/planetProps";
import { useState } from "react";
import { getData } from "@/app/hooks/getData";
import PlanetInfo from "./PlanetInfo";

export default function PlanetsList({ next, results }: PlanetsListProps) {
  const hasNextPage = next !== null;
  const [planetList, setPlanetList] = useState<SinglePlanetProps[]>(results);
  const [loadMorePlanetsLink, setLoadMorePlanetsLink] = useState<string>(next);
  const [hasMorePlanets, setHasMorePlanets] = useState<boolean>(hasNextPage);

  const loadMorePlanets = async (): Promise<void> => {
    const { next, results }: PlanetsListProps = await getData(loadMorePlanetsLink);
    setPlanetList((prev) => [...prev, ...results]);
    setLoadMorePlanetsLink(next);
    const hasNextPage = next !== null;
    setHasMorePlanets(hasNextPage);
  };

  return (
    <>
      <h2 className="text-center pb-12 text-4xl font-semibold">STAR TREK PLANETS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {planetList.map((planet) => (
          <PlanetInfo key={planet.url} {...planet} />
        ))}
      </div>

      {hasMorePlanets ? (
        <span className="flex justify-center mt-8">
          <button
            onClick={loadMorePlanets}
            className="flex flex-row justify-center text-center py-2 px-4 border-[1px] text-md bg-stone-900/10 border-sky-900/50 rounded-sm h-auto transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-sky-900/70 cursor-pointer"
          >
            SHOW MORE PLANETS
          </button>
        </span>
      ) : (
        <span className="flex justify-center mt-8 cursor-default">No more planets to show</span>
      )}
    </>
  );
}
