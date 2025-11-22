import { createFileRoute } from "@tanstack/react-router";
import { Homepage } from "../Components/homepage";
import { Preview } from "../Components/preview";
import { Info } from "../Components/info";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Homepage></Homepage>
      <Preview></Preview>
      <Info></Info>
    </>
  );
}
