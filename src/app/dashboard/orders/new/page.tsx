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
            <legend>Add new order</legend>
            <label htmlFor="customerName">Customer name</label>
            <input
              type="text"
              name="customerName"
              id="customerName"
              placeholder="cutomername..."
            />
            <label htmlFor="assignedtruck">Assign driver</label>
            <select name="assigneddriver">
              <option>Peter</option>
              <option>Cloude</option>
              <option>Emmanuel</option>
            </select>

            <input type="submit" name="submit" id="submit" value="Register" />
          </fieldset>
        </form>
      </div>
    </>
  );
};
export default Page;
