import { Outlet } from "react-router-dom";
import { GlobalSearch } from "../../../../widgets/global-search";

export function AppLayout() {
  return (
    <div>
      <h1>
        общий текст
      </h1>
      <GlobalSearch />
      <Outlet />
    </div>
  )
}