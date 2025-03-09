import { Suspense } from "react";
import { getData } from "@/app/hooks/getData";
import { PlanetsListProps } from "@/app/types/planetProps";
import NotFound from "@/app//not-found";
import Loading from "@/app/components/Loading";

export default async function Home() {
  const data: PlanetsListProps = await getData("https://swapi.dev/api/planets");

  if (!data) {
    return <NotFound />;
  }
  if (data) {
    return (
      <div className="flex flex-col justify-center relative max-w-7xl my-0 mx-auto">
        <Suspense fallback={<Loading />}>
          <div>data goes here</div>
        </Suspense>
      </div>
    );
  }
}
