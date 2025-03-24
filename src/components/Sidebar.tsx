import { Suspense } from "react";
import SidebarContent from "./SidebarContent"; // Server Component
import SidebarSkeleton from "./SidebarSkeleton";

export default function Sidebar() {
  return (
    <Suspense fallback={<SidebarSkeleton />}>
      <SidebarContent />
    </Suspense>
  );
}
