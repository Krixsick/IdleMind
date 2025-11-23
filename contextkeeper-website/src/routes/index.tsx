import { createFileRoute } from "@tanstack/react-router";
import { Homepage } from "../Components/homepage";
import { Preview } from "../Components/preview";
import { Info } from "../Components/info";
import WorkflowFlow from "../Components/visualDiagram";
import { Footer } from "../Components/footer";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Homepage></Homepage>
      <Preview></Preview>
      <WorkflowFlow></WorkflowFlow>
      <Info></Info>
      <Footer></Footer>
    </>
  );
}
