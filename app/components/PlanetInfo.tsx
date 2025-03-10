"use client";
import Card from "@/app/ui/Card";
import { ArrowClockwise, Circle, Drop, Mountains, Planet, ThermometerSimple, User, UsersThree } from "@phosphor-icons/react";
import TableRow from "@/app/ui/TableRow";
import { SinglePlanetProps } from "@/app/types/planetProps";

export default function PlanetInfo({ name, climate, diameter, population, terrain, surface_water, rotation_period, residents }: SinglePlanetProps) {
  return (
    <Card>
      <div className="flex flex-row font-semibold align-middle text-3xl pb-6 leading-none h-auto">
        <span className="mr-2 flex flex-row align-middle">
          <Planet size={32} />
        </span>
        <h2 className="self-center">{name}</h2>
      </div>

      <div className="flex flex-col text-lg">
        <TableRow icon={<ThermometerSimple />} label={"CLIMATE"} info={climate} />
        <TableRow icon={<Circle />} label={"DIAMETER"} info={diameter === "unknown" ? diameter : Number(diameter).toLocaleString()} />
        <TableRow icon={<UsersThree />} label={"POPULATION"} info={population === "unknown" ? population : Number(population).toLocaleString()} />
        <TableRow icon={<Mountains />} label={"TERRAIN"} info={terrain} />
        <TableRow icon={<Drop />} label={"WATER SOURCE"} info={surface_water} />
        <TableRow icon={<ArrowClockwise />} label={"ROTATION TIME"} info={rotation_period} />
        <TableRow icon={<User />} label={"RESIDENTS"} info={residents.length.toString()} />
      </div>
    </Card>
  );
}
