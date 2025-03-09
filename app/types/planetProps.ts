export interface PlanetsListProps {
  count: number;
  prev: string;
  next: string;
  results: SinglePlanetProps[];
}

export interface SinglePlanetProps {
  name: string;
  url: string;
  climate: string;
  diameter: string;
  population: string;
  terrain: string;
  surface_water: string;
  rotation_period: string;
  residents: string[];
}
