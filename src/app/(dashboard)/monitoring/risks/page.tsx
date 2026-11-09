import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = {
  title: "Risks & Delays",
};

export default function Page() {
  return (
    <ModulePlaceholder
      title="Risks & Delays"
      breadcrumbs={["Monitoring", "Risks & Delays"]}
      description="Risk register and delay escalation."
    />
  );
}
