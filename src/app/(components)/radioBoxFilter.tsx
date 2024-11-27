import style from "../(styles)/radioboxes.module.scss";
export const Filters = () => {
  return (
    <div className={style.container}>
      <p>Filter by:</p>
      <section>
        <input name="filterby" type="radio" id="all" />
        <label htmlFor="all">All</label>
      </section>
      <section>
        <input name="filterby" type="radio" id="today" />
        <label htmlFor="today">Today</label>
      </section>
      <section className="radio-group">
        <input name="filterby" type="radio" id="thisweek" />
        <label htmlFor="thisweek">This Week</label>
      </section>
      <section className="radio-group">
        <input name="filterby" type="radio" id="thismonth" />
        <label htmlFor="thismonth">This month</label>
      </section>
    </div>
  );
};
