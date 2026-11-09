import { DashboardShell } from "@/components/layout/dashboard-shell";
import { ProjectRegister } from "@/components/projects/project-register";

export const metadata = {
  title: "All Projects",
};

export default function ProjectsPage() {
  return (
    <DashboardShell title="All Projects" breadcrumbs={["Workspace", "All Projects"]}>
      <ProjectRegister />
    </DashboardShell>
  );
}
