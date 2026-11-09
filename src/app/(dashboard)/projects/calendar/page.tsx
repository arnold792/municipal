import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Project Calendar",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Project Calendar"
      breadcrumbs={["Workspace", "Project Calendar"]}
      description="Calendar of project milestones and site activities."
    />
  );
}
