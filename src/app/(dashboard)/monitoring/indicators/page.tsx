import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Indicators & Outcomes",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Indicators & Outcomes"
      breadcrumbs={["Monitoring", "Indicators & Outcomes"]}
      description="Output, outcome and impact indicator tracking."
    />
  );
}
