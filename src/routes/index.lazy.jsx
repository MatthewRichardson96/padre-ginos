import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="index">
      <div className="index-brand">
        <h1>Welcome to Gino's Pizzeria</h1>
        <p>Gino's Pizzeria is a pizza restaurant that serves pizza and other</p>
      </div>
      <ul>
        <li>
          <Link to="/order">Order Pizza</Link>
        </li>
        <li>
          <Link to="/past">Past Orders</Link>
        </li>
      </ul>
    </div>
  );
}
