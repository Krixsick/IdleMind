import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect, useState } from "react";
import { Navbar } from "../Components/navbar";
const RootLayout = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMovement = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMovement);
    return document.removeEventListener("mousemove", handleMouseMovement);
  }, []);
  return (
    <>
      <div
        id="cursor-glow"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0, 122, 204, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          position: "fixed",
          top: `${position.y}px`,
          left: `${position.x}px`,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          transition: "opacity 0.5s",
        }}
      />
      <Navbar></Navbar>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
