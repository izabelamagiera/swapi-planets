import { Suspense } from "react";
import { getData } from "@/app/hooks/getData";
import { PlanetsBySlugProps } from "@/app/types/planetProps";
import Loading from "@/app/components/Loading";
import NotFound from "@/app/not-found";
import { SWAPI_API_ENDPOINT } from "@/app/utils/constants";
import PlanetsListPaginated from "@/app/components/PlanetsListPaginated";

export default async function PlanetsIndexPage() {
  const data: PlanetsBySlugProps = await getData(SWAPI_API_ENDPOINT);
  if (!data) {
    return <NotFound />;
  }
  if (data) {
    return (
      <div className="flex flex-col justify-center relative max-w-7xl my-0 mx-auto">
        <Suspense fallback={<Loading />}>
          <PlanetsListPaginated {...data} slug={"1"} />
        </Suspense>
      </div>
    );
  }
}
