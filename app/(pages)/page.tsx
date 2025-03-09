import { Suspense } from "react";
import { getData } from "@/app/hooks/getData";
import PlanetList from "@/app/components/PlanetsList";
import { PlanetsListProps } from "@/app/types/planetProps";
import Loading from "@/app/components/Loading";
import NotFound from "../not-found";
import { SWAPI_API_ENDPOINT } from "../utils/constants";

export default async function Home() {
  const data: PlanetsListProps = await getData(SWAPI_API_ENDPOINT);

  if (!data) {
    return <NotFound />;
  }
  if (data) {
    return (
      <div className="flex flex-col justify-center relative max-w-7xl my-0 mx-auto">
        <Suspense fallback={<Loading />}>
          <PlanetList {...data} />
        </Suspense>
      </div>
    );
  }
}
