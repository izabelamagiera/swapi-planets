export interface PlanetsListProps {
  count: number;
  prev: string;
  next: string;
  results: SinglePlanetProps[];
}

export interface SinglePlanetProps {
  name: string;
}
