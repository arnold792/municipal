import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Project Board",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Project Board"
      breadcrumbs={["Workspace", "Project Board"]}
      description="Kanban board for lifecycle status management."
    />
  );
}
