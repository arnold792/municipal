import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Site Inspections",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Site Inspections"
      breadcrumbs={["Monitoring", "Site Inspections"]}
      description="Inspection findings, GPS evidence and recommendations."
    />
  );
}
