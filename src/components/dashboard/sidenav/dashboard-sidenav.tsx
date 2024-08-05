import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Home, Package, Settings, SquareArrowRight, Undo2 } from "lucide-react";
import { DashboardSidenavLink } from "./dashboard-sidenav-link";
import { DashboardSidenavEndpoint } from "./dashboard-sidenav-endpoint";
import { DashboardSidenavBack } from "./dashboard-sidenav-back";
import { Project } from "@prisma/client";
import { DashboardSidenavInfo } from "./dashboard-sidenav-info";
import { DashboardSidenavEndpointsContainer } from "./dashboard-sidenav-endpoints-container";

interface Props {
  project: Project;
}

export const DashboardSidenav = ({ project }: Props) => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-[250px] flex-col border-r p-6">
      {/* Project info */}
      <DashboardSidenavInfo />

      <div className="mt-4 flex-grow border-t pt-4">
        <div className="flex flex-col">
          <DashboardSidenavLink
            icon={<Home className="h-full w-full" />}
            label="Home"
            href={`/dashboard/${project.id}`}
          />
          {/* <DashboardSidenavLink
            icon={<Package className="h-full w-full" />}
            label="Models"
            href={`/dashboard/${project.id}/models`}
          /> */}
          <DashboardSidenavLink
            icon={<Settings className="h-full w-full" />}
            label="Settings"
            href={`/dashboard/${project.id}/settings`}
          />
        </div>

        <DashboardSidenavEndpointsContainer 
          project={project}
        />
      </div>

      {/* back */}
      <DashboardSidenavBack />
    </div>
  );
};
