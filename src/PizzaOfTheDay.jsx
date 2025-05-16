import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>No pizza of the day available</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>{pizzaOfTheDay.name}</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            {intl.format(pizzaOfTheDay.sizes.S)}
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
        ></img>
      </div>
    </div>
  );
};
