import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div>
      <h1>
        общий текст
      </h1>
      <Outlet />
    </div>
  )
}