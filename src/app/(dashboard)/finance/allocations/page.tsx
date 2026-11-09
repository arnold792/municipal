import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Budget Allocations",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Budget Allocations"
      breadcrumbs={["Financial Management", "Budget Allocations"]}
      description="Annual and project budget allocations."
    />
  );
}
