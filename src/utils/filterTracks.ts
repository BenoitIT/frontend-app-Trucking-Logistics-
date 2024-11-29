import { driver } from "@/app/(interfaces)/driver";
import { truckData } from "@/app/(interfaces)/truck";

export const getUnassignedTrucks = (trucks: truckData[], drivers: driver[]) => {
  const assignedTruckPlateNumbers = drivers
    ?.filter((driver: driver) => driver?.assigned_truck)
    ?.map((driver) => driver?.assigned_truck);
  return trucks?.filter(
    (truck) => !assignedTruckPlateNumbers?.includes(truck.plate_number)
  );
};
