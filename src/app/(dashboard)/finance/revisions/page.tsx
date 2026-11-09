import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Budget Revisions",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Budget Revisions"
      breadcrumbs={["Financial Management", "Budget Revisions"]}
      description="Controlled budget revision workflow."
    />
  );
}
