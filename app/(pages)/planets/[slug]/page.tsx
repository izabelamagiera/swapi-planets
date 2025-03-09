import PlanetsListPaginated from "@/app/components/PlanetsListPaginated";
import { getData } from "@/app/hooks/getData";
import { PlanetsListProps } from "@/app/types/planetProps";
import React from "react";

type Params = Promise<{ slug: string }>;

export default async function PlanetsSlugPage({ params }: { params: Params }) {
  const { slug } = await params;
  const data: PlanetsListProps = await getData(
    `https://swapi.dev/api/planets/?page=${slug}`
  );

  return (
    <div className="flex flex-col justify-center relative max-w-7xl my-0 mx-auto">
      <PlanetsListPaginated {...data} slug={slug} />
    </div>
  );
}
