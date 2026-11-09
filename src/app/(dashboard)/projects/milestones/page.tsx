import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Milestones",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Milestones"
      breadcrumbs={["Workspace", "Milestones"]}
      description="Cross-project milestone tracking."
    />
  );
}
