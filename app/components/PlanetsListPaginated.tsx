"use client";
import { useState } from "react";
import Planet from "./PlanetInfo";
import { useRouter } from "next/navigation";
import { PlanetsBySlugProps } from "@/app/types/planetProps";
export default function PlanetsPaginated({
  previous,
  next,
  results,
  slug,
}: PlanetsBySlugProps) {
  const router = useRouter();
  const hasNextPlanetsPage = next !== null;
  const hasPreviousPlanetsPage = previous !== null;
  const [hasMorePlanets, setHasMorePlanets] =
    useState<boolean>(hasNextPlanetsPage);
  const [hasPrevPlanets, setHasPrevPlanets] = useState<boolean>(
    hasPreviousPlanetsPage
  );

  const loadNextPage = () => {
    const hasNextPlanetsPage = next !== null;
    const nextPage: number = hasNextPlanetsPage
      ? Number(slug) + 1
      : Number(slug);
    setHasMorePlanets(hasNextPlanetsPage);
    router.push(`/planets/${nextPage.toString()}`);
  };
  const loadPrevPage = () => {
    const prevPage: number = Number(slug) > 1 ? Number(slug) - 1 : 1;
    const hasPreviousPlanetsPage = previous !== null;
    setHasPrevPlanets(hasPreviousPlanetsPage);
    router.push(`/planets/${prevPage.toString()}`);
  };
  return (
    <>
      <div className="flex flex-row justify-between align-middle  pb-12">
        <span className="flex justify-center h-auto w-1/4">
          {hasPrevPlanets && (
            <button
              onClick={loadPrevPage}
              className={`flex self-center py-2 px-4 border-[1px] text-sm bg-stone-900/10 border-sky-900/50 rounded-sm h-auto transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-sky-900/70`}
            >
              PREV PAGE
            </button>
          )}
        </span>
        <h2 className="text-center text-4xl font-semibold w-2/4">
          STAR TREK PLANETS - PAGINATED
        </h2>
        <span className="flex justify-center w-1/4">
          {hasMorePlanets && (
            <button
              onClick={loadNextPage}
              className="flex self-center py-2 px-4 border-[1px] text-sm bg-stone-900/10 border-sky-900/50 rounded-sm h-auto transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-sky-900/70"
            >
              NEXT PAGE
            </button>
          )}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((planet) => (
          <Planet key={planet.url} {...planet} />
        ))}
      </div>
    </>
  );
}
