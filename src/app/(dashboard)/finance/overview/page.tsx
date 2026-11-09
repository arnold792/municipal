import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Budget Overview",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Budget Overview"
      breadcrumbs={["Financial Management", "Budget Overview"]}
      description="Approved budget, commitments, expenditure and variance."
    />
  );
}
