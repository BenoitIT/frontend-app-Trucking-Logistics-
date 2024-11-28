"use client";
import { Button } from "@/app/(components)/button";
import style from "../../../(styles)/form.module.scss";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className={style.back}>
        <Button label="Go back" OnClick={() => router.back()} />
      </div>
      <div className={style.container}>
        <form>
          <fieldset className={style.contact}>
            <legend>Add new driver</legend>
            <label htmlFor="name">Driver name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="driver name..."
            />
            <label htmlFor="licence number">Licence number</label>
            <input
              type="text"
              name="licence number"
              id="licence number"
              placeholder="driver licence number..."
            />
            <label htmlFor="phone">Phone number</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="driver phone number...."
            />
            <label htmlFor="assignedtruck">Assigned truck</label>
            <select name="assignedtruck">
              <option>Truck one</option>
              <option>Truck two</option>
              <option>Truck three</option>
            </select>
            <input type="submit" name="submit" id="submit" value="Register" />
          </fieldset>
        </form>
      </div>
    </>
  );
};
export default Page;
