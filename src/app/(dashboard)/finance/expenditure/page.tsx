import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Expenditure",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Expenditure"
      breadcrumbs={["Financial Management", "Expenditure"]}
      description="Validated expenditure transactions."
    />
  );
}
