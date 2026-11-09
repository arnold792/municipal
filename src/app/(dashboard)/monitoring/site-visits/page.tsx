import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Site Visits",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Site Visits"
      breadcrumbs={["Monitoring", "Site Visits"]}
      description="Scheduled and completed field visits."
    />
  );
}
