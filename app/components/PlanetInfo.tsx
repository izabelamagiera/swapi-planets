"use client";
import Card from "@/app/ui/Card";
import {
  ArrowClockwise,
  Circle,
  Drop,
  Mountains,
  Planet,
  ThermometerSimple,
  UsersThree,
} from "@phosphor-icons/react";
import TableRow from "@/app/ui/TableRow";
import { SinglePlanetProps } from "@/app/types/planetProps";

export default function PlanetInfo({
  name,
  climate,
  diameter,
  population,
  terrain,
  surface_water,
  rotation_period,
}: SinglePlanetProps) {
  return (
    <Card>
      <div className="flex flex-row font-semibold align-middle text-3xl pb-6 leading-none h-auto">
        <span className="mr-2 flex flex-row align-middle">
          <Planet size={32} />
        </span>
        <h2 className="self-center">{name}</h2>
      </div>

      <div className="flex flex-col text-lg">
        <TableRow>
          <div className="flex flex-row text-lg w-2/3">
            <ThermometerSimple />
            <div className="pl-1 text-sm">CLIMATE:</div>
          </div>
          <div className="pl-4 text-sm text-right">{climate}</div>
        </TableRow>
        <TableRow>
          <div className="flex flex-row text-lg w-auto">
            <Circle />
            <div className="pl-1 text-sm">DIAMETER:</div>
          </div>
          <div className="pl-4 text-sm">
            {diameter === "unknown"
              ? diameter
              : Number(diameter).toLocaleString()}
          </div>
        </TableRow>
        <TableRow>
          <div className="flex flex-row text-lg w-auto">
            <UsersThree />
            <div className="pl-1 text-sm">POPULATION:</div>
          </div>
          <div className="pl-4 text-sm w-auto">
            {population === "unknown"
              ? population
              : Number(population).toLocaleString()}
          </div>
        </TableRow>
        <TableRow>
          <div className="flex flex-row text-lg w-auto">
            <Mountains />
            <div className="pl-1 text-sm">TERRAIN:</div>
          </div>
          <div className="flex flex-col pl-4 text-sm w-auto text-right">
            {terrain}
          </div>
        </TableRow>
        <TableRow>
          <div className="flex flex-row text-lg w-auto">
            <Drop />
            <div className="pl-1 text-sm">WATER:</div>
          </div>
          <div className="flex flex-col pl-4 text-sm w-auto ml-4">
            {surface_water}
          </div>
        </TableRow>
        <TableRow>
          <div className="flex flex-row text-lg w-auto">
            <ArrowClockwise />
            <div className="pl-1 text-sm">ROTATION TIME:</div>
          </div>
          <div className="flex flex-col text-sm w-auto">{rotation_period}</div>
        </TableRow>
      </div>
    </Card>
  );
}
