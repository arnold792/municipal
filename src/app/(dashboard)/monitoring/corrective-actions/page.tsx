import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Corrective Actions",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Corrective Actions"
      breadcrumbs={["Monitoring", "Corrective Actions"]}
      description="Actions raised from inspections, risks and audits."
    />
  );
}
