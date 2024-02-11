import { Outlet } from "react-router-dom";
import { GlobalSearch } from "../../../../widgets/global-search";

export function AppLayout() {
  return (
    <div>
      <GlobalSearch />
      <Outlet />
    </div>
  )
}