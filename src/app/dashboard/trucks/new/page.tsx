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
            <legend>Add new truck</legend>
            <label htmlFor="platenumber">Plate number</label>
            <input
              type="text"
              name="platenumber"
              id="platenumber"
              placeholder="driver name..."
            />
            <label htmlFor="phone">Capacity</label>
            <input
              type="capacity"
              name="capacity"
              id="capacity"
              placeholder="driver phone number...."
            />
            <input type="submit" name="submit" id="submit" value="Register" />
          </fieldset>
        </form>
      </div>
    </>
  );
};
export default Page;
